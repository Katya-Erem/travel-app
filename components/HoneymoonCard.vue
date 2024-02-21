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
  <!--  <div class="w-72 bg-white shadow-2xl p-2">
    <img
      src="../public/images/honeymoon1.png"
      alt=""
      class="pb-1 brightness-75"
    />
    <div class="p-2">
      <h2 class="font-semibold text-lg">Chitral, Kalash & Hunza</h2>
      <span>
        <p>10 Days 9 Nights</p>
      </span>
    </div>
  </div> -->
</template>

<script lang="ts" setup>
import Rating from "./Rating.vue";
const propsCard = defineProps(["card"]);
</script>
