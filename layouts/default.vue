<template>
  <AppMyHeader />
  <BannerTopBanner />
  <HandleBack />
  <!-- <MyPageHeader :title="pageTitle" /> -->
  <div class="h-fit">
    <slot />
  </div>
  <buttonMyFloatButton class="md:mr-10 md:scale-125" />
  <AppMyFooter />
</template>

<script setup>
// const pageTitle = ['หน้าแรก', 'บทความ', 'เกี่ยวกับเรา', 'ติดต่อเรา'];
</script>
