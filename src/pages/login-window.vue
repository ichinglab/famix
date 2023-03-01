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
                max-file-size="1048576"
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
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="registerPayload.dob" mask="YYYY-MM-DD">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>

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
                v-close-popup
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
      <q-form @submit.prevent="loginHandler()" class="q-gutter-md">
        <q-card-section align="center" class="q-pa-md fixed-center">
          <div>
            <q-input
              outlined
              dense
              v-model="loginPayload.identifier"
              rounded
              style="width: 300px"
              label="Email"
            ></q-input>

            <q-input
              v-model="loginPayload.password"
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
            />
          </div>
        </q-card-section>
      </q-form>
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
    const position = ref("top");
    const $router = useRouter();
    const identifier = ref("");
    const password = ref("");
    // create register payload
    const registerPayload = reactive({
      fullName: "",
      email: "",
      phoneNumber: "",
      designation: "",
      gender: "",
      bloodGroup: "",
      dob: null,
      password: "",
      avatarImage: null,
    });
    // create login payload

    const loginPayload = reactive({
      identifier: "",
      password: "",
    });

    // create account

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
          message: "Your Created Account , Please Login",
          color: "positive",
          position: "top",
          timeout: 2000,
        });
      } catch (error) {
        $q.notify({
          message: error.response.data.message,
          color: "red",
          position: "top",
          timeout: 2000,
        });
      }
    };

    // login
    async function loginHandler() {
      try {
        const response = await userService.login(loginPayload);

        if (response.data.success) {
          localStorage.setItem("token", response.data.payload.token);
          const decoded = JwtDecode(response.data.payload.token);
          localStorage.setItem("user", JSON.stringify(decoded));
          $router.push("/FamixHome");

          $q.notify({
            message: "Login Successful",
            color: "green",
            position: "top",
            timeout: 2000,
          });
        } else {
          $q.notify({
            message: "Invalid Login",
            color: "red",
            position: "top",
            timeout: 2000,
          });
        }
      } catch (error) {
        $q.notify({
          message: error.response.data.message,
          color: "red",
          position: "top",
          timeout: 2000,
        });
      }
    }

    return {
      dialog,
      position,
      fullHeight: ref(false),
      dialogRegister: ref(false),
      dialogLogin: ref(false),
      maximizedToggle: ref(true),
      isPwd: ref(true),

      open(pos) {
        position.value = pos;
        dialog.value = true;
      },
      gender: ref("Male"),
      genderOptions: ref(["Male", "Female"]),
      registerPayload,
      createUsers,
      uploadProfileImg,
      loginHandler,
      loginPayload,
      identifier,
      password,
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
