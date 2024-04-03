<template>
  <header class="relative bg-zinc-800 bg-opacity-40 text-white display">
    <nav class="flex flex-wrap">
      <div class="flex items-center w-full">
        <div class="px-5 flex items-center justify-start">
          <img src="../images/logo.png" class="w-20" />
        </div>
        <div class="m-auto flex justify-center">
          <ul class="hidden lg:flex gap-10">
            <li>
              <NuxtLink to="/" class="nav-link hover:text-yellow-400"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/day-tours" class="nav-link hover:text-yellow-400"
                >Day Tours</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/destinations"
                class="nav-link hover:text-yellow-400"
                >Destinations</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/car-rentals" class="nav-link hover:text-yellow-400"
                >Car Rentals</NuxtLink
              >
            </li>
          </ul>
        </div>

        <button
          class="lg:hidden flex items-center justify-center w-8 h-8 ring-2 ring-white ring-opacity-50 rounded-lg"
          @click="showMenu = !showMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div class="flex items-center me-0 px-5 max-h-11">
          <img src="../images/Ellipse1.png" class="pr-2 rounded-full" />
          <div class="">
            <h1 class="text-xs sm:text-sm">Dityo Hendyawan</h1>
            <h4 class="text-[11px] sm:text-xs font-normal opacity-80">
              Traveler Enthusiast
            </h4>
          </div>
        </div>
      </div>
      <div
        v-motion-slide-top
        class="lg:hidden flex flex-col sm:flex-row items-center justify-center w-full gap-1 sm:gap-8 sm:px-8"
        v-if="showMenu"
      >
        <NuxtLink to="/" class="nav-link hover:text-yellow-400">Home</NuxtLink>
        <NuxtLink to="/day-tours" class="nav-link hover:text-yellow-400"
          >Day Tours</NuxtLink
        >
        <NuxtLink to="/destinations" class="nav-link hover:text-yellow-400"
          >Destinations</NuxtLink
        >
        <NuxtLink to="/car-rentals" class="nav-link hover:text-yellow-400"
          >Car Rentals</NuxtLink
        >
      </div>
    </nav>
  </header>
</template>

<style scoped></style>

<script setup>
import { ref } from "vue";

const showMenu = ref(false);
</script>
