<template>
  <div
    class="flex flex-col gap-2 lg:gap-8 items-center shadow-xl py-6 lg:py-8 bg-white"
  >
    <img :src="card.image" alt="" class="w-96 h-60 p-3 object-fill" />
    <div class="flex flex-col gap-4 lg:gap-8 text-xl items-center">
      <div class="bg-amber-500 h-0.5 w-72 md:w-80"></div>
      <h4 class="text-2xl font-bold">{{ card.title }}</h4>
      <p class="flex justify-center">{{ card.price }}</p>
      <a
        :href="card.link"
        class="bg-amber-500 w-56 h-16 flex justify-center items-center rounded-full text-xl"
        >See More</a
      >
    </div>
  </div>
</template>

<script setup>
const propsRentACar = defineProps(["card"]);
</script>
