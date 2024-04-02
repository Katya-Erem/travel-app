<template>
  <div class="text-black xl:w-80">
    <div
      class="flex flex-col gap-2 xl:gap-7 text-start p-4 lg:p-[22px] xl:p-7 bg-white shadow-lg rounded-xl"
    >
      <div class="justify-start">
        <img
          :src="itemChoose.image"
          alt=""
          class="rounded-lg w-20 md:w-24 lg:w-28 xl:w-32"
        />
      </div>
      <div class="flex flex-col">
        <h3 class="text-lg md:text-xl lg:text-2xl font-bold py-1">
          {{ itemChoose.name }}
        </h3>
        <p class="text-xs md:text-sm lg:text-base">
          {{ itemChoose.description }}
        </p>
      </div>
      <div class="pt-0 text-sm md:text-[15px] lg:text-base">
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
