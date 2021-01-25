<template>
  <div class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-2">Reuseable Modal</h1>
      <r-modal v-if="isModal1Open" @close="isModal1Open = false">
        <template #title>
          <h1 class="text-2xl text-red-700">Modal1</h1>
        </template>
        <template #body
          ><p class="text-2xl text-red-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magnam
            voluptatibus explicabo vitae, voluptatum ea recusandae error
            provident, repu
          </p></template
        >
      </r-modal>
      <r-modal v-if="isModal2Open" @close="isModal2Open = false">
        <h1 class="text-2xl text-red-700">Modal 2</h1>
      </r-modal>
      <button @click="isModal1Open = true">Modal 1</button>
      <button @click="isModal2Open = true">Modal 2</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import RModal from "../components/RModal.vue";
export default {
  components: { RModal },
  setup() {
    const isModal1Open = ref(false);
    const isModal2Open = ref(false);

    return { isModal1Open, isModal2Open };
  },
};
</script>

<style>
</style>