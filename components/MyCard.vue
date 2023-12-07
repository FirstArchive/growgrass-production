<script setup>
import { imgUrl } from "~/data/ImgFirstpageBanner";
import { cuzbtn } from "~/data/customButton";

defineProps({
  title: String,
  description: String,
  price: Number,
  photo: String,
});
</script>

<template>
  <a-card
    hoverable
    class="w-44 sm:w-full h-fit mb-6 shadow-sm hover:shadow-lg font-sans"
  >
    <template #cover v-for="item in imgUrl">
      <NuxtImg
        format="webp"
        quality="70"
        loading="lazy"
        height="500px"
        width="500px"
        alt="imgUrl"
        :src="photo"
        class="aspect-video object-cover"
      />
      <div class="p-4 text-center sm:text-left">
        <a-card-meta :title="title">
          <template #description>growgrassth.com</template>
        </a-card-meta>
        <p class="my-2 sm:my-4 text-sm leading-tight">{{ description }}</p>
        <div
          class="flex-col sm:flex sm:flex-row justify-between items-center lg:w-3/4 xl:w-full mx-auto"
        >
          <p class="font-semibold sm:text-right">ราคา {{ price }} บาท</p>
          <button
            class="bg-gray-600 px-4 py-1 font-bold text-white rounded-lg scale-90 text-xs sm:text-sm"
          >
            ดูเพิ่มเติม
          </button>
        </div>
      </div>
    </template>
  </a-card>
</template>
