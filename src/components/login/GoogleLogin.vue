<template>
  <section class="text-center mt-6">
    <button
      class="border-2 rounded border-pink-400 p-2"
      @click="loginWithGoogle"
    >
      Login with Google
    </button>
    <h1 class="mt-4">Or</h1>
  </section>
</template>

<script>
import firebase from "../../utilitis/firebase";
export default {
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$emit("close-login-from-google");
        });
    },
  },
};
</script>

<style>
</style>