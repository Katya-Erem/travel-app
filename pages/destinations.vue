<template>
  <div>
    <BannerDestination />
    <div class="px-10 md:px-24 lg:px-44">
      <div class="flex flex-col items-center">
        <div
          class="pt-[60px] flex-col items-center gap-[18px] flex max-w-[872px] mx-auto"
        >
          <h2 class="text-center text-black text-3xl lg:text-[38px] font-bold">
            Best Destinations For 2023-24
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
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
        </div>
        <div class="max-w-[1384px]">
          <Destinations />
        </div>
      </div>
      <TopDestinations />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
