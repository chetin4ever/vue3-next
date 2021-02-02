<template class=" flex  w-full ">
  <div class="text-center">welocome to vue 3 course</div>
</template>

<script>
export default {
  data() {
    return {
      store: this.$store.state,
    };
  },
  mounted() {
    console.log(this.$store.state);
  },
};
</script>

<style>
</style>