<script setup lang="ts">
useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Home หญ้าเทียม, growgrassth",
    },
    {
      name: "keywords",
      content: "Home, หญ้าเทียม, แต่งสวน",
    },
  ],
});
useSeoMeta({
  title: "Home",
  ogTitle: "หญ้าเทียม GrowGrassTH | ผู้นำด้านหญ้าเทียมคุณภาพสูง",
  description:
    "หญ้าเทียม GrowGrassTH ผู้นำด้านหญ้าเทียมคุณภาพสูง ให้บริการออกแบบ ติดตั้ง และจำหน่ายหญ้าเทียมทุกประเภท รับประกันคุณภาพ 10 ปี",
  ogDescription:
    "หญ้าเทียม GrowGrassTH ผู้นำด้านหญ้าเทียมคุณภาพสูง ให้บริการออกแบบ ติดตั้ง และจำหน่ายหญ้าเทียมทุกประเภท รับประกันคุณภาพ 10 ปี",
  ogImage: "https://img5.pic.in.th/file/secure-sv1/promo1.md.webp",
  twitterCard: "summary_large_image",
});

import { cuzbtn } from "~/data/customButton";
import { details } from "~/data/shopdetail";

const bluebtn = cuzbtn[0].bluebtn;
</script>

<template>
  <MyPageTitle
    pagetitle="หน้าแรก"
    pagedescription="วิธีการติดตั้ง และ ข่าวสารหญ้าเทียม"
  />
  <bannerPhotoBanner />
  <div
    class="mx-auto lg:w-11/12 xl:w-full xl:px-36 px-5 mt-10 sm:mt-14 sm:px-16"
  >
    <div class="px-0">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        สินค้า
      </h1>
      <hr class="my-4 sm:my-6" />
      <!-- @audit FIX -->
      <div
        class="grid grid-cols-2 md::grid-cols-3 xl:grid-cols-4 gap-x-5 sm:gap-x-10 justify-items-center"
      >
        <div v-for="card in details">
          <MyCard
            :title="card.title"
            :description="card.description"
            :price="card.price"
            :photo="card.photo"
            ribbon="สินค้าแนะนำ"
            class="rounded-2xl"
          />
        </div>
      </div>
      <!--  -->
    </div>
    <div class="flex mb-10 mt-3 md:my-10 justify-center">
      <!-- class="block w-full rounded-lg bg-blue-600 px-12 py-3 font-bold text-white shadow hover:bg-blue-700 duration-200 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" -->
      <button :class="bluebtn">
        ดูทั้งหมด
        <!-- class="bg-blue-500 py-3 px-6 rounded-lg text-white font-semibold active:bg-blue-400 duration-300" -->
      </button>
    </div>
  </div>
  <bannerMyHero />
  <MyCustomReview />
</template>

<style scoped></style>
