<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header class="bg-light-blue-13" reveal elevated>
      <q-toolbar dence>
        <!-- <q-btn
          flat
          round
          dense
          icon="menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title>
          <q-btn dense flat icon="arrow_back_ios_new" to="/FamixHome"></q-btn>
          Famix Chat
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs dense indicator-color="white" inline-label>
        <q-route-tab icon="whatsapp" to="/chat-page" replace label="Chats" />
        <q-route-tab
          icon="fiber_manual_record"
          to="/active-people"
          replace
          label="Active friends"
        />
      </q-tabs>
    </q-header>

    <!-- (Optional) The Footer -->
    <!-- <q-footer>
      <q-tabs switch-indicator>
        <q-route-tab
          icon="map"
          to="/your/route"
          replace
          label="One Tab"
        />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs>

      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          Footer
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <!-- <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="bg-grey-2"
    >
      <q-scroll-area class="fit q-pa-sm">
      </q-scroll-area>
    </q-drawer> -->

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
