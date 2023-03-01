<template>
  <div>
    <div class="row flex-center">
      <JobPost />
    </div>
    <div v-for="post in allJobList" :key="post.id" class="row flex-center">
      <q-card class="bg-grey-10 my-card card">
        <q-item-section>
          <q-item-label>
            <div class="row">
              <div class="q-pl-xs q-pt-xs">
                <q-avatar size="30px">
                  <q-img
                    :src="
                      post.jobPostedBy?.avatar ||
                      'https://cdn.quasar.dev/img/avatar.png'
                    "
                    alt="avatar"
                  />
                </q-avatar>
                <span class="q-pa-md name-texttt text-bold">
                  {{ post.jobPostedBy?.fullName }}
                </span>
              </div>
              <q-space />
              <div>
                <span class="text-h7">
                  {{ new Date(post.createdAt).toISOString().substr(0, 10) }}
                  <q-tooltip class="bg-black text-white">{{
                    new Date(post.createdAt).toISOString().substr(0, 10)
                  }}</q-tooltip>
                </span>
                <span>
                  <q-btn flat size="10px" color="famix" round icon="public">
                    <q-tooltip class="bg-black text-white">Public</q-tooltip>
                  </q-btn>
                </span>
              </div>
            </div>
          </q-item-label>
        </q-item-section>
        <div class="q-pl-md q-pt-md">
          <div>
            <div class="text-h6">Title: {{ post.position }}</div>
            <div>Salary Range: {{ post.salaryRange }}</div>
            <div>Job Location: {{ post.location }}</div>
            <div>Job Type: {{ post.type }}</div>
          </div>
        </div>
        <div class="row q-pt-md">
          <div class="col">
            <q-btn flat dense round color="famix" icon="favorite">
              <q-tooltip class="bg-black text-white">Love</q-tooltip>
            </q-btn>
          </div>
          <div class="text-right col">
            <span class="read_more_text famix">Job Details</span>
            <q-btn
              color="famix"
              round
              flat
              class="text-right"
              dense
              :icon="
                post.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
              "
              @click="post.expanded = !post.expanded"
            />
          </div>
        </div>

        <q-slide-transition>
          <div v-show="post.expanded">
            <q-separator />
            <q-card-section
              v-if="post.details.split(' ').length > 3"
              class="text-subtitle2"
            >
              <p>{{ post.details }}</p>
            </q-card-section>
            <q-card-section v-else class="text-subtitle2">
              <p>No More Details There</p>
            </q-card-section>
            <q-separator />
            <div class="row flex-center q-pa-md">
              <q-btn
                unelevated
                class="body-btn"
                no-caps
                label="Drop Your CV"
                :to="`/messenger-section/${post.jobPostedBy?.id}`"
              ></q-btn>
            </div>
          </div>
        </q-slide-transition>
      </q-card>
    </div>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { UserService } from "../services/user.service";
import { defineComponent, ref, reactive } from "vue";
import JobPost from "./job-post.vue";
export default defineComponent({
  name: "FamixHome",
  setup() {
    const $q = useQuasar();
    const userService = new UserService();
    const allJobList = ref([]);
    // Get All jobs
    async function fetchAllJobs() {
      try {
        const response = await userService.getAllJob();
        console.log(response);
        allJobList.value = response.payload;
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
    fetchAllJobs();
    return {
      fetchAllJobs,

      tab: ref("feed"),
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      expanded: ref(false),
      allJobList,
    };
  },
  components: { JobPost },
});
</script>
<style lang="sass" scoped>

.row > div
  // padding: 10px 15px
  // background: rgba(86,61,124,.15)
  // border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem

.read_more_text
 font-size: 10px

.name-texttt
  font-size: 15px
</style>
