<template>
  <div
    v-show="showBanner"
    class="relative isolate bg-gray-50 overflow-hidden py-3 sm:py-6 shadow-md"
  >
    <div
      class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
    >
      <div
        class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        style="
          clip-path: polygon(
            74.8% 41.9%,
            97.2% 73.2%,
            100% 34.9%,
            92.5% 0.4%,
            87.5% 0%,
            75% 28.6%,
            58.5% 54.6%,
            50.1% 56.8%,
            46.9% 44%,
            48.3% 17.4%,
            24.7% 53.9%,
            0% 27.9%,
            11.9% 74.2%,
            24.9% 54.1%,
            68.6% 100%,
            74.8% 41.9%
          );
        "
      />
    </div>
    <div
      class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
    >
      <div
        class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        style="
          clip-path: polygon(
            74.8% 41.9%,
            97.2% 73.2%,
            100% 34.9%,
            92.5% 0.4%,
            87.5% 0%,
            75% 28.6%,
            58.5% 54.6%,
            50.1% 56.8%,
            46.9% 44%,
            48.3% 17.4%,
            24.7% 53.9%,
            0% 27.9%,
            11.9% 74.2%,
            24.9% 54.1%,
            68.6% 100%,
            74.8% 41.9%
          );
        "
      />
    </div>
    <div
      class="lg:ml-10 flex items-start sm:items-center pl-6 py-2.5 sm:pl-3.5 sm:before:flex-1"
    >
      <div
        class="flex flex-wrap items-center justify-center gap-x-4 md:w-10/12 lg:w-4/5"
      >
        <div class="text-gray-900">
          <strong class="font-semibold text-2xl inline-flex"
            >โปรโมชั่นส่งท้ายปี
            <count-up
              :start-val="2000"
              :end-val="2023"
              duration="8"
              class="ml-1 sm:ml-2"
            />
          </strong>
        </div>
        <!-- <span class="inline h-0.5 w-0.5 text-center" aria-hidden="true"></span> -->
        <div>
          <div class="flex flex-col">
            <div class="tracking-wide text-lg font-medium inline-flex">
              งานติดตั้งรับประกันเพิ่มฟรี&nbsp;
              <count-up :start-val="0" :end-val="3" duration="7" />&nbsp;ปี
            </div>
            <div class="text-sm">
              <a-tag color="warning" class="font-sans text-red-600 ml-1"
                >{{ days }}วัน</a-tag
              >
              <a-tag color="warning" class="font-sans text-red-600"
                >{{ hours }}ชั่วโมง</a-tag
              >
              <a-tag color="warning" class="font-sans text-red-600"
                >{{ minutes }}นาที
              </a-tag>
              <a-tag color="warning" class="font-sans text-red-600"
                >{{ seconds }}วินาที
              </a-tag>
            </div>
          </div>
        </div>
        <NuxtLink
          to="#"
          :class="seepromobtn"
          class="duration-300 ml-1 mt-3 lg:mt-0 animate-pulse lg:mx-10 flex-none rounded-lg bg-gray-900 px-5 py-1.5 text-sm font-semibold text-white hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >ดูรายละเอียด <span aria-hidden="true">&rarr;</span></NuxtLink
        >
      </div>
      <div class="flex flex-1 justify-center md:justify-end mr-3 bottom-0">
        <button
          type="button"
          class="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          @click="closeBanner()"
        >
          <span class="sr-only">ปิด</span>
          <XMarkIcon class="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToggle } from "@vueuse/core";
import { ref } from "vue";
import { XMarkIcon } from "@heroicons/vue/20/solid";
import { seepromobtn } from "~/data/customButton";
import CountUp from "vue-countup-v3";

const showBanner = ref(true);
const closeBanner = useToggle(showBanner);

const targetDate = new Date("2023-12-31T23:59:59"); // ตั้งค่าวันที่เป้าหมาย

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const calculateTimeRemaining = () => {
  const now = new Date();
  const timeRemaining = targetDate - now;

  if (timeRemaining > 0) {
    days.value = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    hours.value = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutes.value = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    seconds.value = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  } else {
    // เวลาหมดลง
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
  }
};

onMounted(() => {
  // เรียกใช้งานฟังก์ชันเพื่อคำนวณเวลาเริ่มต้น
  calculateTimeRemaining();

  // อัปเดตเวลาทุกๆ 1 วินาที
  setInterval(calculateTimeRemaining, 1000);
});
</script>
