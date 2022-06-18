<template>
  <div class="row">
    <div class="col-12">
      <video autoplay ref="videoplay"></video>
    </div>
    <div class="col-12">
      <q-btn
        flat
        icon="play_arrow"
        size="30px"
        round
        dense
        :disable="!enableCamera"
        @click="useCamera"
        color="red"
      ></q-btn>

    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {
      enableCamera: false,
    };
  },
  mounted (){
    if (navigator.mediaDevices.getUserMedia) {
      this.enableCamera = true
    }
  },
  methods: {
    useCamera (){
      navigator.mediaDevices.getUserMedia({ video: true})
      .then(mediaStream => {
      this.$refs.videoplay.srcObject = mediaStream
      })
    }
  }
};
</script>
