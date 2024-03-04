<template>
  <div class="bg-white">
    <div>
      <img :src="itemChoose.image" alt="" />
    </div>
    <div>
      <h3>{{ itemChoose.name }}</h3>
      <p>{{ itemChoose.description }}</p>
    </div>
    <div>
      <NuxtLink :to="itemChoose.link">
        Learn More
        <img src="/images/learn_more.jpg" alt="" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const propsChooseItem = defineProps(["itemChoose"]);
</script>

<style scoped></style>
