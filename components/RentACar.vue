<template>
  <div class="min-h-screen">
    <RentACarHeader />
    <div class="pt-6 flex gap-9 flex-wrap justify-center">
      <RentACarCard v-for="card in RentACarData" :card="card" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RentACarData } from "./RentACarData.js";
</script>

<style scoped></style>
