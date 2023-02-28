<template>
  <div>
    <div class="row flex-center">
      <q-btn
        class="absolute all-pointer-events"
        size="15px"
        icon="camera"
        round
        dense
        flat
        style="top: 12px; left: 88%"
      >
        <q-tooltip> Change Cover Picture </q-tooltip>
      </q-btn>
      <img
        src="../assets/avator/avatar2.jpeg"
        style="max-width: 100%; max-height: 400px; border-radius: 20px"
      />
      <!-- <pre>{{ getOwnProfile.avatar }}</pre> -->
      <div class="row flex-center my-pic" style="width: 100%">
        <q-avatar size="200px">
          <q-img :src="getOwnProfile.avatar" />
        </q-avatar>
      </div>
    </div>
    <div class="row flex-center" style="padding: 100px">
      <p class="tex-bold text-h5">{{ getOwnProfile.fullName }}</p>
    </div>
    <div class="row flex-center">
      <div style="max-width: 450px">
        <q-tabs v-model="tab" align="justify" narrow-indicator class="q-mb-lg">
          <q-tab class="text-light-blue-13" name="post" label="Post" />
          <q-tab class="text-light-blue-13" name="about" label="About" />
          <q-tab class="text-light-blue-13" name="friend" label="Friend" />
        </q-tabs>

        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="scale"
          transition-next="scale"
          class="text-white"
        >
          <q-tab-panel name="post">
            <div class="text-h6 row flex-center">My Post</div>
            <div
              v-for="post in allStatusList"
              :key="post"
              class="row flex-center"
            >
              <q-card class="bg-grey-10 card">
                <q-item-section>
                  <q-item-label>
                    <div class="row">
                      <div class="q-pl-xs q-pt-xs">
                        <q-avatar size="30px">
                          <img
                            :src="`https://cdn.quasar.dev/img/${post.avator}`"
                          />
                        </q-avatar>
                        <span class="q-pa-md name-texttt text-bold">
                          {{ post.name || "Anomoyus" }}
                        </span>
                      </div>
                      <q-space />
                      <div>
                        <span class="text-h7 text-right">
                          {{
                            new Date(post.createdAt).toISOString().substr(0, 10)
                          }}
                        </span>
                        <span class="text-right">
                          <q-btn
                            flat
                            size="10px"
                            round
                            color="famix"
                            icon="public"
                          >
                            <q-tooltip class="bg-black text-white"
                              >Public</q-tooltip
                            >
                          </q-btn>
                        </span>
                      </div>
                    </div>
                  </q-item-label>
                </q-item-section>
                <img class="q-pt-xs" :src="post.imgUrl" />

                <q-card-section class="row">
                  <div class="text-h6">{{ post.title }}</div>
                  <q-space />
                  <!-- <div class="text-subtitle2">by Name</div> -->
                  <q-btn
                    flat
                    dense
                    color="famix"
                    label="22"
                    icon-right="favorite"
                  >
                    <q-tooltip class="bg-black text-white">Love</q-tooltip>
                  </q-btn>
                  <!-- <q-btn flat dense round color="famix" icon="bookmark">
                    <q-tooltip class="bg-black text-white">Save Post</q-tooltip>
                  </q-btn>
                  <q-btn flat dense round color="famix" icon="share">
                    <ShareNetwork
                      network="facebook"
                      url="https://news.vuejs.org/issues/180"
                      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                      description="This week, I'd like to introduce you to 'Vite', which means 'Fast'. It's a brand new development setup created by Evan You."
                      quote="The hot reload is so fast it\'s near instant. - Evan You"
                      hashtags="vuejs,vite"
                    >
                    </ShareNetwork>
                    <q-tooltip class="bg-black text-white"
                      >Share Network</q-tooltip
                    >
                  </q-btn> -->
                </q-card-section>
                <q-card-section class="q-pt-none">
                  {{ post.status }}
                </q-card-section>
                <!-- <q-card-actions>
                  <q-space />
                  <span class="read_more_text">View More</span>
                  <q-btn
                    color="primary"
                    round
                    flat
                    dense
                    :icon="
                      expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                    "
                    @click="expanded = !expanded"
                  />
                </q-card-actions>

                <q-slide-transition>
                  <div v-show="expanded">
                    <q-separator />
                    <q-card-section class="text-subitle2">
                      {{ post.full_details }}
                    </q-card-section>
                  </div>
                </q-slide-transition> -->
              </q-card>
            </div>
          </q-tab-panel>

          <q-tab-panel name="about">
            <div class="text-h6">About Me</div>
            Frontend Developer (Software) | Vue.js | Quasar js | Angular | Figma
            | Javascript | Git | Node.js | UI/UX | Software Tester | IOS Test
            Flight | Internship Completed at IT Conquest, Canada
          </q-tab-panel>

          <q-tab-panel name="friend">
            <p class="text-h6">Friends</p>
            <div v-for="post in posts" :key="post.id" class="row">
              {{ post.name }}
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { UserService } from "../services/user.service";
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "usersProfile",
  setup() {
    const $q = useQuasar();
    const userService = new UserService();
    const getOwnProfile = ref([]);
    const allStatusList = ref([]);

    const geId = JSON.parse(localStorage.getItem("user"));
    console.log(geId);
    // Get users
    async function fetchProfile() {
      try {
        const response = await userService.getUser(geId.id);
        getOwnProfile.value = response.payload;
      } catch (error) {
        $q.notify({
          message: error.message || error.message,
          color: "negative",
          position: "top",
          timeout: 2000,
        });
      }
    }
    fetchProfile();
    // Get All Status
    async function fetchAllStatus() {
      try {
        const response = await userService.getUsersStatus(geId.id);
        console.log(response);
        allStatusList.value = response.payload;
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
    fetchAllStatus();
    return {
      // tab: ref("about"),
      tab: ref("post"),
      expanded: ref(false),
      getOwnProfile,
      fetchProfile,
      allStatusList,
      fetchAllStatus,
    };
  },
});
</script>

<style lang="sass" scoped>

.row > div
  // padding: 10px 15px
  // background: rgba(86,61,124,.15)
  // border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem


.my-pic
  // padding: -30px
  margin: -110px

.my-card
  width: 100%
  max-width: 1250px
  border: 2px solid #9BD0E5
  border-radius: 25px

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

.my-post
  // padding: -1px
  margin: -15px
</style>
