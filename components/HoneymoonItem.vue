<template>
  <div>
    <img :src="item.image" alt="" />
    <div class="title">
      <h4>{{ item.title }}</h4>
      <Rating :value="item.rating" />
    </div>
    <p>{{ item.description }}</p>
  </div>
</template>

<script lang="ts" setup>
import Rating from "../Rating.vue";
const props = defineProps(["item"]);
</script>
