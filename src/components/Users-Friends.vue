<template>
  <div>
    <q-item
      v-for="user in alluserList"
      :key="user"
      :to="`/user-profile/${user.id}`"
      clickable
      v-ripple
    >
      <div
        class="row flex-center full-width"
        style="max-width: 500px; min-width: 300px"
      >
        <div class="col-3">
          <q-avatar>
            <img :src="user.avatar" />
          </q-avatar>
        </div>
        <div class="col-7">{{ user.fullName }}</div>
        <div class="col-2">
          <q-btn
            round
            dence
            color="light-blue-13"
            flat
            size="10px"
            icon="people"
          ></q-btn>
        </div>
      </div>
    </q-item>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { UserService } from "../services/user.service";
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  // components: { NewChat },
  setup() {
    const $q = useQuasar();
    const userService = new UserService();
    const alluserList = ref([]);
    // Get All Users
    async function fetchAllUsers() {
      try {
        const response = await userService.getAllUsers();
        console.log(response);
        alluserList.value = response.payload;
      } catch (error) {
        console.log(error);
        $q.notify({
          message: error.message || error.message,
          color: "negative",
          position: "top",
          timeout: 2000,
        });
      }
    }
    fetchAllUsers();
    return { alluserList, fetchAllUsers };
  },
});
</script>
