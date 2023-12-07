<script lang="ts" setup>
// :after-change="onChange" < ใส่ a-carousel
// const onChange = (current: number) => {
//   console.log(current);
// };
import { imgUrl, topbannerimg } from "~/data/ImgFirstpageBanner";
</script>

<template>
  <a-carousel effect="fade" autoplay>
    <div v-for="detail in topbannerimg" class="bg-slate-100">
      <NuxtImg
        alt="index banner"
        format="webp"
        quality="60"
        loading="lazy"
        :src="detail"
        class="mx-auto w-full"
        lazy
      />
    </div>
  </a-carousel>
</template>

<style scoped>
:deep(.slick-slide) {
  text-align: center;
  height: fit-content; /* Set a responsive height using viewport width */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.slick-slide img) {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

@media (min-width: 410px) {
  :deep(.slick-slide) {
    height: fit-content; /* Set a different height for screens wider than 768px */
  }
}
@media (min-width: 768px) {
  :deep(.slick-slide) {
    height: fit-content; /* Set a different height for screens wider than 768px */
  }
}
@media (min-width: 1000px) {
  :deep(.slick-slide) {
    height: fit-content; /* Set a different height for screens wider than 768px */
  }
}
</style>
