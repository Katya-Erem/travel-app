<template>
  <div class="min-h-screen">
    <div class="">
      <RentACarHeader />
      <div
        class="pt-3 lg:pt-7 xl:pt-10 flex gap-9 flex-wrap justify-center container m-auto max-w-full"
      >
        <RentACarCard v-for="card in RentACarData" :card="card" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RentACarData } from "./RentACarData.js";
</script>

<style scoped></style>
