<template>
  <div class="q-pa-md">
    <q-list v-for="n in 5" :key="n"  separator class="text-weight-bolder">
      <q-item v-for="user in users" :key="user.id" to="messenger-section" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img :src="`https://cdn.quasar.dev/img/${user.avator}`">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{user.name}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-badge :color="user.online ? 'green' : 'grey'" rounded>
            {{ user.online ? "" : "" }}
          </q-badge>
        </q-item-section>
        <!-- <q-item-label caption>
          <q-btn round dence color="green" flat size="10px" icon="fiber_manual_record"></q-btn>
        </q-item-label> -->
      </q-item>
    </q-list>
    <!-- <NewChat /> -->
    <!-- cvtygvytgvytgv -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
// import NewChat from "src/components/new-chat.vue";
const users = [
  {
    id: 1,
    name: "Fatema",
    last_message: "Hey baby?",
    avator: 'avatar1.jpg',
    online: true,
  },
  {
    id: 2,
    name: "Sadia",
    last_message: "where you? need you now.",
    avator: 'avatar2.jpg',
    online: true,
  },
  {
    id: 3,
    name: "Taslima Wicklen",
    last_message: "Hi Rocky",
    avator: 'avatar3.jpg',
    online: true,
  },
  {
    id: 4,
    name: "Humayun Azad",
    last_message: "Let's smoke for outside?",
    avator: 'avatar4.jpg',
    online: true,
  },
  {
    id: 5,
    name: "Sara Chowdhury",
    last_message: "Hey Rocky , what's up?",
    avator: 'avatar5.jpg',
    online: true,
  },
  {
    id: 6,
    name: "Jeme Farhana",
    last_message: "Hello baby?",
    avator: 'avatar6.jpg',
    online: true,
  },
  {
    id: 7,
    name: "MD Nayeem",
    last_message: "Dost koi tui?",
    avator: 'avatar1.jpg',
    online: true,
  },
  {
    id: 8,
    name: "Sejuti Chakrabarty",
    last_message: "What are you doing?",
    avator: 'avatar2.jpg',
    online: true,
  },
  {
    id: 9,
    name: "Sneha Khan",
    last_message: "you: I don't go.",
    avator: 'avatar3.jpg',
    online: true,
  },
  {
    id: 10,
    name: "Tara Sutaria",
    last_message: "Sorry I'm late !",
    avator: 'avatar4.jpg',
    online: true,
  },
  {
    id: 11,
    name: "Mahmud Alam",
    last_message: "Dst ami mirpur 1 a .",
    avator: 'avatar5.jpg',
    online: true,
  },
  {
    id: 12,
    name: "Sohanur Rahman",
    last_message: "you: nare aj ar ber hobo nah",
    avator: 'avatar6.jpg',
    online: true,
  },
  {
    id: 13,
    name: "Waterfall Model",
    last_message: "Sorry bro you software doesn't have any requirment with me",
    avator: 'avatar1.jpg',
    online: true,
  },
  {
    id: 14,
    name: "Agile Model",
    last_message: "Welcome to my model",
    avator: 'avatar2.jpg',
    online: true,
  },
];
export default defineComponent({
  // components: { NewChat },
  setup() {
    return { users };
  },
});
</script>
