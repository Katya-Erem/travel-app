<template>
  <div>
    <BannerDayTours />
    <div class="px-10 lg:px-20 container m-auto">
      <div
        class="py-8 lg:py-[60px] flex-col items-center gap-[18px] flex max-w-[872px] mx-auto"
      >
        <h2 class="text-center text-black text-3xl lg:text-[38px] font-bold">
          1 Day Tours of 2023
        </h2>
        <div class="w-[200px] h-px relative">
          <div
            class="w-[200px] h-0 left-0 top-[0.98px] absolute border-2 border-neutral-200"
          ></div>
          <div
            class="w-[100px] h-0 left-[50px] top-0 absolute border-2 border-amber-500"
          ></div>
        </div>
        <div class="text-center text-zinc-600 text-lg lg:text-2xl font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </div>
      </div>
      <div class="grid-container container m-auto">
        <div class="image-1">
          <img src="/images/Rectangle 1.png" alt="" />
          <div class="overlay">
            <h4>1 Day</h4>
            <p>
              Pakistan Monument, Lok Virsa & Margalla Hills of Islamabad Tour
            </p>
          </div>
        </div>
        <div class="image-2">
          <img src="/images/Rectangle 2.png" alt="" />
          <div class="overlay">
            <h4>2 Day</h4>
            <p>
              Pakistan Monument, Lok Virsa & Margalla Hills of Islamabad Tour
            </p>
          </div>
        </div>
        <div class="image-3">
          <img src="/images/Rectangle 3.png" alt="" />
          <div class="overlay">
            <h4>3 Day</h4>
            <p>
              Pakistan Monument, Lok Virsa & Margalla Hills of Islamabad Tour
            </p>
          </div>
        </div>
        <div class="image-4">
          <img src="/images/Rectangle 4.png" alt="" />
          <div class="overlay">
            <h4>4 Day</h4>
            <p>
              Pakistan Monument, Lok Virsa & Margalla Hills of Islamabad Tour s
            </p>
          </div>
        </div>
      </div>
      <div
        class="pt-16 lg:pt-24 pb-12 lg:pb-24 flex items-end gap-8 lg:gap-14 container m-auto"
      >
        <div class="flex-col gap-[18px] flex max-w-[872px]">
          <h2 class="text-black text-3xl lg:text-[38px] font-extrabold">
            1 Day Tours
          </h2>
          <div class="w-[200px] h-px relative">
            <div
              class="w-[200px] left-0 top-[0.98px] absolute border-2 border-neutral-200"
            ></div>
            <div
              class="w-[100px] left-[50px] top-0 absolute border-2 border-amber-500"
            ></div>
          </div>
          <div class="w-full font-light text-lg lg:text-2xl">
            <div class="flex flex-col pr-7">
              <p class="lg:pb-4">
                Any day trip will not only help you save time but money as well.
                As you can see, in Pakistan’s most popular tourist destination,
                accommodation comes at a hefty price tag. Multi-day trips
                require a hotel/resort, evenfancier ones, and an overnight stay
                on board, while on a day trip, you can return to your
                accommodation overnight or move to a cheaper area. If budget is
                one of your concerns, then any day trip from Pakistan is
                theperfect solution. Plus, if you’re lucky enough to have a good
                trip, you’ll be able to experience plenty of activities, both on
                land and in the valleys. A well-designed day trip will give you
                a quick and deep insight into these marvelouslandscapes,
                bewitching mountains, and UNESCO World Heritage Site. Sometimes
                it doesn’t matter how many days you have; what matters is the
                things you can try.
              </p>
              <div>
                Our hot-selling one-day tour packages are:
                <div class="flex flex-wrap font-semibold">
                  1 Day Murree Hills, Patriata & Islamabad Tour
                  <br />
                  1 Day Taxila Museum & Khanpur Dam Tour
                  <br />
                  1 Day Khewra Salt Mines & Katas Raj Temple Tour
                  <br />
                  1 Day Pakistan Monument, Lok Virsa & Margalla Hills Tour
                  <br />
                  1 Day Murree, Nathia Gali & Ayubia Tour
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex relative shrink-0">
          <div class="w-60 lg:w-[300px] xl:w-[400px] relative">
            <img src="/images/Rectangle_5.jpg" alt="" class="" />
          </div>
          <div
            class="w-44 lg:w-[200px] xl:w-[300px] max-h-96 absolute bottom-0 -left-[45px] border border-zinc-100 rounded-[20px]"
          >
            <img src="/images/Rectangle_6.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.grid-container {
  @apply grid grid-cols-4 grid-rows-2 gap-3 lg:gap-4;
}
.grid-container > div {
  @apply relative  overflow-hidden;
}

.image-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
.image-2 {
  grid-column: 3 / 5;
}
img {
  @apply w-full h-full object-cover rounded-[20px];
}

.overlay {
  @apply absolute left-0 bottom-0 w-full h-full text-white p-3 lg:p-5 flex flex-col justify-end gap-1 lg:gap-2 rounded-[20px] bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.4)];
}
.overlay h4 {
  @apply text-sm lg:text-base xl:text-xl 2xl:text-2xl;
}
.overlay p {
  @apply text-[11px] lg:text-sm lg:font-medium xl:text-base 2xl:text-lg;
}
</style>
