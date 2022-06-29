<template>
  <div class="row flex-center" >
    <q-list
      v-for="n in 8"
      :key="n"
      class="text-weight-bolder "
      style="width:300px"
    >
      <q-item
        v-for="user in users"
        :key="user.id"
        to=""
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar>
            <img :src="`https://cdn.quasar.dev/img/${user.avator}`" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>
        <q-item-label caption>
          <q-btn
            round
            dence
            color="green"
            flat
            size="10px"
            icon="people"
          ></q-btn>
        </q-item-label>
      </q-item>
    </q-list>
    <!-- <NewChat /> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
// import NewChat from "src/components/new-chat.vue";
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
    id: 6,
    name: "Jeme Farhana",
    last_message: "Hello baby?",
    avator: "avatar6.jpg",
  },
  {
    id: 7,
    name: "MD Nayeem",
    last_message: "Dost koi tui?",
    avator: "avatar1.jpg",
  },
  {
    id: 8,
    name: "Sejuti Chakrabarty",
    last_message: "What are you doing baby?",
    avator: "avatar2.jpg",
  },
  {
    id: 9,
    name: "Sneha Khan",
    last_message: "you: I don't go.",
    avator: "avatar3.jpg",
  },
  {
    id: 10,
    name: "Tara Sutaria",
    last_message: "Sorry I'm late !",
    avator: "avatar4.jpg",
  },
  {
    id: 11,
    name: "Mahmud Alam",
    last_message: "Dst ami mirpur 1 a .",
    avator: "avatar5.jpg",
  },
  {
    id: 12,
    name: "Sohanur Rahman",
    last_message: "you: nare aj ar ber hobo nah",
    avator: "avatar6.jpg",
  },
  {
    id: 13,
    name: "Waterfall Model",
    last_message: "Sorry bro you software doesn't have any requirment with me",
    avator: "avatar1.jpg",
  },
  {
    id: 14,
    name: "Agile Model",
    last_message: "Welcome to my model",
    avator: "avatar2.jpg",
  },
];
export default defineComponent({
  // components: { NewChat },
  setup() {
    return { users };
  },
});
</script>
