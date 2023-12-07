<script setup lang="ts">
import { posts } from "~/data/posts";
import { cuzbtn } from "~/data/customButton";

const bluebtn = cuzbtn[0].bluebtn;

const current = ref(2);

useHead({
  title: "Blogs",
  meta: [
    {
      name: "description",
      content: "Blogs หญ้าเทียม, growgrassth",
    },
    {
      name: "keywords",
      content: "Blogs, หญ้าเทียม, แต่งสวน",
    },
  ],
});
</script>

<template>
  <MyPageTitle
    pagetitle="รวมบทความ"
    pagedescription="วิธีการติดตั้ง และ ข่าวสารหญ้าเทียม"
  />

  <div class="mx-auto max-w-7xl p-6 lg:px-8">
    <div class="bg-whitebg-green-300 rounded-lg">
      <div
        class="mx-auto justify-items-center grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <article
          v-for="post in posts"
          :key="post.id"
          class="flex max-w-xl flex-col items-start justify-between duration-200 border-slate-100 border shadow-sm hover:shadow-md rounded-2xl p-5 xl:p-7"
        >
          <div class="flex mx-auto aspect-video w-full object-cover mb-4">
            <NuxtImg
              :alt="post.description"
              format="webp"
              quality="50"
              loading="lazy"
              :src="post.postImg"
              class="w-full rounded-lg"
            />
          </div>
          <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="post.datetime" class="text-gray-500">{{
              post.date
            }}</time>
            <NuxtLink
              :to="post.category.href"
              class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >{{ post.category.title }}</NuxtLink
            >
          </div>
          <div class="group relative">
            <h3
              class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
            >
              <NuxtLink to="post.href">
                <span class="absolute inset-0" />
                {{ post.title }}
              </NuxtLink>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {{ post.description }}
            </p>
          </div>

          <div class="relative mt-8 flex items-center gap-x-4">
            <NuxtImg
              format="webp"
              quality="50"
              loading="lazy"
              :src="post.author.imageUrl"
              :alt="post.description"
              class="h-10 w-10 rounded-full bg-gray-50"
            />
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900">
                <NuxtLink :to="post.author.href">
                  <span class="absolute inset-0" />
                  {{ post.author.name }}
                </NuxtLink>
              </p>
              <p class="text-gray-600">{{ post.author.role }}</p>
            </div>
          </div>
        </article>
        optimization
      </div>
    </div>
    <div class="flex justify-center mt-10">
      <a-pagination
        v-model:current="current"
        :total="30"
        show-less-items
        class="md:scale-125"
      />
    </div>
  </div>
</template>
