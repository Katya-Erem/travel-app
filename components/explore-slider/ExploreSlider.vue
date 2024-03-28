<script setup>
import "@glidejs/glide/dist/css/glide.core.min.css";
import Glide from "@glidejs/glide";
import { onMounted, ref } from "vue";
import { exploreSliderData } from "./eploreSliderData";

import IosArrowForwardIcon from "vue-ionicons/dist/ios-arrow-forward.vue";
import IosArrowBackIcon from "vue-ionicons/dist/ios-arrow-back.vue";

import { fadeSlideY } from "../motionVariants";

const target1 = ref();
const target2 = ref();

const motionInstance1 = useMotion(target1, fadeSlideY);
const motionInstance2 = useMotion(target2, fadeSlideY);

const exploreSliderConfig = {
  type: "carousel",
  perView: 3,
  focusAt: "center",
  gap: 30,
  breakpoints: {
    500: {
      perView: 1,
    },
    1024: {
      perView: 2,
    },
  },
};

onMounted(() => {
  const exploreSlider = new Glide(".explore-slider", exploreSliderConfig);
  exploreSlider.mount();
});
</script>

<template>
  <div class="container m-auto">
    <ExploreSliderHeader ref="target1" />
    <div class="glide explore-slider relative mt-10" ref="target2">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <ExploreSliderItem v-for="item in exploreSliderData" :item="item" />
        </ul>
      </div>
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
          <IosArrowBackIcon />
        </button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
          <IosArrowForwardIcon />
        </button>
      </div>
      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button
          v-for="(item, index) in exploreSliderData"
          class="glide__bullet"
          :data-glide-dir="`=${index}`"
        ></button>
      </div>
    </div>
  </div>
</template>

<style>
.glide__slides {
  @apply py-4;
}
.glide__arrow {
  @apply absolute -top-10 w-10 h-10 bg-white shadow rounded-full flex items-center justify-center;
}
.glide__arrow--left {
  @apply -left-10;
}
.glide__arrow--right {
  @apply -right-10;
}
.glide__bullets {
  @apply flex gap-2 justify-center mt-5;
}
.glide__bullet {
  @apply w-5 h-5 bg-neutral-200 rounded-full;
}
.glide__bullet.glide__bullet--active {
  @apply bg-amber-500;
}
</style>
