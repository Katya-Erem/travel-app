<template>
  <nav class="max-h-full">
    <div class="flex relative design">
      <img
        src="../images/banner.png"
        alt=""
        class="w-full h-screen object-cover brightness-50"
      />
      <div class="absolute min-w-full">
        <Header />
        <!-- <div class="absolute w-full h-full"> -->
        <div
          class="flex flex-col h-screen text-center items-center justify-center gap-5"
        >
          <h1 class="text-white text-[100px] font-semibold p-12 flex">
            See Pakistan Tours
          </h1>
          <div class="flex flex-col gap-3">
            <h3 class="text-yellow-400 font-medium text-4xl p-3">
              Top Destinations
            </h3>
            <div
              class="flex m-auto justify-between h-14 bg-stone-50 bg-opacity-60 rounded-full text-stone-950 text-md font-medium px-8 gap-8"
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
        <!-- </div> -->
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

<style scoped>
.design {
  @media (min-width: 640px) {
    .container {
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 768px;
    }
  }
  @media (min-width: 1024px) {
    .container {
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px) {
    .container {
      max-width: 1280px;
    }
  }
  @media (min-width: 1536px) {
    .container {
      max-width: 1536px;
    }
  }
}
</style>
