<template>
  <div class="q-pa-md">
    <q-list v-for="n in 5" :key="n" separator class="text-weight-bolder">
      <q-item v-for="user in users" :key="user.id" to="messenger-section" clickable v-ripple>
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
const users = [
  {
    id: 1,
    name: "Ruddy Jedrzej",
    last_message: "Hey baby?",
    avator: "avatar1.jpg",
  },
  {
    id: 2,
    name: "Mallorie Alessandrini",
    last_message: "where you? need you now.",
    avator: "avatar2.jpg",
  },
  {
    id: 3,
    name: "Elisabetta Wicklen",
    last_message: "f*** bloody ",
    avator: "avatar3.jpg",
  },
  {
    id: 4,
    name: "Humayun Azad",
    last_message: "Let's smoke for outside?",
    avator: "avatar4.jpg",
  },
  {
    id: 5,
    name: "Sara Chowdhury",
    last_message: "Hey Rocky , what's up?",
    avator: "avatar5.jpg",
  },
  {
    id: 5,
    name: "Jeme Farhana",
    last_message: "Hello baby?",
    avator: "avatar6.jpg",
  },
  {
    id: 6,
    name: "MD Nayeem",
    last_message: "Dost koi tui?",
    avator: "avatar7.jpg",
  },
  {
    id: 7,
    name: "Sejuti Chakrabarty",
    last_message: "What are you doing baby?",
    avator: "avatar4.jpg",
  },
  {
    id: 8,
    name: "Sneha Khan",
    last_message: "you: I don't go.",
    avator: "avatar4.jpg",
  },
  {
    id: 9,
    name: "Tara Sutaria",
    last_message: "Sorry I'm late !",
    avator: "avatar4.jpg",
  },
  {
    id: 10,
    name: "Mahmud Alam",
    last_message: "Dst ami mirpur 1 a .",
    avator: "avatar4.jpg",
  },
  {
    id: 11,
    name: "Sohanur Rahman",
    last_message: "you: nare aj ar ber hobo nah",
    avator: "avatar4.jpg",
  },
  {
    id: 12,
    name: "Waterfall Model",
    last_message: "Sorry bro you software doesn't have any requirment with me",
    avator: "avatar4.jpg",
  },
  {
    id: 4,
    name: "Agile Model",
    last_message: "Welcome to my model",
    avator: "avatar4.jpg",
  },
];
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  setup() {
    return {users};
  },
});
</script>
