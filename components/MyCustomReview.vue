<template>
  <section class="flex items-center justify-center">
    <div class="px-4 py-20 mx-auto max-w-7xl">
      <div class="max-w-xl mx-auto">
        <h1
          class="text-3xl mb-4 font-bold text-center tracking-tight text-gray-900 sm:text-4xl"
        >
          รีวิวจากลูกค้า
        </h1>
        <p class="mb-16 text-base text-center text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          magni eius eaque? Pariatur numquam, odio quod nobis ipsum ex
          cupiditate?
        </p>
      </div>
      <!-- start review -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="person in reviews"
          class="w-full p-4 text-center transition-all bg-white rounded-lg shadow"
        >
          <div class="inline-block mb-4 rounded-full">
            <NuxtImg
              :alt="person.comment"
              format="webp"
              quality="50"
              loading="lazy"
              class="object-cover w-20 h-20 mr-4 rounded-full shadow"
              :src="person.avatar"
              alt="avatar"
            />
          </div>
          <ul class="flex items-center justify-center mb-4">
            <!-- 5 Star -->
            <li v-for="i in person.rating">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="w-4 mr-1 text-blue-400 bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                  ></path>
                </svg>
              </p>
            </li>
          </ul>
          <!-- comment part -->
          <p class="mb-4 text-base text-gray-500">
            {{ person.comment }}
          </p>
          <div class="inline-block">
            <h2 class="mb-1 text-lg font-semibold text-gray-900">
              {{ person.name }}
            </h2>
            <p class="text-sm text-gray-500">{{ person.time }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reviews } from "~/data/review";
</script>
