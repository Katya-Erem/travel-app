<template>
  <nav class="max-h-full w-full">
    <div class="flex relative">
      <img
        src="../images/banner.png"
        alt=""
        class="w-full h-96 md:h-[400px] lg:h-[500px] xl:h-screen object-cover brightness-50"
      />
      <div class="absolute min-w-full">
        <Header />
        <div
          class="flex flex-col lg:mt-9 xl:mt-36 text-center items-center justify-center"
        >
          <h1
            class="text-white text-4xl sm:text-5xl md:text-[54px] lg:text-[75px] 2xl:text-[100px] lg:my-0 2xl:my-14 font-semibold p-9 sm:p-10 md:p-11 lg:p-12 xl:p-20 2xl:p-28 flex"
          >
            See Pakistan Tours
          </h1>
          <div class="flex flex-col gap-3">
            <h3
              class="text-yellow-400 font-medium text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl p-3"
            >
              Top Destinations
            </h3>
            <div
              class="max-w-full flex flex-wrap md:w-[750px] lg:w-[850px] xl:w-[1010px] 2xl:w-[1300px] 2xl:gap-16 justify-center h-11 sm:h-9 md:h-10 lg:h-12 xl:h-[52px] bg-stone-50 bg-opacity-60 rounded-full text-stone-950 text-xs md:text-[13px] lg:text-sm xl:text-lg font-medium px-8 gap-2 sm:gap-3 md:gap-5 lg:gap-7"
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
