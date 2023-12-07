<template>
  <div class="mx-auto max-w-7xl px-6 py-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <NuxtLink to="#" @click="handleBack" class="text-md font-medium"
        ><Icon
          name="material-symbols:arrow-back-ios-new-rounded"
          class="mr-2 text-xl"
        />กลับหน้าก่อน</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const handleBack = () => {
  router.go(-1); // Go back one step in history
};
</script>
