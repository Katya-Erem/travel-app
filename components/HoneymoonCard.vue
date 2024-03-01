<template>
  <div>
    <div class="flex flex-col bg-white shadow-xl rounded-2xl p-2 w-[330px]">
      <img :src="card.img" alt="" class="pb-1 brightness-75" />
      <div class="p-2">
        <h2 class="font-semibold text-lg">{{ card.name }}</h2>
        <span class="flex justify-between items-center pb-2 pt-1">
          <p>{{ card.signature }}</p>
          <Rating :value="card.estimation" />
        </span>
      </div>
    </div>
  </div>
  <!-- <div class="signboard" v-if="card.signboard">
        {{ card.signboard }}
      </div> -->
</template>

<script lang="ts" setup>
import Rating from "./Rating.vue";
const propsCard = defineProps(["card"]);
</script>

<style scoped>
.signboard {
  @apply absolute top-5 left-0 bg-amber-500 py-1 px-4  uppercase text-white rounded-r-md;
}
</style>
