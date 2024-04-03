<template>
  <div
    class="flex relative items-end shadow-xl rounded-3xl max-w-[300px] sm:max-w-[400px]"
  >
    <img :src="item.image" alt="" class="rounded-3xl" />
    <div
      class="absolute flex flex-col w-full p-4 text-white bg-black bg-opacity-40 rounded-b-3xl"
    >
      <p class="font-semibold">{{ item.title }}</p>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img src="/images/icon_1.png" alt="" />
          {{ item.description }}
        </div>

        <Rating :value="item.rating" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Rating from "./Rating.vue";
const props = defineProps(["item"]);
</script>

<style scoped></style>
