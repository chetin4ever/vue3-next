<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-3xl text-center">Calculator</h1>
      <p
        class="text-3xl text-right mt-10 w-80 overflow-x-scroll h-15"
        style="direction: rtl"
      >
        {{ currentNum }}
      </p>
      <small v-if="selectedOpertion"
        >{{ prevNum }} {{ selectedOpertion }} {{ currentNum }}</small
      >
      <div class="my-10 grid grid-cols-4 gap-2">
        <button
          @click="pressed('1')"
          class="p-4 w-20 h-20 text-2xl border rounded shadow"
        >
          1
        </button>
        <button
          @click="pressed('2')"
          class="p-4 w-20 h-20 text-2xl border rounded shadow"
        >
          2
        </button>
        <button
          @click="pressed('3')"
          class="p-4 w-20 h-20 text-2xl border rounded shadow"
        >
          3
        </button>
        <button
          @click="pressed('+')"
          class="p-4 w-20 h-20 text-2xl border rounded shadow"
        >
          +
        </button>
        <button
          @click="pressed('4')"
          class="p-4 w-20 h-20 text-2xl border rounded shadow"
        >
          4
        </button>
        <button
          @click="pressed('5')"
          class="p-4 w-20 h-20 text-2xl border rounded shadow"
        >
          5
        </button>
        <button
          @click="pressed('6')"
          class="p-4 w-20 h-20 text-2xl border rounded shadow"
        >
          6
        </button>
        <button
          @click="pressed('-')"
          class="p-4 w-20 h-20 text-2xl border rounded shadow"
        >
          -
        </button>
        <button
          @click="pressed('7')"
          class="p-4 w-20 h-20 text-2xl border rounded shadow"
        >
          7
        </button>
        <button
          @click="pressed('8')"
          class="p-4 w-20 h-20 text-2xl border rounded shadow"
        >
          8
        </button>
        <button
          @click="pressed('9')"
          class="p-4 w-20 h-20 text-2xl border rounded shadow"
        >
          9
        </button>
        <button
          @click="pressed('*')"
          class="p-4 w-20 h-20 text-2xl border rounded shadow"
        >
          *
        </button>
        <button
          @click="pressed('c')"
          class="p-4 w-20 h-20 text-2xl border rounded shadow"
        >
          C
        </button>
        <button
          @click="pressed('0')"
          class="p-4 w-20 h-20 text-2xl border rounded shadow"
        >
          0
        </button>
        <button
          @click="pressed('=')"
          class="p-4 w-20 h-20 text-2xl border rounded shadow"
        >
          =
        </button>
        <button
          @click="pressed('/')"
          class="p-4 w-20 h-20 text-2xl border rounded shadow"
        >
          /
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
export default {
  setup() {
    const currentNum = ref("");
    const operations = ["+", "/", "-", "*"];

    const prevNum = ref("");
    const selectedOpertion = ref("");
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    function pressed(value) {
      //   calculate();

      if (value === "=" || value === "Enter") calculate();
      else if (value === "c") clear();
      else if (operations.includes(value)) applyOperation(value);
      else if (numbers.includes(value)) appendNumber(value);
    }
    function applyOperation(value) {
      calculate();
      prevNum.value = currentNum.value;
      currentNum.value = " ";
      selectedOpertion.value = value;
    }
    function calculate() {
      if (selectedOpertion.value === "*") multiply();
      if (selectedOpertion.value === "/") divide();
      if (selectedOpertion.value === "-") subtract();
      if (selectedOpertion.value === "+") addition();
      prevNum.value = "";
      selectedOpertion.value = "";
    }
    function multiply() {
      currentNum.value = prevNum.value * currentNum.value;
    }
    function divide() {
      currentNum.value = prevNum.value / currentNum.value;
    }
    function subtract() {
      currentNum.value = prevNum.value - currentNum.value;
    }
    function addition() {
      currentNum.value = +prevNum.value + +currentNum.value;
    }
    const appendNumber = (value) =>
      (currentNum.value = currentNum.value + value);

    const clear = () => (currentNum.value = "");

    function handleKeyDown(e) {
      pressed(e.key);
      console.log(e.key);
    }
    onMounted(() => {
      window.addEventListener("keydown", handleKeyDown);
    });
    onUnmounted(() => {
      window.addEventListener("keydown", handleKeyDown);
    });
    return { currentNum, pressed, prevNum, selectedOpertion };
  },
};
</script>

<style>
</style>