<script setup>
import IosStarIcon from "vue-ionicons/dist/ios-star.vue";
import IosStarOutlineIcon from "vue-ionicons/dist/ios-star-outline.vue";
import IosStarHalfIcon from "vue-ionicons/dist/ios-star-half.vue";

const props = defineProps(["value"]);

const roundToHalf = (num) => {
  return Math.round(num * 2) / 2;
};
const rounded = roundToHalf(props.value);
const fullStars = Math.floor(rounded);
const halfStars = Math.round(rounded - fullStars);
const emptyStars = 5 - fullStars - halfStars;
</script>

<template>
  <div class="flex fill-amber-500">
    <IosStarIcon v-for="n in fullStars" />
    <IosStarHalfIcon v-for="n in halfStars" />
    <IosStarOutlineIcon v-for="n in emptyStars" />
  </div>
</template>
