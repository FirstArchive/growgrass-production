<script setup>
defineProps({
  pagetitle: String,
  pagedescription: String,
  pageroute: Object,
});
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {{ pagetitle }}
      </h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">
        {{ pagedescription }}
      </p>
      <p v-if="pageroute">
        หมวดหมู่ :
        <a-tag color="red">
          {{ $route.params.id }}
        </a-tag>
      </p>
      <!-- <p class="mt-2 text-lg leading-8 text-gray-600">
        {{ pagedescription }}
      </p> -->
    </div>
  </div>
</template>
