<template>
  <div>
    <q-header elevated class="bg-light-blue-13">
      <q-toolbar>
        <q-btn
          icon="arrow_back_ios_new"
          to="/chat-page"
          round
          flat
        ></q-btn>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
        </q-avatar>
        <q-toolbar-title>
          <q-item clickable to="/IndexPage">Jane </q-item>
        </q-toolbar-title>
        <q-btn
          icon="phone_enabled"
          dense
          flat
          size="18px"
          to="/audio-call"
          round
        ></q-btn>
        <q-btn
          icon="video_call"
          dense
          flat
          size="18px"
          to="/video-call"
          round
        ></q-btn>
      </q-toolbar>
    </q-header>
    <div class="q-pa-md flex-center row">
      <div style="width: 100%; max-width: 1200px">
        <div>
          <q-chat-message
            name=""
            avatar="https://cdn.quasar.dev/img/avatar3.jpg"
            :text="['hey, how are you?']"
            stamp="7 minutes ago"
            sent
            bg-color="amber-7"
          />
          <q-chat-message
            name="Jane"
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="[
              'doing fine, how r you?',
              'I just feel like typing a really, really, REALLY long message to annoy you...',
            ]"
            size="6"
            stamp="4 minutes ago"
            text-color="white"
            bg-color="light-blue-13"
          />
          <q-chat-message
            name="Jane"
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['Did it work?']"
            stamp="1 minutes ago"
            size="8"
            text-color="white"
            bg-color="light-blue-13"
          />
          <q-chat-message
            v-for="(item, index) in submitResult"
            :key="index"
            name=""
            avatar="https://cdn.quasar.dev/img/avatar3.jpg"
            :text="[item.value]"
            stamp="just now"
            sent
            bg-color="amber-7"
          />
          <q-spinner-dots size="2rem" />
        </div>

        <!-- Chat Input -->
        <q-footer elevated class="bg-black">
          <q-form @submit="onSubmit">
            <div class="row flex-center">
              <div class="col-10">
                <q-input
                  v-model="name"
                  bottom-slots
                  name="name"
                  outlined
                  clearable
                  rounded
                  dense
                  color="green"
                >
                  <template v-slot:before>
                    <q-avatar size="43px">
                      <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
                    </q-avatar>
                  </template>
                </q-input>
              </div>
              <div class="col-1">
                <q-btn round type="submit" size="25px" dense flat icon="send" />
              </div>
            </div>
          </q-form>
        </q-footer>
        <!-- <div class="q-pa-md q-gutter-md fixed-bottom">
          <q-form @submit="onSubmit">
            <div class="row flex-center">
              <div class="col-10">
                <q-input
                  v-model="name"
                  bottom-slots
                  name="name"
                  outlined
                  clearable
                  rounded
                  dense
                  color="green"
                >
                  <template v-slot:before>
                    <q-avatar size="43px">
                      <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
                    </q-avatar>
                  </template>
                </q-input>
              </div>
              <div class="col-1">
                <q-btn round type="submit" size="25px" dense flat icon="send" />
              </div>
            </div>
          </q-form>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
// import ChatInput from "components/Chat-Input.vue";

export default {
  setup() {
    const submitResult = ref([]);

    return {
      name: ref(""),
      submitResult,

      onSubmit(evt) {
        const formData = new FormData(evt.target);
        const data = [];

        for (const [name, value] of formData.entries()) {
          data.push({
            name,
            value,
          });
        }

        submitResult.value = data;
      },
    };
  },
};
</script>
