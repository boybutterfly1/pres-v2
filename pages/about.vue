<template>
  <div class="w-full sticky top-8 h-[calc(100dvh-4.5rem)] rounded-xl flex flex-col items-start justify-start p-5 bg-c-white">
    <h2 class="text-c-dark text-[3rem] font-title font-bold mb-20">
      <ScrambledText text="ABOUT ME"/>
    </h2>
    <span class=" text-c-dark inline-block text-[1rem] z-20 uppercase  w-2/3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </span>
    <div class="w-full h-full flex items-center justify-center p-10 0">
      <img src="/images/photo.png" alt="my photo" class=" w-1/4 rounded-sm">
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouterFallback} from "~/components/RouterFallback/useRouterFallback";

const { setPending } = useRouterFallback()

useHead({title: 'BBTRFL1 ◦ About'})
onMounted(() => {
  setPending(false)
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
    width: 0;
    opacity: 0;
    filter: blur(18px);
  }
  100% {
    width: 25%;
    opacity: 1;
    filter: blur(0);
  }
}
</style>