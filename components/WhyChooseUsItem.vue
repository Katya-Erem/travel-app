<template>
  <div class="max-w-sm text-black container">
    <div
      class="flex flex-col gap-4 text-start p-7 bg-white shadow-lg rounded-xl"
    >
      <div class="justify-start">
        <img :src="itemChoose.image" alt="" class="rounded-lg w-32" />
      </div>
      <div class="flex flex-col">
        <h3 class="text-2xl font-bold py-3">{{ itemChoose.name }}</h3>
        <p>{{ itemChoose.description }}</p>
      </div>
      <div class="pt-3">
        <NuxtLink :to="itemChoose.link">
          <div class="flex items-center gap-1">
            Learn More
            <img src="/images/learn_more.jpg" alt="" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["itemChoose"]);
</script>

<style scoped></style>
