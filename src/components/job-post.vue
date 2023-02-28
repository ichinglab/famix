<template>
  <div>
    <q-btn
      color="famix"
      dence
      size="13px"
      rounded
      outline
      no-caps
      style="width: 300px"
      label="Post Your Job"
      icon-right="edit"
      @click="dialogJob = true"
    />
    <q-dialog
      v-model="dialogJob"
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
          <div class="text-h6 row flex-center">Post A Job</div>
        </q-card-section>

        <q-card-section align="center" class="q-pa-md">
          <q-form @submit.prevent="createJob()" class="q-gutter-md">
            <div>
              <div>
                <q-input
                  outlined
                  autofocus
                  dense
                  class="q-py-md"
                  v-model="jobPayload.position"
                  rounded
                  style="width: 300px"
                  placeholder="Sr. Software Engineer"
                  label="Job Position"
                ></q-input>

                <q-input
                  outlined
                  v-model="jobPayload.type"
                  dense
                  class="q-py-md"
                  rounded
                  style="width: 300px"
                  label="Job Type"
                  placeholder="Remote / Onsite / Hybrid"
                ></q-input>
                <q-input
                  outlined
                  dense
                  class="q-py-md"
                  rounded
                  v-model="jobPayload.salaryRange"
                  style="width: 300px"
                  label="Salary Range"
                  placeholder="60000 BDT / USD"
                ></q-input>
                <q-input
                  outlined
                  dense
                  class="q-py-md"
                  rounded
                  v-model="jobPayload.experienceLevel"
                  style="width: 300px"
                  label="Experience Level"
                  placeholder="1-2 years"
                ></q-input>
                <q-input
                  outlined
                  dense
                  class="q-py-md"
                  rounded
                  v-model="jobPayload.location"
                  style="width: 300px"
                  label="Job Location"
                  placeholder="Dhaka, Bangladesh"
                ></q-input>
                <q-input
                  outlined
                  dense
                  v-model="jobPayload.details"
                  class="q-py-md"
                  rounded
                  autogrow
                  style="width: 300px"
                  label="Job Details"
                  placeholder="Job Details"
                ></q-input>
              </div>
              <div class="q-pa-md row flex-center">
                <q-btn
                  class="glossy"
                  dense
                  type="submit"
                  v-close-popup
                  rounded
                  style="width: 150px"
                  label="post now"
                />
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { UserService } from "../services/user.service";
import { defineComponent, ref, reactive } from "vue";
const userService = new UserService();
export default defineComponent({
  // name: 'PageName',
  setup() {
    const dialog = ref(false);
    const position = ref("top");
    const $router = useRouter();
    const $q = useQuasar();

    // create Job payload
    const jobPayload = reactive({
      position: "",
      details: "",
      type: "",
      salaryRange: "",
      experienceLevel: "",
      location: "",
    });

    // create Job
    const createJob = async () => {
      try {
        const response = await userService.jobCreate(jobPayload);
        $q.notify({
          message: response.data.message,
          color: "positive",
          position: "top",
          timeout: 2000,
        });
        $router.push("/IndexPage");
      } catch (error) {
        const errorMessage = error.response
          ? error.response.data.message
          : error.message;
        $q.notify({
          message: errorMessage,
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
      dialogJob: ref(false),
      maximizedToggle: ref(true),
      jobPayload,
      createJob,

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
