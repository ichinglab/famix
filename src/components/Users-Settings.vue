<template>
  <div class="q-pa-md" style="max-width: 1300px">
    <div class="q-py-md row flex-center">
      <q-btn
        class="glossy"
        dense
        rounded
        style="width: 150px"
        label="logout"
        to="/"
      />
    </div>

    <q-footer class="bg-green text-center text-black"> @Famix Team </q-footer>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {};
  },
};
</script>
