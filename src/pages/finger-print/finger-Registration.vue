<template>
  <q-page class="q-pa-md">
    <q-form @submit.prevent="register">
      <q-input
        v-model="email"
        label="Email"
        type="email"
        dense
        outlined
        required
      />
      <q-input
        v-model="password"
        label="Password"
        type="password"
        dense
        outlined
        required
      />
      <q-input
        v-model="repeatPassword"
        label="Repeat Password"
        type="password"
        dense
        outlined
        required
      />
      <div class="fingerprint-registration">
        <q-btn
          label="Register Fingerprint"
          color="primary"
          @click="registerFingerprint"
          :disabled="!canRegisterFingerprint"
        />
        <q-btn
          label="Remove Fingerprint"
          color="negative"
          @click="removeFingerprint"
          :disabled="!canRemoveFingerprint"
        />
        <div class="fingerprint-message">{{ fingerprintMessage }}</div>
      </div>
      <q-btn
        type="submit"
        label="Register"
        color="primary"
        :disabled="!isValid"
      />
    </q-form>
  </q-page>
</template>

<script>
import { ref, reactive } from "vue";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const repeatPassword = ref("");
    const fingerprintMessage = ref("");
    const canRegisterFingerprint = ref(false);
    const canRemoveFingerprint = ref(false);

    // Initialize FingerprintJS
    const fpPromise = FingerprintJS.load();

    // Register fingerprint
    async function registerFingerprint() {
      try {
        const fp = await fpPromise;
        const result = await fp.register();

        if (result.status === "ok") {
          fingerprintMessage.value = "Fingerprint registered successfully!";
          canRegisterFingerprint.value = false;
          canRemoveFingerprint.value = true;
        } else {
          fingerprintMessage.value = "Fingerprint registration failed!";
        }
      } catch (e) {
        fingerprintMessage.value = "Fingerprint registration failed!";
        console.error(e);
      }
    }

    // Remove fingerprint
    async function removeFingerprint() {
      try {
        const fp = await fpPromise;
        await fp.remove();

        fingerprintMessage.value = "Fingerprint removed successfully!";
        canRegisterFingerprint.value = true;
        canRemoveFingerprint.value = false;
      } catch (e) {
        fingerprintMessage.value = "Fingerprint removal failed!";
        console.error(e);
      }
    }

    // Check if email, password, and repeat password are valid
    function isValid() {
      return (
        email.value !== "" &&
        password.value !== "" &&
        password.value === repeatPassword.value
      );
    }

    // Check if fingerprint can be registered or removed
    function canModifyFingerprint() {
      return (
        window.PasswordCredential ||
        (window.PublicKeyCredential &&
          window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable())
      );
    }

    return {
      email,
      password,
      repeatPassword,
      fingerprintMessage,
      canRegisterFingerprint,
      canRemoveFingerprint,
      registerFingerprint,
      removeFingerprint,
      isValid,
      canModifyFingerprint,
    };
  },

  methods: {
    async register() {
      if (!this.isValid()) {
        return;
      }

      // Register user with email and password

      // Send registration data to server
      const registrationData = {
        email: this.email,
        password: this.password,
      };
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registrationData),
        });

        if (response.ok) {
          // Registration successful, clear inputs and notify user
          this.email = "";
          this.password = "";
          this.repeatPassword = "";
          this.fingerprintMessage = "";
          this.canRegisterFingerprint = this.canModifyFingerprint();
          this.canRemoveFingerprint = false;
          this.$q.notify({
            message: "Registration successful!",
            color: "positive",
            position: "top",
          });
        } else {
          // Registration failed, notify user
          this.$q.notify({
            message: "Registration failed!",
            color: "negative",
            position: "top",
          });
        }
      } catch (e) {
        console.error(e);
        this.$q.notify({
          message: "An error occurred during registration!",
          color: "negative",
          position: "top",
        });
      }
    },
  },
};
</script>

<style scoped>
.fingerprint-registration {
  margin: 20px 0;
}
.fingerprint-message {
  margin-top: 10px;
}
</style>
