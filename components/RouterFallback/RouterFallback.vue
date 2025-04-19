<template>
  <transition name="fade">
    <div v-if="isPending" class="w-full overflow-hidden absolute z-30 top-0 h-[calc(100dvh-4.5rem)] rounded-xl bg-c-white">
      <span class="loader"></span>
      <div class="absolute top-0 left-0 w-8 py-3 h-full flex flex-col items-center justify-between">
        <div
            v-for="(el, index) of 3"
            :key="index"
            class="w-1 h-6 rounded-lg bg-c-dark "
        />
      </div>
      <div class="absolute top-0 right-0 w-8 py-3 h-full flex flex-col items-center justify-between">
        <div
            v-for="(el, index) of 3"
            :key="index"
            class="w-1 h-6 rounded-lg bg-c-dark "
        />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import {useRouterFallback} from "~/components/RouterFallback/useRouterFallback";

const router = useRouter()
const { isPending, setPending } = useRouterFallback()

router.beforeEach((to, from, next) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  setPending(true)
  setTimeout(() => next(), 500)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.loader {
  width: 80%;
  border-radius: 5px;
  height: 6px;
  display: inline-block;
  background-color: #FFF;
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.55) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.55) 50%, rgba(0, 0, 0, 0.55) 75%, transparent 75%, transparent);
  font-size: 30px;
  background-size: 1em 1em;
  box-sizing: border-box;
  animation: barStripe 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes barStripe {
  0% {
    background-position: 1em 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>