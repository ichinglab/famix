<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated class="bg-green">
      <q-toolbar>
        <q-btn
          icon="arrow_back_ios_new"
          to="/chat-page"
          round
          flat
          color="black"
        ></q-btn>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
        </q-avatar>
        <q-toolbar-title>
          <q-item clickable to="/IndexPage">Jane </q-item>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  // name: 'LayoutName',

  setup() {
    const leftDrawerOpen = ref(false);

    return {};
  },
};
</script>
