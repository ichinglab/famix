<template>
  <div class="row flex-center">
    <q-list class="text-weight-bolder" style="width: 300px">
      <q-item
        v-for="user in alluserList"
        :key="user.id"
        to=""
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar>
            <img :src="user.avatar" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ user.fullName }}</q-item-label>
        </q-item-section>
        <q-item-label caption>
          <q-btn
            round
            dence
            color="light-blue-13"
            flat
            size="10px"
            icon="people"
          ></q-btn>
        </q-item-label>
      </q-item>
    </q-list>
    <!-- <NewChat /> -->
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { UserService } from "../services/user.service";
import { defineComponent, ref, reactive } from "vue";
// import NewChat from "src/components/new-chat.vue";

export default defineComponent({
  // components: { NewChat },
  setup() {
    const $q = useQuasar();
    const userService = new UserService();
    const alluserList = ref([]);
    // Get All jobs
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
