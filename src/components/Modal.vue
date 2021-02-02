<template >
  <div v-if="isLoginOpen">
    <section
      @click="close"
      class="z-20 w-full h-full bg-red-900 opacity-50 fixed top-0"
    ></section>
    <div class="absolute inset-0 text-gray-500">
      <div class="flex h-full">
        <div class="z-30 m-auto p-2 rounded bg-white w-1/3">
          <div class="p-2 border-2 border-pink-200">
            <h1 class="text-4xl text-center">login</h1>
            <google-login @close-login-from-google="close" />
            <form class="p-2 my-2" @submit.prevent="submit">
              <div class="my-6">
                <label for="" class="p-2">Email</label>
                <input
                  ref="emailref"
                  v-model="email"
                  type="text"
                  placeholder="Enter your Email"
                  class="p-2 w-full border-b-2 border-pink-400 outline-none"
                />
              </div>
              <div class="my-6">
                <label for="">Password</label>
                <input
                  v-model="password"
                  type="password"
                  placeholder="Enter your Password"
                  class="p-2 w-full border-b-2 border-pink-400 outline-none"
                />
              </div>
              <div class="my-6">
                <button
                  type="submit"
                  class="rounded w-full border-2 border-pink-400 p-2 text-2xl focus:outline-none"
                >
                  <span v-if="!isLoading">Login</span>
                  <span v-else>⌛</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilitis/firebase";
// import GoogleLogin from "./login/GoogleLogin";
import GoogleLogin from "./login/GoogleLogin.vue";
export default {
  computed: {
    isLoginOpen() {
      return this.$store.state.isLoginOpen;
    },
  },
  components: { GoogleLogin },
  data() {
    return {
      email: "abc@gmail.com",
      password: "abc@123",
      isLoading: false,
    };
  },
  mounted() {
    // this.$refs.emailref.focus();
    // console.log(this.$store.state.isLoginOpen + "modal");
  },
  methods: {
    submit() {
      this.isLoading = true;
      console.log(this.email, this.password);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          console.log(res);
          this.close();

          this.isLoading = false;
        })
        .catch((e) => {
          this.isLoading = false;
          console.log(e.error);
        });
    },
    close() {
      this.$store.commit("setLoginModal", false);
    },
  },
};
</script>

<style>
</style>