<template>
  <div class="bg-slate-50">
    <BannerHome />
    <div class="w-full p-24">
      <div class="container mx-auto">
        <ExploreSlider />
      </div>
    </div>
    <HoneymoonPackages />
  </div>
</template>

<script setup>
useHead({
  title: "Home Page",
});
</script>
