<script setup>
import { imgUrl } from "~/data/ImgFirstpageBanner";

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
    class="md:w-72 h-fit mb-6 shadow-sm hover:shadow-lg font-sans"
  >
    <template #cover>
      <NuxtImg
        :alt="title"
        format="webp"
        quality="50"
        loading="lazy"
        height="300px"
        width="300px"
        alt="imgUrl"
        :src="photo"
        class="aspect-square object-cover"
      />
      <div class="p-4 text-center sm:text-left">
        <h4
          :title="title"
          class="font-bold text-base text-left sm:text-2xl m-0"
        >
          {{ title }}
        </h4>
        <!-- <a-card-meta :title="title">
          <template #description>growgrassth.com</template>
        </a-card-meta> -->
        <p class="my-1 sm:my-3 text-sm leading-tight text-left line-clamp-2">
          {{ description }}
        </p>
        <div
          class="flex-col sm:flex sm:flex-row justify-between items-center mx-auto"
        >
          <p
            class="my-2 text-left font-semibold text-sm sm:text-right lg:text-xl"
          >
            ราคา {{ price }} บาท
          </p>
          <button
            class="text-xs bg-gray-600 px-4 py-1 font-bold text-white rounded-md lg:text-base"
          >
            ดูเพิ่มเติม
          </button>
        </div>
      </div>
    </template>
  </a-card>
</template>
