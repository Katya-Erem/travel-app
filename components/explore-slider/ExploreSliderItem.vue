<script setup>
import Rating from "../Rating.vue";
const props = defineProps(["item"]);
</script>

<template>
  <li class="glide__slide explore-item">
    <img :src="item.image" alt="" />
    <div class="title">
      <h4>{{ item.title }}</h4>
      <Rating :value="item.rating" />
    </div>
    <p>{{ item.description }}</p>
    <div class="badge" v-if="item.badge">
      {{ item.badge }}
    </div>
  </li>
</template>

<style>
.explore-item {
  @apply bg-white shadow-md rounded-xl flex flex-col gap-1 sm:gap-2 p-0 relative;
}
.explore-item img {
  @apply rounded-xl h-[200px] md:h-[280px]  lg:h-[300px] xl:h-[300px]  2xl:h-[350px] object-cover;
}
.explore-item .title {
  @apply hidden justify-between mt-1 sm:mt-4;
}
.explore-item h4 {
  @apply text-[15px] sm:text-base md:text-lg 2xl:text-2xl font-medium;
}
.explore-item p {
  @apply hidden text-sm;
}
.explore-item.glide__slide--active {
  @apply p-4 pt-3;
}
.explore-item.glide__slide--active .title,
.explore-item.glide__slide--active .title,
.explore-item.glide__slide--active p {
  @apply flex;
}
.badge {
  @apply absolute top-5 left-0 bg-amber-500 py-1 px-4 text-xs sm:text-sm md:text-base uppercase text-white rounded-r-md;
}
.explore-item.glide__slide--active .badge {
  @apply top-8 left-4;
}
</style>
