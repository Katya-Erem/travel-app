<template>
  <header class="relative bg-zinc-800 bg-opacity-40 text-white">
    <nav class="flex min-w-full">
      <div class="m-auto">
        <img src="../images/logo.png" class="w-20" />
      </div>
      <div class="m-auto flex">
        <ul class="flex gap-8">
          <li>
            <NuxtLink to="/" class="nav-link hover:text-yellow-400"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/about" class="nav-link hover:text-yellow-400"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/day-tours" class="nav-link hover:text-yellow-400"
              >Day Tours</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/destinations" class="nav-link hover:text-yellow-400"
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
      <div class="flex m-auto">
        <img src="../images/Ellipse1.png" class="pr-2 rounded-full" />
        <div>
          <h1 class="text-sm">Dityo Hendyawan</h1>
          <h4 class="text-xs font-normal opacity-80">Traveler Enthusiast</h4>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup></script>
