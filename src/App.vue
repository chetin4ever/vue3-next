<template>
  <app-header />
  <div class="flex">
    <calender />
    <!-- <dc-heros /> -->
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Calender from "./components/Calender.vue";
// import DcHeros from "./components/DcHeros.vue";
export default {
  name: "App",
  components: { AppHeader, Calender },
};
</script>

<style>
</style>
