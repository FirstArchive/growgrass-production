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
</script>

<template>
  <MyPageTitle pagetitle="หมวดหมู่" :pageroute="path" />
  <div class="mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:px-8">
    <div class="mx-auto lg:mx-0">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea
      aspernatur expedita sint rerum nam, dicta, eligendi voluptatem voluptate
      officia quae. Delectus totam quas praesentium numquam doloribus quod
      nesciunt culpa deleniti omnis repellendus eos nam, expedita officia saepe
      atque quidem blanditiis? Provident quam excepturi, voluptas ipsum eligendi
      magni voluptate sint.
    </div>
  </div>
  <div class="mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:px-8">
    <div class="mx-auto lg:mx-0">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea
      aspernatur expedita sint rerum nam, dicta, eligendi voluptatem voluptate
      officia quae. Delectus totam quas praesentium numquam doloribus quod
      nesciunt culpa deleniti omnis repellendus eos nam, expedita officia saepe
      atque quidem blanditiis? Provident quam excepturi, voluptas ipsum eligendi
      magni voluptate sint.
    </div>
  </div>
</template>
