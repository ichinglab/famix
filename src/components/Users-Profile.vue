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
        style="max-width: 100%; max-height: 400px ; border-radius: 20px"
      />
      <div class="row flex-center my-pic" style="width: 100%">
        <q-avatar size="200px">
          <img src="../assets/avator/avatar2.jpeg" />
        </q-avatar>
      </div>
    </div>
    <div class="row flex-center" style="padding: 100px">
      <p class="tex-bold text-h5">Ruddy Tanna</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "usersProfile",
  setup() {
    return {};
  },
};
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
</style>
