<template>
  <div>
    <div class="pb-32 px-0 flex relative">
      <img src="/images/why_choose.png" alt="" class="w-full" />
      <div class="absolute text-white min-w-full flex">
        <div class="absolute min-w-full my-11">
          <div class="flex flex-col text-center gap-5">
            <h1 class="text-white text-6xl font-bold">Why choose Us?</h1>
            <div class="flex flex-col gap-12">
              <h3 class="font-extralight text-2xl py-2 px-12">
                Our services help our clients to stay in Pakistan without any
                hassle. We are providing the best competitive tour services.
              </h3>
              <div class="flex m-auto justify-between h-11 px-8 gap-8">
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
  </div>
</template>

<script lang="ts" setup>
import { WhyChooseUsData } from "./WhyChooseUsData";
</script>

<style scoped></style>
