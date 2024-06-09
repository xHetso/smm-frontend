<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentIndex = ref(0);
const slides = ref([
    { src: '/src/assets/images/m1.jpg', alt: '...' },
    { src: '/src/assets/images/m2.jpg', alt: '...' },
    { src: '/src/assets/images/m3.jpg', alt: '...' },
    { src: '/src/assets/images/m4.jpeg', alt: '...' }
]);

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

const goToSlide = (index) => {
    currentIndex.value = index;
};

// Optional: Auto slide
let autoSlideInterval = null;
const startAutoSlide = () => {
    autoSlideInterval = setInterval(nextSlide, 3000);
};
const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
};

onMounted(() => {
    startAutoSlide();
});

onUnmounted(() => {
    stopAutoSlide();
});
</script>


<template>
  <div id="default-carousel" class="relative w-full mt-10 container mx-auto" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <div v-for="(slide, index) in slides" :key="index"
           :class="['absolute block w-full duration-700 ease-in-out', { 'hidden': currentIndex !== index, 'translate-x-0': currentIndex === index }]"
           data-carousel-item>
        <img :src="slide.src" class="absolute block w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="slide.alt">
      </div>
    </div>

    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
      <button v-for="(slide, index) in slides" :key="index"
              type="button"
              class="w-3 h-3 rounded-full"
              :class="{'bg-white': currentIndex === index, 'bg-gray-400': currentIndex !== index}"
              aria-current="currentIndex === index"
              :aria-label="'Slide ' + (index + 1)"
              @click="goToSlide(index)">
      </button>
    </div>

    <!-- Slider controls -->
    <button type="button"
            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            @click="prevSlide"
            data-carousel-prev>
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button type="button"
            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            @click="nextSlide"
            data-carousel-next>
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>


    <div class="bg-[#7c14f3] container mx-auto mt-10 p-10">
        <h1 class="text-5xl font-semibold text-white text-center mb-10">Пайдаланушылардың парақшалары</h1>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="text-center">
                <div class="mx-auto w-[320px] h-[600px] overflow-hidden rounded-lg">
                    <img src="/src/assets/images/n1.jpg" alt="" class=" h-full object-cover">
                </div>
            </div>
            <div class="text-center">
                <div class="mx-auto w-[320px] h-[600px] overflow-hidden rounded-lg">
                    <img src="/src/assets/images/n2.jpg" alt="" class=" h-full object-cover">
                </div>
            </div>
            <div class="text-center">
                <div class="mx-auto w-[320px] h-[600px] overflow-hidden rounded-lg">
                    <img src="/src/assets/images/n3.jpg" alt="" class=" h-full object-cover">
                </div>
            </div>
            <div class="text-center">
                <div class="mx-auto w-[320px] h-[600px] overflow-hidden rounded-lg">
                    <img src="/src/assets/images/n4.jpg" alt="" class=" h-full object-cover">
                </div>
            </div>
            <div class="text-center">
                <div class="mx-auto w-[320px] h-[600px] overflow-hidden rounded-lg">
                    <img src="/src/assets/images/n5.webp" alt="" class=" h-full object-cover">
                </div>
            </div>
            <div class="text-center">
                <div class="mx-auto w-[320px] h-[600px] overflow-hidden rounded-lg">
                    <img src="/src/assets/images/n6.jpg" alt="" class=" h-full object-cover">
                </div>
            </div>
            <div class="text-center">
                <div class="mx-auto w-[320px] h-[600px] overflow-hidden rounded-lg">
                    <img src="/src/assets/images/n7.jpg" alt="" class=" h-full object-cover">
                </div>
            </div>
            <div class="text-center">
                <div class="mx-auto w-[320px] h-[600px] overflow-hidden rounded-lg">
                    <img src="/src/assets/images/n8.jpg" alt="" class=" h-full object-cover">
                </div>
            </div>
            <div class="text-center">
                <div class="mx-auto w-[320px] h-[600px] overflow-hidden rounded-lg">
                    <img src="/src/assets/images/n9.jpg" alt="" class=" h-full object-cover">
                </div>
            </div>
            <div class="text-center">
                <div class="mx-auto w-[320px] h-[600px] overflow-hidden rounded-lg">
                    <img src="/src/assets/images/n10.jpg" alt="" class=" h-full object-cover">
                </div>
            </div>
            <div class="text-center">
                <div class="mx-auto w-[320px] h-[600px] overflow-hidden rounded-lg">
                    <img src="/src/assets/images/n11.jpg" alt="" class=" h-full object-cover">
                </div>
            </div>
            <div class="text-center">
                <div class="mx-auto w-[320px] h-[600px] overflow-hidden rounded-lg">
                    <img src="/src/assets/images/n12.jpg" alt="" class=" h-full object-cover">
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
.hidden {
  display: none;
}
</style>