<template>
  <div
    class="about sticky top-8 flex h-[calc(100dvh-4.5rem)] w-full flex-col items-start justify-start rounded-xl bg-c-white p-5"
    ref="aboutRef"
  >
    <div class="start flex h-full w-full flex-col">
      <h2 class="mb-20 font-title text-[3rem] font-bold text-c-dark">
        <ScrambledText :text="$t('pageTitle.about')" />
      </h2>
      <span class="z-20 inline-block w-2/3 text-[1rem] text-c-dark uppercase">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </span>
      <div class="flex h-full w-full items-center justify-center">
        <div class="relative flex h-full w-1/4 items-center rounded-sm">
          <span class="absolute top-10 right-full mr-1 w-15 text-right font-black text-c-dark"
            >[ {{ $t('decoration.hi') }} ]</span
          >
          <img src="/images/photo.png" alt="my photo" class="rounded-sm" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouterFallback } from '~/components/RouterFallback/useRouterFallback';

const { setPending } = useRouterFallback();
const aboutRef = ref<HTMLElement | null>(null);

useHead({ title: 'BBTRFL1 ◦ About' });
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
