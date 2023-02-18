<template>
  <div class="q-py-md row flex-center" style="padding: 100px">
    <loginLogo />
  </div>

  <!-- Login BTN -->
  <div class="q-py-md row flex-center">
    <q-btn
      class="glossy"
      dense
      rounded
      style="width: 150px"
      label="login"
      @click="dialogLogin = true"
    />
  </div>

  <!-- Register BTN -->

  <div class="q-pa-md row flex-center">
    <q-btn
      class="glossy"
      dense
      rounded
      style="width: 150px"
      label="register"
      @click="dialogRegister = true"
    />
  </div>
  <!-- Forgot BTN -->

  <!-- <div class="q-py-md row flex-center">
    <q-btn
      disable
      class="glossy"
      dense
      rounded
      style="width: 150px"
      label="forgot"
    />
  </div> -->
  <!-- <loginBtn /> -->
  <q-dialog
    v-model="dialogRegister"
    persistent
    :maximized="maximizedToggle"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="bg-black text-white">
      <!-- <loginBtn /> -->
      <q-bar>
        <q-space />
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <div class="text-h6 row flex-center">Wellcome To Famix Chat</div>
      </q-card-section>
      <q-form @submit.prevent="createUsers()" class="q-gutter-md">
        <div class="row flex-center">
          <q-card-section align="center" class="q-pa-md">
            <div style="border: 1px solid white; border-radius: 5px">
              <q-uploader
                label="Upload Your Profile Picture"
                color="black"
                flat
                @added="uploadProfileImg"
              />
            </div>
            <div>
              <q-input
                outlined
                dense
                class="q-py-md full-width"
                type="text"
                rounded
                label="Full Name"
                v-model="registerPayload.fullName"
              ></q-input>
              <q-input
                outlined
                dense
                class="q-py-md full-width"
                type="email"
                rounded
                v-model="registerPayload.email"
                label="Email"
              ></q-input>
              <q-input
                outlined
                dense
                class="q-py-md full-width"
                type="tel"
                rounded
                label="Phone"
                v-model="registerPayload.phoneNumber"
              ></q-input>
              <q-select
                outlined
                dense
                class="q-py-md full-width"
                rounded
                label="Gender"
                v-model="registerPayload.gender"
                :options="genderOptions"
              ></q-select>
              <q-input
                outlined
                dense
                rounded
                class="full-width q-py-md"
                label="Blood Group"
                v-model="registerPayload.bloodGroup"
              ></q-input>
              <q-input
                outlined
                dense
                rounded
                class="full-width q-py-md"
                label="Date of Birth"
                v-model="registerPayload.dob"
              ></q-input>

              <q-input
                v-model="registerPayload.password"
                rounded
                outlined
                label="Password"
                dense
                class="q-py-md full-width"
                :type="isPwd ? 'password' : 'text'"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </div>
            <div class="q-pa-md row flex-center">
              <q-btn
                class="glossy"
                dense
                type="submit"
                no-caps
                rounded
                style="width: 150px"
                label="Register Now"
              />
            </div>
          </q-card-section>
        </div>
      </q-form>
    </q-card>
  </q-dialog>
  <q-dialog
    v-model="dialogLogin"
    persistent
    :maximized="maximizedToggle"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="bg-black text-white">
      <!-- <loginBtn /> -->
      <q-bar>
        <q-space />
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <div class="text-h6 row flex-center">
          Wellcome To Famix Chat Please Login
        </div>
      </q-card-section>

      <q-card-section class="q-pa-md absolute-center">
        <div>
          <q-input
            outlined
            dense
            rounded
            type="email"
            style="width: 300px"
            label="Email"
          ></q-input>

          <q-input
            v-model="password"
            rounded
            outlined
            label="Password"
            dense
            class="q-py-md"
            :type="isPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
        <div class="q-pa-md row flex-center">
          <q-btn
            class="glossy"
            dense
            type="submit"
            rounded
            style="width: 150px"
            label="Login"
            to="/IndexPage"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { UserService } from "src/services/user.service.js";
import JwtDecode from "jwt-decode";

import loginLogo from "components/Login-logo.vue";
// import loginBtn from "components/Login-btn.vue";
export default defineComponent({
  components: {
    loginLogo,
    // loginBtn,
  },

  // name: 'PageName',
  setup() {
    const $q = useQuasar();
    const userService = new UserService();
    const dialog = ref(false);
    // const dialog1 = ref(false);
    const position = ref("top");
    // create Admin payload
    const registerPayload = reactive({
      fullName: "",
      email: "",
      phoneNumber: "",
      designation: "",
      gender: "",
      bloodGroup: "",
      dob: "",
      password: "",
      avatarImage: null,
    });

    // create Admin

    const uploadProfileImg = (image) => {
      registerPayload.avatarImage = image[0];
    };
    const createUsers = async () => {
      try {
        const formData = new FormData();
        formData.append("fullName", registerPayload.fullName);
        formData.append("email", registerPayload.email);
        formData.append("phoneNumber", registerPayload.phoneNumber);
        formData.append("designation", registerPayload.designation);
        formData.append("gender", registerPayload.gender);
        formData.append("bloodGroup", registerPayload.bloodGroup);
        formData.append("dob", registerPayload.dob);
        formData.append("password", registerPayload.password);
        formData.append("avatarImage", registerPayload.avatarImage);

        const response = await userService.register(formData);
        $q.notify({
          message: response.data.message,
          color: "positive",
          position: "top",
          timeout: 2000,
        });
        fetchAllUsers();
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
      dialogLogin: ref(false),
      maximizedToggle: ref(true),
      password: ref(""),
      isPwd: ref(true),
      email: ref(""),
      tel: ref(""),

      open(pos) {
        position.value = pos;
        dialog.value = true;
      },
      gender: ref("Male"),
      genderOptions: ref(["Male", "Female"]),
      registerPayload,
      createUsers,
      uploadProfileImg,
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
