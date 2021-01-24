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
      <form @submit.prevent="addHero" class="flex justify-between m-2">
        <input
          ref="heroRef"
          class="border-none p-2 ml-3 outline-none"
          type="text"
          v-model="dcHero"
          placeholder="Enter your favourite Hero"
        />
        <button class="border-none p-2 bg-indigo-400 mx-2" type="submit">
          Add hero
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
export default {
  setup() {
    const dcHero = ref("");
    const heroRef = ref("");
    let dcHeros = ref([
      { name: "Super Man" },
      { name: "Super Girl" },
      { name: "Flash" },
      { name: "Batman" },
    ]);
    onMounted(() => {
      heroRef.value.focus();
    });
    function addHero() {
      if (dcHero.value != "") {
        return dcHeros.value.push({ name: dcHero.value });
        dcHero.value = "";
      }
    }
    function remove(index) {
      this.dcHeros = this.dcHeros.filter((hero, i) => {
        return i != index;
      });
    }
    const herosCount = computed({
      get: () => dcHeros.value.length,
    });
    return { dcHero, dcHeros, heroRef, addHero, remove, herosCount };
  },
};
</script>

<style>
</style>