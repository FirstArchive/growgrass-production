<script setup lang="ts">
import CountUp from "vue-countup-v3";
useHead({
  title: "AboutsUs",
  meta: [
    {
      name: "description",
      content: "About Us หญ้าเทียม, growgrassth",
    },
    {
      name: "keywords",
      content: "About Us, หญ้าเทียม, แต่งสวน",
    },
  ],
});

const detail = [
  {
    Num: 2145,
    backText: "ท่าน",
    Text: "ลูกค้าที่ใช้บริการ",
    Icon: "bi:people-fill",
  },
  {
    Num: 3590,
    backText: "ตรม",
    Text: "ตารางเมตร",
    Icon: "material-symbols:square-foot",
  },
  {
    Num: 74,
    backText: "รีวิว",
    Text: "คนที่รีวิว",
    Icon: "material-symbols:kid-star",
  },
  {
    Num: 15,
    backText: "ปี",
    Text: "และเราจะก้าวต่อไป",
    Icon: "ri:service-fill",
  },
];
</script>

<template>
  <MyPageTitle
    pagetitle="เกี่ยวกับเรา"
    pagedescription="วิธีการติดตั้ง และ ข่าวสารหญ้าเทียม"
  />

  <section class="lg:py-7 font-poppins">
    <div class="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
      <div class="flex flex-wrap">
        <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
          <div class="lg:max-w-md">
            <div class="px-4 pl-4 mb-6 border-l-4 border-blue-500">
              <span class="text-sm text-gray-600 uppercase"
                >รู้จัก growgrass?</span
              >
              <h1 class="mt-2 text-3xl font-black text-gray-700 md:text-5xl">
                รู้จักเรา growgrass
              </h1>
            </div>
            <p class="px-4 mb-10 text-base leading-7 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam Lorem ipsum dolor sit amet.
            </p>
            <div class="flex flex-wrap items-center">
              <div
                v-for="item in detail"
                class="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6"
              >
                <div
                  class="hover:scale-110 duration-500 p-6 bg-slate-100 rounded-lg"
                >
                  <div class="flex flex-col flex-wrap justify-start">
                    <div
                      class="inline-flex items-center justify-center lg:justify-start"
                    >
                      <Icon
                        :name="item.Icon"
                        class="mr-2 md:mr-1 text-gray-700 text-3xl"
                      />
                      <p
                        class="mt-4 mb-2 text-4xl lg:text-3xl font-bold text-gray-700"
                      >
                        <count-up :end-val="item.Num" duration="4"></count-up>
                      </p>
                      <p
                        class="ml-2 md:ml-2 xl:ml-1 mt-2 text-center text-2xl lg:text-lg font-bold text-gray-700"
                      >
                        {{ item.backText }}
                      </p>
                    </div>
                    <h2 class="text-lg text-center lg:text-start text-gray-700">
                      {{ item.Text }}
                    </h2>
                  </div>
                </div>
              </div>
              <!--  -->
            </div>
          </div>
        </div>
        <div class="w-full px-4 lg:w-1/2 lg:mb-0">
          <NuxtImg
            format="webp"
            quality="50"
            loading="lazy"
            src="https://img5.pic.in.th/file/secure-sv1/Z06_8100_36_11zon.md.webp"
            alt="ฝากรูป"
            class="relative z-40 object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
