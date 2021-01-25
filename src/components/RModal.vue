<template>
  <section
    @click="close"
    class="z-20 w-full h-full bg-red-900 opacity-50 fixed top-0 left-0"
  ></section>
  <div class="absolute inset-0 text-gray-500">
    <div class="flex h-full">
      <div class="z-30 m-auto p-2 rounded bg-white w-1/3">
        <div class="p-2 border-2 border-pink-200">
          <h1>
            <slot name="title"></slot>
          </h1>
          <main>
            <slot name="body"></slot>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(_, { emit }) {
    function close() {
      emit("close");
    }
    return { close };
  },
};
</script>

<style>
</style>