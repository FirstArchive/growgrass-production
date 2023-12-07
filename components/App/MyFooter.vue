<template>
  <footer class="relative bg-blueGray-200 mt-8 lg:pt-14 bottom-0">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-left lg:text-left">
        <div class="w-full lg:w-6/12 px-4 mb-7">
          <div class="w-full px-4">
            <h4 class="text-2xl font-bold text-blueGray-700">
              ช่องทางการติดต่อ
            </h4>
            <h5 class="text-md mt-0 mb-2 text-blueGray-600">
              สามารถติดต่อเราได้ที่ :<br />42, หญ้าเทียมGrowGrass บ้านปึก, ถนน
              มิตรสัมพันธ์ อำเภอเมืองชลบุรี ชลบุรี
            </h5>

            <div class="mt-6 lg:mb-0 mb-6 space-x-3 md:space-x-9">
              <div class="flex gap-5 lg:gap-7">
                <button>
                  <!-- bg-white text-lightBlue-400 shadow-lg font-normal  กรอบขาว-->
                  <Icon
                    class="hover:scale-125 lg:hover:scale-150 text-gray-500 hover:text-blue-800 duration-300 h-6 w-6 lg:scale-125 items-center justify-center align-center rounded-jg outline-none focus:outline-none mr-2"
                    name="fa6-brands:square-facebook"
                    aria-label="facebook"
                    >Facebook</Icon
                  >
                </button>
                <button>
                  <Icon
                    class="hover:scale-125 lg:hover:scale-150 text-gray-500 hover:text-red-600 duration-300 h-7 w-7 lg:scale-125 items-center justify-center align-center rounded-jg outline-none focus:outline-none mr-2"
                    name="tabler:brand-youtube-filled"
                    aria-label="youtube"
                    >Youtube</Icon
                  >
                </button>
                <button>
                  <Icon
                    class="hover:scale-125 lg:hover:scale-150 text-gray-500 hover:text-green-800 duration-300 h-7 w-7 lg:scale-125 items-center justify-center align-center rounded-jg outline-none focus:outline-none mr-2"
                    name="tabler:mail-filled"
                    aria-label="email"
                    >Email</Icon
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4 lg:pb-10">
          <div
            class="grid gap-10 sm:gap-0 sm:grid-cols-2 md:grid-cols-2 lg:flex items-top mb-6 justify-between"
          >
            <div class="w-full px-4 ml-auto">
              <span class="block uppercase text-blueGray-500 font-semibold mb-2"
                >Product Category</span
              >
              <hr class="my-2 sm:my-3" />
              <ul v-for="grassLength in grassLengths" class="list-unstyled">
                <li>
                  <NuxtLink
                    :class="myhover"
                    class="text-gray-800 font-medium text-md block"
                    to="/"
                    ><Icon
                      :name="grassLength.icon"
                      class="mr-2 text-3xl text-blue-700"
                    />{{ grassLength.product }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <div class="w-full px-4">
              <span class="block uppercase text-gray-800 font-semibold mb-2"
                >Contact Us</span
              >
              <hr class="my-2 sm:my-3" />
              <ul v-for="contact in contacts" class="list-unstyled">
                <li>
                  <NuxtLink
                    :class="myhover"
                    class="ml-1 inline-flex text-gray-800 myhover font-medium block pb-2 text-md"
                    :to="contact.link"
                    target="_blank"
                    ><Icon
                      :name="contact.icon"
                      class="mr-2 text-xl text-blue-700"
                    />{{ contact.list }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-3 border-blueGray-300" />
      <div
        class="flex pb-7 pt-4 flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full px-4 mx-auto text-center">
          <div class="tracking-wide text-sm text-gray-400 font-semibold">
            Copyright © <span id="get-current-year">2023</span>
            <NuxtLink
              to="https://www.facebook.com/growgrassth"
              class="text-blueGray-300 duration-200 hover:text-gray-800"
              target="_blank"
            >
              growgrassth.co.th</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { myhover } from "~/data/customButton";
import { grassLengths, contacts } from "~/data/menu";
</script>

<style scoped></style>
