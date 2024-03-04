<template>
  <div class="bg-slate-50">
    <BannerHome />
    <div class="w-full p-24">
      <div class="container mx-auto">
        <ExploreSlider />
      </div>
    </div>
    <HoneymoonPackages ref="target1" />
    <WhyChooseUs />
    <!-- 5 -->
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
