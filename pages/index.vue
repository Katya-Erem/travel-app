<template>
  <div class="bg-slate-50">
    <BannerHome />
    <div class="px-44">
      <div class="w-full p-24">
        <div class="container mx-auto">
          <ExploreSlider />
        </div>
      </div>
      <HoneymoonPackages ref="target1" class="" />
    </div>
    <WhyChooseUs />
  </div>
</template>

<script setup>
import { fadeSlideY } from "../components/motionVariants";

useHead({
  title: "Home Page",
});

const target1 = ref();

const motionInstance1 = useMotion(target1, fadeSlideY);
</script>

<style>
/* .design {
  width: 100%;
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
} */
</style>
