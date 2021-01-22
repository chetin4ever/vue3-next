<template>
  <div class="bg-red-300 h-4/5 m-auto w-5/6">
    <h1 class="text-center pt-3 text-3xl">MarkDown App</h1>
    <section class="flex h-80 m-10 text-center">
      <article class="border w-4/6 bg-gray-100 m-3">
        <textarea class="w-full h-full" @input="update"></textarea>
      </article>
      <article
        class="border w-4/6 bg-gray-700 m-3 text-white"
        v-html="markedText"
      ></article>
    </section>
  </div>
</template>

<script>
import { computed } from "vue";
import marked from "marked";
import debounce from "../utilitis/mixins/debounce";
export default {
  mixins: [debounce],

  data() {
    return {
      text: "",
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
      //   console.log(debounce);
    },
  },
};
</script>

<style>
</style>