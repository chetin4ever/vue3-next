<template>
  <app-header :isloggedIn="isloggedIn" @open-login-modal="isLoginOpen = true" />

  <div class="flex"></div>
  <router-view />
  <modal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Modal from "./components/Modal.vue";
import firebase from "./utilitis/firebase";

export default {
  name: "App",
  components: { AppHeader, Modal },
  data() {
    return {
      isLoginOpen: false,
      isloggedIn: "",
      authUser: {},
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        // console.log(user);
        this.isloggedIn = true;
        this.authUser = user;
        console.log(this.authUser);
      } else {
        // No user is signed in.
        this.isloggedIn = false;
        this.authUser = {};
        console.log("not login");
      }
    });
  },
};
</script>

<style>
</style>
