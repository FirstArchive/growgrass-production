<script setup lang="ts">
useHead({
  title: `Calculate Area`,
  meta: [
    {
      name: "description",
      content: "คำนวนพื้นที่ หญ้าเทียม, growgrassth",
    },
    {
      name: "keywords",
      content: "คำนวนพื้นที่, หญ้าเทียม, แต่งสวน`",
    },
  ],
});
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons-vue";
import { options, filter } from "~/data/inputsearch";

const valueA = ref<number>(0);
const valueB = ref<number>(0);
const valuetext = ref<string[]>([]);

// console.log(valuetext.value);
</script>

<template>
  <MyPageTitle pagetitle="หมวดหมู่" pagedescription="ระบบคำนวณพื้นที่" />
  <div
    class="flex flex-col items-center justify-center lg:flex-row mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl px-6 sm:py-8 lg:px-8 gap-10"
  >
    <div class="">
      <div class="flex sm:gap-x-5 justify-center mx-auto">
        <div class="grid gap-2">
          <span class="text-red-500 text-sm"
            >กรุณาระพื้นที่ A หรือด้านกว้าง</span
          >
          <a-input-number
            id="inputNumber"
            v-model:value="valueA"
            :min="0"
            :max="1000"
            class="w-40"
          >
            <template #upIcon>
              <ArrowUpOutlined />
            </template>
            <template #downIcon>
              <ArrowDownOutlined />
            </template>
          </a-input-number>
        </div>
        <!-- พื้นB -->
        <div class="grid gap-2">
          <span class="text-red-500 text-sm">กรุณาระพื้นที่ B หรือด้านยาว</span>
          <a-input-number
            id="inputNumber"
            v-model:value="valueB"
            :min="0"
            :max="1000"
            class="w-40"
          >
            <template #upIcon>
              <ArrowUpOutlined />
            </template>
            <template #downIcon>
              <ArrowDownOutlined />
            </template>
          </a-input-number>
        </div>
      </div>
      <!-- Search input -->
      <div class="grid mt-3 gap-2 justify-center">
        <span class="text-red-500 text-sm">เลือกรุ่นหญ้าเทียม</span>
        <a-cascader
          v-model:value="valuetext"
          :show-search="{ filter }"
          :options="options"
          expand-trigger="hover"
          placeholder="Please select"
          size="large"
          class="w-[21rem] sm:w-[22rem]"
          ><template #suffixIcon><smile-outlined class="test" /></template
        ></a-cascader>
      </div>
      <!-- Submit btn -->
      <a-button
        type="primary"
        size="large"
        class="bg-blue-500 mt-6 w-full font-sans font-medium"
        >ตกลง</a-button
      >
    </div>
    <div class="max-w-sm">
      <div class="">
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
