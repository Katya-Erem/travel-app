<template>
  <div>
    <img :src="card.image" alt="" />
    <div>
      <h4>{{ card.title }}</h4>
    </div>
    <p>{{ card.price }}</p>
  </div>
</template>

<script setup>
const propsRentACar = defineProps(["card"]);
</script>

<style scoped></style>
