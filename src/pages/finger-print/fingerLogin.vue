<template>
  <div class="q-pa-md">
    <q-card class="max-w-md mx-auto">
      <q-card-title class="text-h5 text-center">Login</q-card-title>
      <q-card-section>
        <q-form>
          <q-input
            v-model="email"
            type="email"
            label="Email"
            outlined
            dense
            class="mb-3"
          />
          <q-input
            v-model="password"
            type="password"
            label="Password"
            outlined
            dense
            class="mb-3"
          />
          <q-btn
            @click="login"
            color="primary"
            label="Login"
            class="full-width"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import axios from "axios";
// import { getFingerprint } from "../../fingerprintService.js";
import { getFingerprint } from "src/services/fingerprintService.js";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const fingerprint = await getFingerprint();

      try {
        const response = await axios.post("http://localhost:3000/login", {
          email: this.email,
          password: this.password,
          fingerprint: fingerprint,
        });

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        this.$router.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
