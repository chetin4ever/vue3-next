<template>
  <app-header />

  <div class="flex"></div>
  <router-view />
  <modal />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Modal from "./components/Modal.vue";
import firebase from "./utilitis/firebase";

export default {
  name: "App",
  components: { AppHeader, Modal },
  // data() {
  //   return {
  //     isLoginOpen: false,
  //     // isloggedIn: "",
  //     // authUser: {},
  //   };
  // },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        // console.log(this.authUser + "home");
        this.$store.commit("setIsLoggedIn", true);
        this.$store.commit("setAuthUser", user);

        // this.isloggedIn = true;
        // this.authUser = user;
        console.log(this.user + "fromapp");
      } else {
        // No user is signed in.
        // this.isloggedIn = false;
        this.$store.commit("setIsLoggedIn", false);

        // this.authUser = {};
        this.$store.commit("setAuthUser", {});

        console.log("not login");
      }
    });
  },
};
</script>

<style>
</style>
