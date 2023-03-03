<template>
  <div>
    <div class="row flex-center">
      <q-btn
        class="absolute all-pointer-events"
        size="15px"
        icon="camera"
        @click="confirmCover = true"
        round
        dense
        flat
        style="top: 12px; left: 88%"
      >
        <q-tooltip> Change Cover Picture </q-tooltip>
      </q-btn>
      <img
        :src="
          getOwnProfile.cover ||
          'https://www.xilinx.com/content/xilinx/en/products/design-tools/resources/the-developers-guide-to-blockchain-development/_jcr_content/root/parsysFullWidth/xilinxflexibleslab/xilinxflexibleslab-parsys/xilinxcolumns_397154/childParsys-0/xilinximage_copy_cop.img.png/1644357944737.png'
        "
        style="max-width: 100%; max-height: 400px; border-radius: 20px"
      />
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
            <div class="text-h6 row flex-center">About Me</div>
            <div>
              {{ getOwnProfile.bio }}
            </div>
          </q-tab-panel>

          <q-tab-panel name="friend">
            <div class="text-h6 q-py-md row flex-center">Friends</div>
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
        <div class="row flex-center">
          <q-btn
            color="famix"
            rounded
            outline
            no-caps
            icon="edit"
            label="Update Picture"
            v-close-popup
            @click="imageUpdate = true"
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
  <!-- updates Profile image  dialog -->
  <q-dialog v-model="imageUpdate" persistent>
    <q-card flat class="card">
      <q-form @submit.prevent="updateUserProfileImg()">
        <div>
          <div class="row flex-center q-pt-sm">
            <q-uploader
              @added="updatesProfileImg"
              class="text-white"
              bordered
              flat
              label="Upload an image"
              style="max-width: 450px"
            />
          </div>
          <div class="row flex-center q-py-md">
            <q-btn
              color="famix"
              rounded
              outline
              no-caps
              icon="edit"
              label="Update Now"
              v-close-popup
              type="submit"
            />
            <q-btn
              color="famix"
              rounded
              outline
              no-caps
              class="q-ml-sm"
              label="Cancel"
              v-close-popup
            />
          </div>
        </div>
      </q-form>
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
        <div class="row flex-center">
          <q-btn
            color="famix"
            rounded
            outline
            no-caps
            icon="edit"
            label="Update Cover"
            v-close-popup
            @click="coverUpdate = true"
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
  <!-- updates Profile image  dialog -->
  <q-dialog v-model="coverUpdate" persistent>
    <q-card flat class="card">
      <q-form @submit.prevent="updateUserCoverImg()">
        <div>
          <div class="row flex-center q-pt-sm">
            <q-uploader
              @added="updatesCoverImg"
              bordered
              flat
              class="text-white"
              label="Upload an image"
              style="max-width: 450px"
            />
          </div>
          <div class="row flex-center q-py-md">
            <q-btn
              color="famix"
              rounded
              outline
              no-caps
              icon="edit"
              label="Update Now"
              v-close-popup
              type="submit"
            />
            <q-btn
              color="famix"
              rounded
              outline
              no-caps
              class="q-ml-sm"
              label="Cancel"
              v-close-popup
            />
          </div>
        </div>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script>
import { useQuasar } from "quasar";
import { UserService } from "../services/user.service";
import { ref, defineComponent, reactive } from "vue";

export default defineComponent({
  name: "usersProfile",
  setup() {
    const $q = useQuasar();
    const userService = new UserService();
    const getOwnProfile = ref([]);
    const getProfilePost = ref([]);
    const alluserList = ref([]);

    const geId = JSON.parse(localStorage.getItem("user"));
    // Update Profile Image payload
    const ppUpdatePayload = reactive({
      avatarImage: null,
    });
    // Update Cover Image payload
    const ccUpdatePayload = reactive({
      avatarImage: null,
    });
    // Get users
    async function fetchProfile() {
      try {
        const response = await userService.getUser(geId.id);
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

    // PP updates

    const updatesProfileImg = (image) => {
      ppUpdatePayload.avatarImage = image[0];
    };
    const updateUserProfileImg = async () => {
      try {
        const formData = new FormData();
        formData.append("avatarImage", ppUpdatePayload.avatarImage);

        const response = await userService.updateProfilePic(formData, geId.id);
        $q.notify({
          message: "Your Profile Image has been updated",
          color: "positive",
          position: "top",
          timeout: 2000,
        });
        fetchProfile();
      } catch (error) {
        $q.notify({
          message: error.response.data.message,
          color: "red",
          position: "top",
          timeout: 2000,
        });
      }
    };

    // Cover updates

    const updatesCoverImg = (image) => {
      ccUpdatePayload.coverImage = image[0];
    };
    const updateUserCoverImg = async () => {
      try {
        const formData = new FormData();
        formData.append("coverImage", ccUpdatePayload.coverImage);

        const response = await userService.updateProfilePic(formData, geId.id);
        $q.notify({
          message: "Your Cover Image has been updated",
          color: "positive",
          position: "top",
          timeout: 2000,
        });
        fetchProfile();
      } catch (error) {
        $q.notify({
          message: error.response.data.message,
          color: "red",
          position: "top",
          timeout: 2000,
        });
      }
    };
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
    return {
      // tab: ref("about"),
      tab: ref("post"),
      expanded: ref(false),
      getOwnProfile,
      fetchProfile,
      getProfilePost,
      confirm: ref(false),
      imageView: ref(false),
      imageUpdate: ref(false),
      updatesProfileImg,
      ppUpdatePayload,
      updateUserProfileImg,
      alluserList,
      fetchAllUsers,
      coverView: ref(false),
      coverUpdate: ref(false),
      confirmCover: ref(false),
      updatesCoverImg,
      ccUpdatePayload,
      updateUserCoverImg,
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
