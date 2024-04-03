<template>
  <nav
    class="pb-10 sm:pb-16 md:pb-20 lg:pb-24 container m-auto flex flex-col items-center"
  >
    <div
      class="flex-col items-center gap-[18px] flex max-w-[872px] mx-auto px-10 sm:px-12 lg:px-14 xl:рx-26 2xl:рx-20"
    >
      <h2 class="text-center text-black text-3xl lg:text-[38px] font-bold">
        Honeymoon Packages From Pakistan
      </h2>
      <div class="w-[200px] h-px relative">
        <div
          class="w-[200px] h-0 left-0 top-[0.98px] absolute border-2 border-neutral-200"
        ></div>
        <div
          class="w-[100px] h-0 left-[50px] top-0 absolute border-2 border-amber-500"
        ></div>
      </div>
      <div class="text-center text-zinc-600 text-lg lg:text-2xl font-light">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </div>
    </div>
    <div class="p-5 lg:p-9">
      <div class="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
        <HoneymoonCard v-for="card in HoneyMoonPackageData" :card="card" />
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { HoneyMoonPackageData } from "./HomeymoonPackagesData";
</script>

<style scoped></style>
