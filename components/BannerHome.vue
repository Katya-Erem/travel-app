<template>
  <nav class="max-h-full">
    <div class="flex relative">
      <img src="../images/banner.png" alt="" class="w-full brightness-50" />
      <div class="absolute min-w-full">
        <Header />
        <div class="absolute min-w-full min-h-full">
          <div class="flex flex-col text-center gap-5">
            <h1 class="text-white text-6xl font-bold p-12">
              See Pakistan Tours
            </h1>
            <div class="flex flex-col gap-3">
              <h3 class="text-yellow-400 font-semibold text-2xl p-3">
                Top Destinations
              </h3>
              <div
                class="flex m-auto justify-between h-11 bg-stone-50 bg-opacity-60 rounded-full text-stone-950 text-md font-medium px-8 gap-8"
              >
                <button>Hunza Valley</button>
                <button>Skardu Valley</button>
                <button>Naran / Shogran</button>
                <button>Swat / Kalam</button>
                <button>Azad Kashmir</button>
                <button>Chitral Valley</button>
                <button>Murree</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style scoped></style>
