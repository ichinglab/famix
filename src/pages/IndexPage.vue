<template>
  <div class="row q-pa-md flex-center">
    <q-tabs
      v-model="tab"
      dense
      narrow-indicator
      active-color="green"
      indicator-color="green"
      class="row flex-center"
    >
      <q-tab name="feed" label="Feed" />
      <q-tab name="jobs" label="Jobs" />
      <q-tab name="friends" label="friends" />
      <q-tab name="profile" label="profile" id="profile"/>
    </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="feed">
          <div class="text-h6">Feeds</div>
          <q-page-container>
            <q-page class="q-pa-md">
              <p v-for="n in 1500" :key="n">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                nihil praesentium molestias a adipisci, dolore vitae odit,
                quidem consequatur optio voluptates asperiores pariatur eos
                numquam rerum delectus commodi perferendis voluptate?
              </p>
            </q-page>
          </q-page-container>
        </q-tab-panel>

        <q-tab-panel name="jobs">
          <div class="text-h6">Jobs</div>
          Jobs Working !
        </q-tab-panel>

        <q-tab-panel name="friends">
          <div class="text-h6">Friends</div>
          Friends Working !
        </q-tab-panel>
        <q-tab-panel name="profile">
          <div class="text-h6">Profile</div>
          Profile Working !
        </q-tab-panel>
      </q-tab-panels>
    </div>
    <q-separator />
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      tab: ref("feed"),
    };
  },
});
</script>
