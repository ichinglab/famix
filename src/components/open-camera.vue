<template>
  <div>
    <q-btn color="primary" label="Get Picture" @click="captureImage" />

    <img :src="imageSrc">
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  data () {
    const $q = useQuasar()
    const imageSrc = ref('')

    function captureImage () {
      navigator.camera.getPicture(
        data => { // on success
          imageSrc.value = `data:image/jpeg;base64,${data}`
        },
        () => { // on fail
          $q.notify('Could not access device camera.')
        },
        {
          // camera options
        }
      )
    }

    return {
      imageSrc,
      captureImage
    }
  }
}
</script>
