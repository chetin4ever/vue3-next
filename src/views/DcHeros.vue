<template>
  <div class="w-full flex box-border justify-center">
    <div class="block bg-pink-200">
      <h1 class="font-bold text-2xl text-center m-2 text-indigo-400">
        Dc Hero's {{ herosCount }}
      </h1>
      <ul>
        <li
          class="flex justify-between m-5 p-3 text-white bg-indigo-400"
          v-for="(hero, index) in dcHeros"
          :key="hero"
        >
          {{ hero.name
          }}<button
            class="flex bg-red-500 px-4 py-2 rounded-sm"
            @click="remove(index)"
          >
            X
          </button>
        </li>
      </ul>
      <form @click.prevent="addHero" class="flex justify-between m-2">
        <input
          ref="heroRef"
          class="border-none p-2 ml-3 outline-none"
          type="text"
          v-model="dcHero"
          placeholder="Enter your favourite Hero"
        />
        <button class="border-none p-2 bg-indigo-400 mx-2">Add hero</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dcHero: "",
      dcHeros: [
        { name: "Super Man" },
        { name: "Super Girl" },
        { name: "Flash" },
        { name: "Batman" },
      ],
    };
  },
  mounted() {
    this.$refs.heroRef.focus();
  },
  methods: {
    addHero() {
      if (this.dcHero != "") {
        return this.dcHeros.push({ name: this.dcHero });
        this.dcHero = "";
      }
    },
    remove(index) {
      this.dcHeros = this.dcHeros.filter((hero, i) => {
        return i != index;
      });
    },
  },
  computed: {
    herosCount() {
      return this.dcHeros.length;
    },
  },
};
</script>

<style>
</style>