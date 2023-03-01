<template>
  <div style="max-width: 450px">
    <div>
      <q-list class="">
        <q-expansion-item
          group="somegroup"
          default-opened
          icon="manage_accounts"
          label="Accounts Updates"
        >
          <q-card class="full-width">
            <q-card-section>
              Updates your profile informations.
              <span class="text-red"
                >*Email & Phone number can't be change!</span
              >
            </q-card-section>
            <q-card-section>
              <div>
                <q-input
                  outlined
                  dense
                  class="q-py-md full-width"
                  type="text"
                  rounded
                  label="Full Name"
                  v-model="fullName"
                ></q-input>
                <q-input
                  outlined
                  dense
                  class="q-py-md full-width"
                  type="email"
                  rounded
                  v-model="email"
                  label="Email"
                  disable
                ></q-input>
                <q-input
                  outlined
                  dense
                  class="q-py-md full-width"
                  type="tel"
                  rounded
                  disable
                  label="Phone"
                  v-model="phoneNumber"
                ></q-input>
                <q-input
                  outlined
                  dense
                  class="q-py-md full-width"
                  type="text"
                  rounded
                  label="Address"
                  v-model="address"
                ></q-input>
                <q-input
                  outlined
                  dense
                  class="q-py-md full-width"
                  type="text"
                  rounded
                  label="Bio"
                  v-model="bio"
                ></q-input>
              </div>
              <div class="q-pa-md row flex-center">
                <q-btn
                  v-if="isBioEntered"
                  class="glossy"
                  dense
                  type="submit"
                  no-caps
                  rounded
                  style="width: 150px"
                  label="Update Now"
                  v-close-popup
                />
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-separator />

        <q-expansion-item group="somegroup" icon="lock_reset" label="Security">
          <q-card>
            <q-card-section align="center"> Changes Password</q-card-section>
            <q-separator />
            <q-card-section class="full-width">
              <q-input
                v-model="oldPassword"
                outlined
                rounded
                color="famix"
                dense
                label="Old Password"
                class="q-py-md my-input full-width"
                placeholder="Enter your Old password"
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
              <q-input
                v-model="newPassword"
                color="famix"
                rounded
                outlined
                label="New Password"
                dense
                class="q-py-md my-input full-width"
                :type="isPwd ? 'password' : 'text'"
                placeholder="Enter your new password"
                @input="checkPasswordsMatch"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <q-input
                v-model="repeatPassword"
                outlined
                rounded
                color="famix"
                dense
                label="Repeat New Password"
                placeholder="Enter again your new password"
                :type="isPwd ? 'password' : 'text'"
                class="q-py-md my-input full-width"
                @input="checkPasswordsMatch"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>

              <p v-if="repeatPassword !== newPassword" class="text-red">
                New Password & Repeat Password are not matched!
              </p>
              <p v-else-if="repeatPassword">
                Yeah New Password & Repeat Password are matched! Now you can
                change. Remember your new password for further login.
              </p>
              <p v-else>
                <span class="text-red">⚠</span> New Password & Repeat Password
                should be match
              </p>

              <div class="row flex-center q-py-lg">
                <q-btn
                  outline
                  rounded
                  color="famix"
                  no-caps
                  v-if="passwordsMatch"
                  label="Change Password"
                />
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-separator />

        <q-expansion-item group="somegroup" icon="shopping_cart" label="Third">
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-separator />

        <q-expansion-item group="somegroup" icon="bluetooth" label="Fourth">
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>

    <div class="q-py-md row flex-center">
      <q-btn
        class="glossy"
        dense
        rounded
        style="width: 150px"
        label="logout"
        @click="logout()"
      />
    </div>
    <q-footer class="bg-green text-center text-black"> @Famix Team </q-footer>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default {
  setup() {
    const $q = useQuasar();
    const $router = useRouter();
    const bio = ref("");
    const isBioEntered = ref(false);
    const oldPassword = ref("");
    const newPassword = ref("");
    const repeatPassword = ref("");
    const passwordsMatch = computed(() => {
      return (
        newPassword.value === repeatPassword.value && newPassword.value !== ""
      );
    });

    function checkPasswordsMatch() {
      return passwordsMatch.value;
    }

    function logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("activeTab");
      $q.notify({
        message: "You have been logged out successfully",
        color: "green",
        position: "top",
      });
      $router.push("/");
    }

    watch(bio, () => {
      if (bio.value) {
        isBioEntered.value = true;
      } else {
        isBioEntered.value = false;
      }
    });

    return {
      isPwd: ref(true),
      oldPassword,
      newPassword,
      repeatPassword,
      checkPasswordsMatch,
      passwordsMatch,
      logout,
      bio,
      isBioEntered,
    };
  },
  components: {},
};
</script>
<style scoped>
.my-input {
  max-width: 450px;
}
</style>
