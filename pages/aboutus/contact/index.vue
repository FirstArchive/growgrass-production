<script setup lang="ts">
useHead({
  title: "Contact",
  meta: [
    {
      name: "description",
      content: "Contact หญ้าเทียม, growgrassth",
    },
    {
      name: "keywords",
      content: "Contact, หญ้าเทียม, แต่งสวน",
    },
  ],
});
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-10 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        ติดต่อเรา
      </h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">
        วิธีการติดตั้ง และ ข่าวสารหญ้าเทียม
      </p>
    </div>
  </div>
  <!-- <div class="mx-auto max-w-7xl px-6 py-10 lg:px-8"> -->
  <section class="flex items-center xl:h-fit">
    <div
      class="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-12 md:px-7"
    >
      <div class="flex flex-wrap items-center justify-center -mx-4">
        <div class="w-full px-4 lg:w-1/2">
          <div class="max-w-sm mx-auto">
            <div class="p-6 mb-6 text-center bg-white border rounded-md shadow">
              <form action="">
                <div class="mb-6">
                  <h2
                    class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                  >
                    ฝากข้อความ
                  </h2>
                </div>
                <div class="flex flex-wrap mb-4 -mx-2">
                  <div class="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
                    <input
                      class="w-full px-3 py-2 leading-loose bg-gray-100 border rounded-md"
                      type="text"
                      placeholder="First Name.."
                      required
                    />
                  </div>
                  <div class="w-full px-2 lg:w-1/2">
                    <input
                      class="w-full px-3 py-2 leading-loose bg-gray-100 border rounded-md"
                      type="text"
                      placeholder="Last Name.."
                      required
                    />
                  </div>
                </div>
                <input
                  class="w-full px-3 py-2 mb-4 leading-loose bg-gray-100 border rounded-md"
                  type="email"
                  placeholder="abc@gmail.com"
                  required
                />
                <textarea
                  rows="4"
                  type="message"
                  placeholder="Write a message..."
                  required
                  class="block w-full px-4 mb-4 leading-tight text-gray-700 bg-gray-100 border rounded"
                ></textarea>
                <button
                  class="w-full py-3 text-md font-bold leading-normal text-white transition-all duration-300 bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  ส่ง
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="max-w-2xl w-3/4 my-16 lg:my-0 lg:w-1/2 lg:mr-0 lg:ml-auto">
          <h2
            class="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            ข้อมูล <span class="text-blue-600">ติดต่อ</span>
          </h2>

          <div class="flex flex-col">
            <div class="flex mb-6 text-gray-400">
              <Icon
                name="material-symbols:location-on-rounded"
                class="text-7xl sm:text-3xl lg:text-4xl"
              />
              <div
                class="max-w-xl ml-4 text-lg font-semibold tracking-wide text-gray-500"
              >
                42, หญ้าเทียมGrowGrass BANPUK, ถนน มิตรสัมพันธ์ อำเภอเมืองชลบุรี
                ชลบุรี
              </div>
            </div>
            <div class="flex mb-6 text-gray-400">
              <Icon
                name="material-symbols:location-on-rounded"
                class="text-4xl sm:text-3xl"
              />
              <div
                class="max-w-xl ml-4 text-lg font-semibold tracking-wide text-gray-500"
              >
                <span> 095-484-2976 ,</span> <span> 097-343-8747</span>
              </div>
            </div>
            <div class="flex text-gray-400">
              <Icon
                name="material-symbols:location-on-rounded"
                class="text-3xl"
              />
              <div
                class="max-w-xl ml-4 text-lg font-semibold tracking-wide text-gray-500"
              >
                growgrass@gmail.com
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- </div> -->
</template>

<style scoped></style>
