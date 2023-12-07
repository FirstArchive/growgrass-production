<script setup>
import { cuzbtn } from "~/data/customButton";
const bluebtn = cuzbtn[0].bluebtn;
const whitebtn = cuzbtn[1].whitebtn;

const photoUrl = ref("https://img2.pic.in.th/pic/Z06_8096_35_11zon.webp");
</script>
<template>
  <section
    :style="{ backgroundImage: `url(${photoUrl})` }"
    loading="lazy"
    class="relative bg-cover bg-center bg-no-repeat"
  >
    <div
      class="absolute inset-0 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    ></div>

    <div
      class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl sm:px-9">
        <h1
          style="line-height: 4rem"
          class="flex flex-col px-2 sm:px-0 text-left sm:inline text-4xl font-extrabold text-white sm:text-5xl"
        >
          ที่1 ในชลบุรี
          <strong class="font-medium text-white text-3xl mt-2 sm:text-5xl">
            บริการปูหญ้าเทียมและรับจัดสวน
          </strong>
        </h1>

        <p class="mt-4 pl-3 max-w-lg text-white sm:text-xl/relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>

        <div class="mt-8 flex flex-wrap gap-4 text-center">
          <NuxtLink to="#" :class="bluebtn">ดูผลงาน</NuxtLink>
          <NuxtLink to="#" :class="whitebtn">ติดต่อเรา</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
