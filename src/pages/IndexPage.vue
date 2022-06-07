<template>
  <div class="row q-pa-md flex-center">
    <q-tabs v-model="tab" class="row  flex-center">
      <q-tab name="Feed" label="Feed" />
      <q-tab name="Jobs" label="Jobs" />
      <q-tab name="friends" label="friends" />
      <q-tab name="profile" label="profile" />
    </q-tabs>
    <q-page-container>
      <q-page class="q-pa-md">
        <p v-for="n in 15" :key="n">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
          praesentium molestias a adipisci, dolore vitae odit, quidem
          consequatur optio voluptates asperiores pariatur eos numquam rerum
          delectus commodi perferendis voluptate?
        </p>
      </q-page>
    </q-page-container>
  </div>
  <!-- <div class="fixed-center text-h3 text-red-5">Famix Is Under Development</div> -->
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      tab: ref("Feed"),
    };
  },
});
</script>
