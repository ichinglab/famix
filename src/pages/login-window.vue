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
      class="glossy"
      to="/forgot-window"
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

      <q-card-section class="q-pa-md absolute-center">
        <div>
          <q-input
            outlined
            dense
            class="q-py-md"
            type="tel"
            rounded
            style="width: 300px"
            label="Phone"
          ></q-input>
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
            label="register now"
          />
        </div>
      </q-card-section>
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
import { defineComponent } from "vue";
import { ref } from "vue";
import loginLogo from "components/Login-logo.vue";
// import loginBtn from "components/Login-btn.vue";
export default defineComponent({
  components: {
    loginLogo,
    // loginBtn,
  },

  // name: 'PageName',
  setup() {
    const dialog = ref(false);
    // const dialog1 = ref(false);
    const position = ref("top");

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
