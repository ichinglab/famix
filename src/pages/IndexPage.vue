<template>
  <div class="q-pa-md flex-center" style="max-width: 100%">
    <div class="row flex-center" style="max-width: 100%">
      <q-tabs
        v-model="tab"
        dense
        narrow-indicator
        active-color="green"
        indicator-color="green"
      >
        <q-tab name="feed" label="Feed" />
        <q-tab name="jobs" label="Jobs" />
        <q-tab name="friends" label="friends" />
        <q-tab name="profile" label="profile" />
      </q-tabs>
    </div>

    <q-separator />

    <div class="row flex-center">
      <q-tab-panels v-model="tab" animated>
        <!-- Feed Section -->

        <q-tab-panel name="feed">
          <div row flex-center>
            <!-- create post components -->
            <div class="q-pa-md">
              <createPost />
            </div>
            <!-- create post components -->
            <div v-for="n in 15" :key="n" class="row flex-center">
              <q-card class="bg-green my-card">
                <q-item-section>
                  <q-item-label>
                    <div class="row">
                      <div class="col">
                        <q-avatar size="30px">
                          <img src="https://cdn.quasar.dev/img/mountains.jpg" />
                        </q-avatar>
                        <span class="q-pa-md text-h6">Name</span>
                        <span class="text-h7"> 2:04 AM</span>
                      </div>
                    </div>
                  </q-item-label>
                </q-item-section>
                <img src="https://cdn.quasar.dev/img/mountains.jpg" />

                <q-card-section class="row">
                  <div class="text-h6">Our Changing Planet</div>
                  <q-space />
                  <!-- <div class="text-subtitle2">by Name</div> -->
                  <q-btn flat dense round color="primary" icon="favorite" />
                  <q-btn flat dense round color="primary" icon="bookmark" />
                  <q-btn flat dense round color="primary" icon="share" />
                </q-card-section>
                <q-card-section class="q-pt-none">
                  {{ lorem }}
                </q-card-section>
                <q-card-actions>
                  <q-space />
                  <span class="read_more_text">READ MORE</span>
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
                      {{ lorem }}
                    </q-card-section>
                  </div>
                </q-slide-transition>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Job Section -->

        <q-tab-panel name="jobs">
          <div class="text-h6">Jobs</div>
          Jobs Working !
        </q-tab-panel>

        <!-- Friends Section -->

        <q-tab-panel name="friends">
          <div class="text-h6">Friends</div>
          Friends Working !
        </q-tab-panel>

        <!-- Profile Section -->

        <q-tab-panel name="profile">
          <div class="text-h6">Profile</div>
          Profile Working !
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import createPost from "components/create-post.vue";
export default defineComponent({
  components: { createPost },
  name: "IndexPage",
  setup() {
    return {
      tab: ref("feed"),
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      expanded: ref(false),
    };
  },
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1250px

.row > div
  padding: 10px 15px
  // background: rgba(86,61,124,.15)
  // border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem

.read_more_text
 font-size: 10px
</style>
