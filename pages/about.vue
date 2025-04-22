<template>
  <div
    class="about sticky top-8 flex h-[calc(100dvh-4.5rem)] w-full flex-col items-start justify-start rounded-xl bg-c-white p-4 sm:p-6 md:p-8"
    ref="aboutRef"
  >
    <div class="start flex h-full w-full flex-col">
      <h1
        class="mb-10 font-title text-2xl font-bold text-c-dark sm:mb-16 sm:text-3xl md:mb-20 md:text-[3rem]"
      >
        <ScrambledText :text="$t('pageTitle.about')" />
      </h1>
      <span
        class="z-20 inline-block w-full text-sm leading-relaxed text-c-dark uppercase sm:w-4/5 sm:text-base md:w-2/3 md:text-[1rem]"
      >
        {{ $t('aboutPage.text') }}
      </span>
      <div class="mt-6 flex h-full w-full items-center justify-center">
        <div class="relative flex h-auto items-center rounded-sm sm:w-1/2 md:w-1/3 lg:w-1/4">
          <span
            class="absolute top-0 right-full mr-1 w-20 text-right font-black text-c-dark sm:w-24"
          >
            [ {{ $t('decoration.hi') }} ]
          </span>
          <img src="/images/photo.png" alt="my photo" class="w-full rounded-sm object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouterFallback } from '~/components/RouterFallback/useRouterFallback';

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
