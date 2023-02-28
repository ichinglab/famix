<template>
  <div style="max-width: 450px">
    <div>
      <q-list class="">
        <q-expansion-item
          group="somegroup"
          icon="explore"
          label="Accounts Updates"
        >
          <q-card class="full-width">
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-separator />

        <q-expansion-item
          group="somegroup"
          icon="perm_identity"
          default-opened
          label="Security"
        >
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
        to="/"
      />
    </div>
    <q-footer class="bg-green text-center text-black"> @Famix Team </q-footer>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
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
    return {
      isPwd: ref(true),
      oldPassword,
      newPassword,
      repeatPassword,
      checkPasswordsMatch,
      passwordsMatch,
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
