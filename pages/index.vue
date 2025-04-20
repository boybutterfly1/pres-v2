<template>
  <div
      class="w-full sticky top-8 h-[calc(100dvh-4.5rem)] rounded-xl flex items-center justify-start p-5"
      ref="indexRef"
  >
    <span
        ref="headline"
        class="fade text-white inline-block text-[3rem] z-20 uppercase font-title mb-[10%] "
        :style="{ transform: `translateY(${translateY}px)` }"
    >
      {{ $t('intro.line1') }}
      <br />
      {{ $t('intro.line2') }}
    </span>
    <PixiApp class="absolute z-10 top-0 left-0" />
    <VideoFrame class="fixed z-11 bottom-12 right-3" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import VideoFrame from "~/components/VideoFrame.vue"
import { useRouterFallback } from "~/components/RouterFallback/useRouterFallback"

const { setPending } = useRouterFallback()
const translateY = ref(0)
const indexRef = ref<HTMLElement | null>(null);

const handleScroll = () => {
  const scrollTop = window.scrollY

  const triggerPoint = window.innerHeight * 0.475

  if (scrollTop > triggerPoint) {
    translateY.value = -(scrollTop - triggerPoint)
  } else {
    translateY.value = 0
  }
}

useHead({title: 'BBTRFL1 ◦ Index'})

onMounted(() => {
  setPending(false)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
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
