<template>
  <div
    class="about sticky top-8 flex h-[calc(100dvh-4.5rem)] w-full flex-col items-start justify-start rounded-xl bg-c-white p-4 sm:p-6 md:p-8"
    ref="aboutRef"
  >
    <div class="start relative flex h-full w-full flex-col">
      <h1
        class="mb-10 font-title text-2xl font-bold text-c-dark sm:mb-16 sm:text-3xl md:mb-20 md:text-[3rem]"
      >
        <ScrambledText :text="t('pageTitle.about')" />
      </h1>

      <div class="relative w-full xl:w-2/3">
        <div class="float-right mb-4 ml-6 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <ImageList :img-list="['/images/my-photo.png']" aspect-ratio="aspect-[1024/1270]" />
        </div>

        <div class="text-sm text-c-dark normal-case sm:text-base md:text-[1rem]">
          <p class="mb-4 font-bold">{{ t('aboutPage.text0') }}</p>
          <p class="mb-4">{{ t('aboutPage.text1') }}</p>
          <p class="mb-4">{{ t('aboutPage.text2') }}</p>
          <p class="mb-4">{{ t('aboutPage.text3') }}</p>
          <p class="mb-4">{{ t('aboutPage.text4') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouterFallback } from '~/components/RouterFallback/useRouterFallback';
import { useHead, useI18n, useScrollScale } from '#imports';
import { onMounted, ref } from 'vue';

const { t } = useI18n();
const { setPending } = useRouterFallback();

const aboutRef = ref<HTMLElement | null>(null);

useHead({ title: `BTRFL1 ◦ ${t('navigation.about')}` });

onMounted(() => {
  setPending(false);
  useScrollScale(aboutRef.value);
});
</script>

<style scoped>
.start {
  animation: zoomOut 0.6s ease forwards;
}
@keyframes zoomOut {
  0% {
    scale: 1.2;
    filter: blur(5rem);
  }
  100% {
    scale: 1;
    filter: blur(0);
  }
}

.about {
  will-change: transform;
  transition: transform 0.1s ease-out;
}
</style>
