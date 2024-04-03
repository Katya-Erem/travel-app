<template>
  <div class="bg-slate-50">
    <BannerHome />
    <div class="2xl:px-14">
      <div class="w-full p-12 sm:p-14 md:p-16 lg:p-20 xl:p-24">
        <div class="container mx-auto">
          <ExploreSlider />
        </div>
      </div>
      <HoneymoonPackages />
    </div>
    <!-- <WhyChooseUs /> -->
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

<style scoped></style>
