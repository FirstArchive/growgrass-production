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
  <div
    class="flex mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl px-6 sm:py-8 lg:px-8 gap-10"
  >
    <div class="">
      <div class="w-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea
        aspernatur expedita sint rerum nam, dicta, eligendi voluptatem voluptate
        officia quae. Delectus totam quas praesentium numquam doloribus quod
        nesciunt culpa deleniti omnis repellendus eos nam, expedita officia
        saepe atque quidem blanditiis? Provident quam excepturi, voluptas ipsum
        eligendi magni voluptate sint.
      </div>
    </div>
    <div class="">
      <div class="w-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea
        aspernatur expedita sint rerum nam, dicta, eligendi voluptatem voluptate
        officia quae. Delectus totam quas praesentium numquam doloribus quod
        nesciunt culpa deleniti omnis repellendus eos nam, expedita officia
        saepe atque quidem blanditiis? Provident quam excepturi, voluptas ipsum
        eligendi magni voluptate sint.
      </div>
    </div>
  </div>
</template>
