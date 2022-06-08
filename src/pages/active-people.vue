<template>
  <div class="q-pa-md">
    <q-list v-for="n in 5" :key="n"  separator class="text-weight-bolder">
      <q-item to="messenger-section" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <q-img src="https://cdn.quasar.dev/img/avatar5.jpg"></q-img>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Name</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  setup() {
    return {
    };
  },
});
</script>
