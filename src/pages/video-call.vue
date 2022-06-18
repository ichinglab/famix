<template>
  <q-header elevated class="bg-blue">
    <q-toolbar>
      <q-btn
        icon="arrow_back_ios_new"
        to="/messenger-section"
        round
        flat
      ></q-btn>
    </q-toolbar>
  </q-header>
  <div class=" body flex-center q-pa-md">
    <div class="q-pa-md row flex-center">
      <q-avatar size="100px">
        <img src="https://cutt.ly/rKpEpRh" />
      </q-avatar>
    </div>
    <q-list>
      <q-item class="flex-center">
        <div class="flex-center">
          <p class="rejoan-tex">Foreigner Version</p>
        </div>
      </q-item>
      <q-item class="row flex-center">
        <p class="text-h6 text-grey">Calling...</p>
      </q-item>
      <q-item class="row flex-center">
        <p class="text-h6 text-red">Camera Not Connected!</p>
      </q-item>
      <q-item style="height: 300px; width: 300px" class="flex-center">
        <div class="row text-center">
          <open-camera />
        </div>
      </q-item>
    </q-list>

    <div class="q-pa-md fixed-bottom">
      <div class="row flex-center">
        <q-btn
          color="grey-9"
          round
          dense
          size="20px"
          class="q-mr-lg"
          icon="group_add"
        ></q-btn>
        <q-btn
          color="grey-9"
          round
          dense
          size="20px"
          class="q-mr-lg"
          icon="videocam_off"
        ></q-btn>
        <q-btn
          color="grey-9"
          round
          dense
          size="20px"
          class="q-mr-lg"
          icon="settings_voice"
        ></q-btn>
        <q-btn
          color="red"
          round
          dense
          size="20px"
          class="q-mr-lg"
          to="/messenger-section"
          icon="call_end"
        ></q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import OpenCamera from "src/components/open-camera.vue";
export default {
  components: { OpenCamera },
};
</script>

<style lang="sass" scoped>
.rejoan-tex
  font-size:30px

.body
  // background-image: url("https://cutt.ly/rKpEpRh")
</style>
