<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
const user = useStrapiUser();
const userCookie = JSON.stringify(user.value?.email);
</script>

<template>
  <div>ยินดีต้อนรับคุณ:{{ userCookie }}</div>
</template>

<style scoped></style>
