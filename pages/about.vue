<template>
  <div
      class="about w-full sticky top-8 h-[calc(100dvh-4.5rem)] rounded-xl flex flex-col items-start justify-start p-5 bg-c-white"
      ref="aboutRef"
  >
    <div class="start flex flex-col h-full w-full">
      <h2 class="text-c-dark text-[3rem] font-title font-bold mb-20">
        <ScrambledText :text="$t('pageTitle.about')"/>
      </h2>
      <span class=" text-c-dark inline-block text-[1rem] z-20 uppercase  w-2/3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </span>
      <div class="w-full h-full flex items-center justify-center ">
        <div class="relative w-1/4 h-full flex items-center rounded-sm ">
          <span class="absolute top-10 right-full mr-1 text-right w-15 font-black text-c-dark">[ {{ $t("decoration.hi") }} ]</span>
          <img src="/images/photo.png" alt="my photo" class=" rounded-sm">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouterFallback} from "~/components/RouterFallback/useRouterFallback";

const { setPending } = useRouterFallback()
const aboutRef = ref<HTMLElement | null>(null)

useHead({title: 'BBTRFL1 ◦ About'})
onMounted(() => {
  setPending(false)
  useScrollScale(aboutRef.value)
})

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