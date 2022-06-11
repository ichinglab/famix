<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-input
        v-model="createPost"
        bottom-slots
        outlined
        rounded
        clearable
        autogrow
        color="green"
        label="Post Here"
        :shadow-text="textareaShadowText"
        @keydown="processTextareaFill"
        @focus="processTextareaFill"
      >
        <template v-slot:before>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
          </q-avatar>
        </template>
        <template v-slot:after>
          <q-btn round dense flat icon="send" />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
import { event } from "quasar";
import { ref, computed } from "vue";

const { stopAndPrevent } = event;

export default {
  setup() {
    const inputModel = ref("");
    const inputFillCancelled = ref(false);
    const inputShadowText = computed(() => {
      if (inputFillCancelled.value === true) {
        return "";
      }

      const t = "Text filled when you press TAB";
      const empty =
        typeof inputModel.value !== "string" || inputModel.value.length === 0;

      if (empty === true) {
        return t;
      } else if (t.indexOf(inputModel.value) !== 0) {
        return "";
      }

      return t.split(inputModel.value).slice(1).join(inputModel.value);
    });

    const createPost = ref("");
    const textareaFillCancelled = ref(false);
    const textareaShadowText = computed(() => {
      if (textareaFillCancelled.value === true) {
        return "";
      }

      const t =
          "This text\nwill be filled\non multiple lines\nwhen you press TAB",
        empty =
          typeof createPost.value !== "string" ||
          createPost.value.length === 0;

      if (empty === true) {
        return t.split("\n")[0];
      } else if (t.indexOf(createPost.value) !== 0) {
        return "";
      }

      return t
        .split(createPost.value)
        .slice(1)
        .join(createPost.value)
        .split("\n")[0];
    });

    return {
      inputModel,
      inputFillCancelled,
      inputShadowText,

      processInputFill(e) {
        if (e === void 0) {
          return;
        }

        if (e.keyCode === 27) {
          if (inputFillCancelled.value !== true) {
            inputFillCancelled.value = true;
          }
        } else if (e.keyCode === 9) {
          if (
            inputFillCancelled.value !== true &&
            this.inputShadowText.length > 0
          ) {
            stopAndPrevent(e);
            inputModel.value =
              (typeof inputModel.value === "string" ? inputModel.value : "") +
              this.inputShadowText;
          }
        } else if (inputFillCancelled.value === true) {
          inputFillCancelled.value = false;
        }
      },

      createPost,
      textareaFillCancelled,
      textareaShadowText,

      processTextareaFill(e) {
        if (e === void 0) {
          return;
        }

        if (e.keyCode === 27) {
          if (textareaFillCancelled.value !== true) {
            textareaFillCancelled.value = true;
          }
        } else if (e.keyCode === 9) {
          if (
            textareaFillCancelled.value !== true &&
            this.textareaShadowText.length > 0
          ) {
            stopAndPrevent(e);
            createPost.value =
              (typeof createPost.value === "string"
                ? createPost.value
                : "") + this.textareaShadowText;
          }
        } else if (textareaFillCancelled.value === true) {
          textareaFillCancelled.value = false;
        }
      },
    };
  },
};
</script>
