<template>
  <nav
    class="w-full bg-gradient-to-r from-indigo-400 to-blue-600 mb-4 px-4 py-5"
  >
    <router-link to="/" class="text-2xl text-white pr-3">
      Vue-@next</router-link
    >
    <router-link :to="{ name: 'DcHeros' }" class="text-2xl text-white pr-3">
      DcHero</router-link
    >
    <router-link :to="{ name: 'Calender' }" class="text-2xl text-white pr-3">
      Calender</router-link
    >
    <router-link :to="{ name: 'MarkDown' }" class="text-2xl text-white pr-3">
      MarkDown</router-link
    >
    <router-link :to="{ name: 'Slider' }" class="text-2xl text-white pr-3">
      Slider</router-link
    >
    <router-link :to="{ name: 'Calculator' }" class="text-2xl text-white pr-3">
      Calculator</router-link
    >
    <router-link
      :to="{ name: 'ReusableModal' }"
      class="text-2xl text-white pr-3"
    >
      Modal</router-link
    >
    <router-link :to="{ name: 'Chat' }" class="text-2xl text-white pr-3">
      Chat</router-link
    >

    <button v-if="isloggedIn" class="text-2xl text-white pr-3" @click="logout">
      LogOut
    </button>
    <button v-else class="text-2xl text-white pr-3" @click="openLogin">
      Login
    </button>
  </nav>
</template>

<script>
import firebase from "../utilitis/firebase";
export default {
  // props: { isloggedIn: Boolean },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Sign-out successful.");
        })
        .catch((error) => {
          console.log("An error happened.");
        });
    },
    openLogin() {
      this.$store.commit("setLoginModal", true);
    },
  },
  computed: {
    isloggedIn() {
      return this.$store.state.isloggedIn;
    },
  },
};
</script>

<style>
</style>