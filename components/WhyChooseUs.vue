<template>
  <div>
    <div
      class="sm:pb-28 md:pb-32 lg:pb-36 xl:pb-44 px-0 flex relative m-auto max-w-full"
    >
      <img
        src="/images/why_choose.png"
        alt=""
        class="h-52 sm:h-96 md:h-[430px] lg:h-[500px] w-full object-cover"
      />
      <div class="absolute text-white min-w-full flex">
        <div class="absolute min-w-full my-8 lg:my-11">
          <div class="flex flex-col text-center gap-2 lg:gap-5">
            <h1 class="text-white text-4xl lg:text-5xl xl:text-6xl font-bold">
              Why choose Us?
            </h1>
            <div class="flex flex-col gap-8">
              <h3 class="font-extralight text-lg lg:text-2xl py-2 px-12">
                Our services help our clients to stay in Pakistan without any
                hassle. We are providing the best competitive tour services.
              </h3>
              <div
                class="hidden sm:flex flex-col sm:flex-row m-auto justify-between lg:h-11 px-4 lg:px-8 gap-4 lg:gap-8"
              >
                <WhyChooseUsItem
                  v-for="itemChoose in WhyChooseUsData"
                  :itemChoose="itemChoose"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="sm:hidden max-w-[450px] flex flex-col m-auto justify-between py-10 px-4 gap-4"
    >
      <WhyChooseUsItem
        v-for="itemChoose in WhyChooseUsData"
        :itemChoose="itemChoose"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WhyChooseUsData } from "./WhyChooseUsData";
</script>

<style scoped></style>
