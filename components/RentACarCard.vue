<template>
  <div class="flex flex-col gap-8 items-center shadow-xl py-8">
    <img :src="card.image" alt="" class="w-96 h-60 p-3 object-fill" />

    <div class="flex flex-col gap-8 text-xl items-center">
      <div class="bg-amber-500 h-0.5 w-80"></div>
      <h4 class="text-2xl font-bold">{{ card.title }}</h4>
      <p class="flex justify-center">{{ card.price }}</p>
      <button class="bg-amber-500 w-56 h-16 rounded-full text-xl">
        See More
      </button>
    </div>
  </div>
</template>

<script setup>
const propsRentACar = defineProps(["card"]);
</script>
