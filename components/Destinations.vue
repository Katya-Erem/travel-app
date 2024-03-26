<template>
  <div class="pt-6 flex gap-9 flex-wrap justify-center">
    <DestinationsItem v-for="item in DestinationsData" :item="item" />
  </div>
</template>

<script lang="ts" setup>
import { DestinationsData } from "./DestinationsData";
</script>

<style scoped></style>
