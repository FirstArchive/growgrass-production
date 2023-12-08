<script setup>
import { contacts } from "~/data/menu";
</script>

<template>
  <a-float-button-group shape="circle" :style="{ right: '24px' }">
    <a-float-button
      tooltip="สอบถาม"
      class="bg-white font-sans font-bold"
      :href="contacts[2].link"
      targetProp="_blank"
    >
      <template #icon>
        <Icon
          name="mdi:facebook-messenger"
          class="text-center text-blue-700 animate-pulse scale-150"
        />
      </template>
    </a-float-button>
    <a-back-top class="bg-white" />
  </a-float-button-group>
</template>
