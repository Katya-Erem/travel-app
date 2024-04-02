<template>
  <nav class="max-h-full">
    <div class="flex relative">
      <div class="m-auto w-full">
        <img
          src="../images/bannerDayTous.png"
          alt=""
          class="w-full brightness-50 object-cover h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-[600px]"
        />
      </div>
      <div class="absolute min-w-full min-h-full">
        <Header />
        <div
          class="min-w-full min-h-full text-center my-12 md:my-14 lg:my-16 xl:my-24 2xl:my-44"
        >
          <h1 class="text-white text-opacity-90 font-bold text-5xl lg:text-6xl">
            Destination
          </h1>
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
