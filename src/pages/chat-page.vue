<template>
  <div class="q-pa-md">
    <q-list v-for="n in 15" :key="n"  separator class="text-weight-bolder">
      <q-item to="messenger-section" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <q-img src="https://cdn.quasar.dev/img/avatar5.jpg"></q-img>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Name</q-item-label>
          <q-item-label caption>Last Message</q-item-label>
        </q-item-section>
          <q-item-label caption>
            <q-btn round dence color="grey-9" size="6px" icon="done"></q-btn>
          </q-item-label>
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
