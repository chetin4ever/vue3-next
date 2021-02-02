<template >
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Real Time Chat</h1>
      <div class="border-2 border-pink-400 rounded-lg">
        <div class="h-72 p-2 overflow-x-scroll">
          <div
            v-for="chat in state.chats"
            :key="chat.message"
            class="w-full"
            :class="chat.userId === userId ? 'text-right' : ''"
          >
            {{ chat.message }}
          </div>
        </div>
        <div class="h-6 p-2">
          <input
            v-model="state.message"
            @keydown.enter="addMessage"
            class="p5 border-2 border-pink-400 rounded-xl shadow outline-none"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, reactive, ref } from "vue";
import { chatsRef } from "../utilitis/firebase";
import { useStore } from "vuex";
export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
    });
    const store = useStore();
    const userId = computed(() => store.state.authUser.uid);
    onMounted(async () => {
      // const db = firebase.database();
      // chatsRef = db.ref("chats");
      // const data = await state.collection.once("value");
      // // console.log(data.val());
      // state.chats = data.val();
      // console.log(state.chats);

      // state.userId = firebase.auth().currentUser.uid;
      // console.log(state.userId + "hello");

      chatsRef.on("child_added", (snapshot) => {
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
        //state.chats = snapshot.val();
      });
    });
    function addMessage() {
      const newChat = chatsRef.push();
      newChat.set({ userId: userId.value, message: state.message });
      state.message = "";
    }
    return { state, addMessage, userId };
    console.log(state.chats);
  },
};
</script>

<style>
</style>