<template>
  <div
    class="sticky top-8 flex h-[calc(100dvh-4.5rem)] w-full items-center justify-start rounded-xl p-3 sm:p-5"
    ref="indexRef"
  >
    <span
      ref="headline"
      class="absolute top-1/3 z-20 w-full font-title text-[4vw] leading-tight text-white uppercase sm:h-[2.5rem] md:h-[3rem] lg:h-[4rem]"
      :style="{ transform: `translateY(${translateY}px)` }"
    >
      <TypeWriter :string-arr="[$t('intro.line1'), $t('intro.line2')]" />
    </span>

    <PixiApp class="absolute top-0 left-0 z-10 h-full w-full" />

    <VideoFrame
      class="fixed bottom-8 left-3 z-11 w-[120px] sm:right-3 sm:bottom-12 sm:w-[140px] md:w-[160px]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import VideoFrame from '~/components/VideoFrame.vue';
import { useRouterFallback } from '~/components/RouterFallback/useRouterFallback';

const { t } = useI18n();
const { setPending } = useRouterFallback();
const translateY = ref(0);
const indexRef = ref<HTMLElement | null>(null);

const handleScroll = () => {
  const scrollTop = window.scrollY;
  const triggerPoint = window.innerHeight * 0.43;

  translateY.value = scrollTop > triggerPoint ? -(scrollTop - triggerPoint) : 0;
};

useHead({ title: `BTRFL1 ◦ ${t('navigation.intro')}` });

onMounted(() => {
  setPending(false);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.fade {
  opacity: 1;
  filter: blur(0);
  animation: fade 1s ease;
}
@keyframes fade {
  0% {
    opacity: 0;
    filter: blur(18px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
</style>
