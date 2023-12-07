<script setup lang="ts">
useHead({
  title: `Product`,
  meta: [
    {
      name: "description",
      content: "Product หญ้าเทียม, growgrassth",
    },
    {
      name: "keywords",
      content: `Product, หญ้าเทียม, แต่งสวน`,
    },
  ],
});

const route = useRoute();
const path = route.params.id;
console.log(path);
</script>

<template>
  <div class="flex my-4 justify-center">
    <div class="inline-flex gap-3">
      <p>หมวดหมู่ :</p>
      <a-tag color="red">{{ $route.params.id }}</a-tag>
    </div>
  </div>
</template>
