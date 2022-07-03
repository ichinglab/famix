<template>
  <div>
    <q-btn
      color="green"
      dence
      size="13px"

      outline
      style="width: 300px"
      label="post something"
      icon-right="edit"
      @click="dialogRegister = true"
    />
    <q-dialog
      v-model="dialogRegister"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-black text-white">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6 row flex-center">Post something on your mind</div>
        </q-card-section>

        <q-card-section class="q-pa-md absolute-center">
          <div>
            <q-input
              outlined
              dense
              bottom-slots
              autogrow
              class="q-py-md"
              rounded
              style="width: 300px"
              label="post here"
            ></q-input>
          </div>
          <div class="q-pa-md row flex-center">
            <q-btn
              class="glossy"
              dense
              type="submit"
              rounded
              style="width: 150px"
              label="post now"
              to="/IndexPage"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  // name: 'PageName',
  setup() {
    const dialog = ref(false);
    const position = ref("top");

    return {
      dialog,
      position,
      fullHeight: ref(false),
      dialogRegister: ref(false),
      maximizedToggle: ref(true),
      password: ref(""),
      isPwd: ref(true),
      email: ref(""),
      tel: ref(""),

      open(pos) {
        position.value = pos;
        dialog.value = true;
      },
    };
  },
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px

.body-color
  background-color: blue
</style>
