<template>
  <footer
    ref="footerRef"
    id="footerBlock"
    class="scrolled-block relative z-20 mb-10 flex h-[calc(100dvh-4.5rem)] w-full flex-col rounded-t-xl border-b border-dotted border-b-c-white/30 bg-c-dark p-3"
  >
    <div class="grid h-full grid-cols-8 grid-rows-2 gap-2.5">
      <img loading="lazy" src="/images/globe.webp" width="100" alt="logo" class="" />
      <div class="text-[0.65rem] text-c-white">2025®</div>
      <span class="col-start-5 col-end-7 row-start-1 row-end-2 text-[0.5rem] text-c-white">
        {{ $t('decoration.rights') }}
      </span>
      <img
        loading="lazy"
        src="https://i.pinimg.com/736x/93/a6/b2/93a6b2674e6e959802e1e124b6b9eb93.jpg"
        width="200"
        alt="logo"
        class="col-start-8 row-start-2 row-end-2 self-end"
      />
      <div class="col-start-1 col-end-6 row-start-2 row-end-2 self-end">
        <Contacts />
      </div>
    </div>

    <transition name="fade">
      <component
        :is="ThreeModel"
        @loaded="isVisible = true"
        v-if="isVisible"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </transition>
  </footer>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';
import { type Component, defineAsyncComponent, onMounted, ref, shallowRef } from 'vue';

const ThreeModel = shallowRef<Component | null>(null);

const isVisible = ref<boolean>(true);
const footerRef = ref<HTMLElement | null>(null);

onMounted(() => {
  const { stop } = useIntersectionObserver(
    footerRef,
    ([entry]) => {
      if (entry?.isIntersecting) {
        ThreeModel.value = defineAsyncComponent(() => import('~/components/ThreeModel.vue'));
        stop();
      }
    },
    { threshold: 0.5 },
  );
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 1s ease,
    filter 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(10px);
}
</style>
