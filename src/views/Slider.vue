<template >
  <div class="flex">
    <div class="flex">
      <transition name="fade">
        <div
          v-if="currentSlide == 0"
          class="w-full absolute bg-blue-600 imgSlider1"
          style="height: 400px"
        ></div>
      </transition>
      <transition name="fade">
        <div
          v-if="currentSlide == 1"
          class="w-full absolute bg-red-600 backim imgSlider2"
          style="height: 400px"
        ></div>
      </transition>
      <transition name="fade">
        <div
          v-if="currentSlide == 2"
          class="w-full absolute bg-green-600 imgSlider3"
          style="height: 400px"
        ></div>
      </transition>
    </div>
    <!-- <div class="w-full">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div class="w-4 h-4 rounded-full bg-black"></div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      interval: "",
      sliders: [" bg-blue-600", "bg-red-600", "bg-green-600"],
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.imgSlider1 {
  background-image: url("https://images.unsplash.com/photo-1611182911609-040cad8c05a4?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  background-size: cover;
}
.imgSlider2 {
  background-image: url("https://images.unsplash.com/photo-1553861542-468aa56de748?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfExwWnpVdVFhODBRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  background-size: cover;
}
.imgSlider3 {
  background-image: url("https://images.unsplash.com/photo-1568188959244-d44dc41375ab?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfExwWnpVdVFhODBRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  background-size: cover;
}
.slide {
  margin-left: 20px;
  margin-right: 40px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>