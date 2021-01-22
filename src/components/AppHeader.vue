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
    <button class="text-2xl text-white pr-3" @click="$emit('open-login-modal')">
      Login
    </button>
    <button class="text-2xl text-white pr-3" @click="logout">LogOut</button>
  </nav>
</template>

<script>
import firebase from "../utilitis/firebase";
export default {
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
  },
};
</script>

<style>
</style>