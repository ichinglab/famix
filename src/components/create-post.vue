<template>
  <div>
    <q-btn
      color="light-blue-13"
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

        <q-form @submit.prevent="createStatus()" class="q-gutter-md">
          <div class="row flex-center">
            <q-card-section align="center" class="q-pa-md">
              <div style="border: 1px solid white; border-radius: 5px">
                <q-uploader
                  label="Attach Here Image"
                  color="black"
                  flat
                  @added="uploadStatusImg"
                />
              </div>
              <div>
                <q-input
                  outlined
                  dense
                  class="q-py-md full-width"
                  type="text"
                  rounded
                  label="Title"
                  v-model="statusPayload.title"
                ></q-input>
                <q-input
                  outlined
                  dense
                  class="q-py-md full-width"
                  autogrow
                  rounded
                  v-model="statusPayload.status"
                  label="Status"
                ></q-input>
              </div>
              <div class="q-pa-md row flex-center">
                <q-btn
                  class="glossy"
                  dense
                  type="submit"
                  no-caps
                  rounded
                  style="width: 150px"
                  label="Post Now"
                  v-close-popup
                />
              </div>
            </q-card-section>
          </div>
        </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import { useQuasar } from "quasar";
import { UserService } from "src/services/user.service.js";
export default defineComponent({
  // name: 'PageName',
  setup() {
    const dialog = ref(false);
    const position = ref("top");
    const $q = useQuasar();
    const userService = new UserService();

    // create Status payload
    const statusPayload = reactive({
      title: "",
      status: "",
      formImage: null,
    });

    // create Status

    const uploadStatusImg = (image) => {
      statusPayload.formImage = image[0];
    };
    const createStatus = async () => {
      try {
        const formData = new FormData();
        formData.append("title", statusPayload.title);
        formData.append("status", statusPayload.status);
        formData.append("formImage", statusPayload.formImage);

        const response = await userService.statusCreate(formData);
        $q.notify({
          message: "Your Status Created",
          color: "positive",
          position: "top",
          timeout: 2000,
        });
        dialog.value = false;
        window.location.reload();
      } catch (error) {
        $q.notify({
          message: error.response.data.message,
          color: "red",
          position: "top",
          timeout: 2000,
        });
      }
    };
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
      statusPayload,
      createStatus,
      uploadStatusImg,
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
