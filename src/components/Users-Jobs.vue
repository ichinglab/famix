<template>
  <div>
    <div class="row flex-center">
      <JobPost />
    </div>
    <div
      style="max-width: 500px"
      v-for="post in allJobList"
      :key="post.id"
      class="row flex-center"
    >
      <q-card class="bg-grey-10 my-card">
        <q-item-section>
          <q-item-label>
            <div class="row">
              <div class="col q-pl-xs q-pt-xs">
                <q-avatar size="30px">
                  <img
                    src="https://cdn.quasar.dev/img/avatar.png"
                    alt="avatar"
                  />
                </q-avatar>
                <span class="q-pa-md name-texttt text-bold">
                  Rocky Samrat
                </span>
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
        <q-card-section class="row">
          <div class="text-h6">
            <div>
              <div>
                <p>{{ post.details.split(" ").slice(0, 3).join(" ") }}</p>
              </div>
            </div>
          </div>
          <q-space />
          <q-btn flat dense round color="famix" icon="favorite">
            <q-tooltip class="bg-black text-white">Love</q-tooltip>
          </q-btn>
          <q-btn flat dense round color="famix" icon="bookmark">
            <q-tooltip class="bg-black text-white">Save Post</q-tooltip>
          </q-btn>
          <q-btn flat dense round color="famix" icon="share">
            <q-tooltip class="bg-black text-white">Share Network</q-tooltip>
          </q-btn>
        </q-card-section>
        <div class="text-right">
          <span class="read_more_text famix">Show More</span>
          <q-btn
            color="famix"
            round
            flat
            dense
            :icon="post.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="post.expanded = !post.expanded"
          />
        </div>

        <q-slide-transition>
          <div v-show="post.expanded">
            <q-separator />
            <q-card-section
              v-if="post.details.split(' ').length > 3"
              class="text-subtitle2"
            >
              <p>{{ post.details.split(" ").slice(3).join(" ") }}</p>
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
  name: "IndexPage",
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
.my-card
  width: 100%
  max-width: 1250px

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
