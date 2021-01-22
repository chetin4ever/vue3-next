<template>
  <div class="flex">
    <div class="m-auto">
      <h1 class="text-4xl text-center text-gray-800 mb-2">vue calender</h1>
      <div class="bg-pink-100 px-5 py-4 text-gray-500">
        <section class="flex justify-between text-gray-500 border-solid">
          <h2 class="font-bold">{{ currentMonthName }}</h2>
          <h2 class="font-bold">{{ currentYear }}</h2>
        </section>
        <section class="flex my-2">
          <p
            class="p-2 text-center"
            style="width: 14.28%"
            v-for="day in days"
            :key="day"
          >
            {{ day }}
          </p>
        </section>
        <section class="flex flex-wrap">
          <p
            class="text-center"
            style="width: 14.28%"
            v-for="num in startDay()"
            :key="num"
          ></p>

          <p
            class="text-center"
            style="width: 14.28%"
            v-for="num in daysInMonth()"
            :key="num"
            :class="currentDateClass(num)"
          >
            {{ num }}
          </p>
        </section>
        <section class="flex justify-between my-3">
          <button
            class="py-2 px-4 border-solid border-2 border-pink-600 rounded bg-white"
            @click="prev"
          >
            Prev
          </button>
          <button
            class="py-2 px-4 border-solid border-2 border-pink-600 rounded bg-white"
            @click="next"
          >
            Next
          </button>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Thu", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  methods: {
    // daysInMonth(year, month) {
    //   return new Date(year, month + 1, 0).getDate();
    // },
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    // starting day of month for date
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    currentDateClass(num) {
      const calenderFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      return calenderFullDate === currentFullDate ? "text-red-600" : "";
    },
  },
  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth
      ).toLocaleString("default", { month: "long" });
    },
  },
};
</script>

<style>
</style>