<template>
  <div>
    <div class="row flex-center">
      <q-img
        :src="
          getOwnProfile.cover ||
          'https://www.xilinx.com/content/xilinx/en/products/design-tools/resources/the-developers-guide-to-blockchain-development/_jcr_content/root/parsysFullWidth/xilinxflexibleslab/xilinxflexibleslab-parsys/xilinxcolumns_397154/childParsys-0/xilinximage_copy_cop.img.png/1644357944737.png'
        "
        style="max-width: 550px; max-height: 400px; border-radius: 20px"
      >
        <q-btn
          class="absolute all-pointer-events"
          size="15px"
          icon="view_in_ar"
          @click="confirmCover = true"
          round
          dense
          flat
          style="top: 12px; left: 88%"
        >
          <q-tooltip> Expand Cover Picture </q-tooltip>
        </q-btn>
      </q-img>
      <div class="row flex-center my-pic" style="width: 100%">
        <q-item style="border-radius: 50%" clickable @click="confirm = true">
          <q-avatar size="200px">
            <q-img
              style="height: 200px; width: 200px"
              :src="getOwnProfile.avatar"
            />
          </q-avatar>
        </q-item>
      </div>
    </div>
    <div class="row flex-center" style="padding-top: 100px">
      <p class="tex-bold text-h5">{{ getOwnProfile.fullName }}</p>
    </div>
    <div class="row flex-center">
      <div style="max-width: 450px">
        <q-tabs v-model="tab" align="justify" narrow-indicator class="q-mb-lg">
          <q-tab class="text-famix" name="post" label="Post" />
          <q-tab class="text-famix" name="about" label="About" />
          <q-tab class="text-famix" name="chat" label="Chat" />
        </q-tabs>

        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="scale"
          transition-next="scale"
          class="text-white"
        >
          <q-tab-panel name="post">
            <div class="text-h6 row flex-center">
              {{ getOwnProfile.fullName }}'s Post
            </div>
            <div
              v-for="post in getProfilePost"
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
                            :src="
                              post.statusPostedBy?.avatar ||
                              'https://cdn.quasar.dev/img/avatar.png'
                            "
                          />
                        </q-avatar>
                        <span class="q-pa-md name-texttt text-bold">
                          {{ post.statusPostedBy?.fullName || "Anomoyus" }}
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
                </q-card-section>
                <q-card-section class="q-pt-none">
                  {{ post.status }}
                </q-card-section>
              </q-card>
            </div>
          </q-tab-panel>

          <q-tab-panel name="about">
            <div class="text-h6 row flex-center">
              About {{ getOwnProfile.fullName }}
            </div>
            <div>
              {{
                getOwnProfile.bio ||
                "Biography is not appaering now, Come back later"
              }}
            </div>
          </q-tab-panel>

          <q-tab-panel name="chat">
            <div class="text-h6 row flex-center">
              Connect With Messenger Now
            </div>
            <div class="row flex-center">
              <q-btn
                outline
                rounded
                color="famix"
                label="Open Messenger"
                icon="chat"
                no-caps
                :to="`/messenger-section/${getOwnProfile.id}`"
              />
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </div>
  <!-- Profile updates dialog -->
  <q-dialog v-model="confirm">
    <q-card flat class="card">
      <q-card-section>
        <div class="row flex-center">
          <q-btn
            color="famix"
            rounded
            outline
            no-caps
            icon="fullscreen"
            label="View Picture"
            v-close-popup
            @click="imageView = true"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
  <!-- Profile image view dialog -->
  <q-dialog v-model="imageView">
    <q-card flat class="card">
      <q-img
        :src="getOwnProfile.avatar"
        spinner-color="famix"
        spinner-size="82px"
        style="width: 100%; height: 100%"
      />
    </q-card>
  </q-dialog>
  <!-- Cover updates dialog -->
  <q-dialog v-model="confirmCover">
    <q-card flat class="card">
      <q-card-section>
        <div class="row flex-center">
          <q-btn
            color="famix"
            rounded
            outline
            no-caps
            icon="fullscreen"
            label="View Cover"
            v-close-popup
            @click="coverView = true"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
  <!-- Profile image view dialog -->
  <q-dialog v-model="coverView">
    <q-card flat class="card">
      <q-img
        :src="
          getOwnProfile.cover ||
          'https://www.xilinx.com/content/xilinx/en/products/design-tools/resources/the-developers-guide-to-blockchain-development/_jcr_content/root/parsysFullWidth/xilinxflexibleslab/xilinxflexibleslab-parsys/xilinxcolumns_397154/childParsys-0/xilinximage_copy_cop.img.png/1644357944737.png'
        "
        spinner-color="famix"
        spinner-size="82px"
        style="width: 100%; height: 100%"
      />
    </q-card>
  </q-dialog>
</template>

<script>
import { useQuasar } from "quasar";
import { UserService } from "../services/user.service";
import { ref, defineComponent } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "usersProfile",
  setup() {
    const $q = useQuasar();
    const userService = new UserService();
    const getOwnProfile = ref([]);
    const getProfilePost = ref([]);
    const $route = useRoute();
    // Get users
    async function fetchProfile() {
      try {
        const response = await userService.getUser($route.params.id);
        getOwnProfile.value = response.payload;
        getProfilePost.value = response.payload.statuses;
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

    return {
      // tab: ref("about"),
      tab: ref("post"),
      expanded: ref(false),
      getOwnProfile,
      fetchProfile,
      getProfilePost,
      confirm: ref(false),
      imageView: ref(false),
      confirmCover: ref(false),
      coverView: ref(false),
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
