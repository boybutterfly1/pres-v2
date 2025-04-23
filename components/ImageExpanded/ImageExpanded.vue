<template>
  <div
    v-if="imgSrc"
    @click="closeImg"
    class="absolute top-0 left-0 z-90 flex h-screen w-screen items-center justify-center bg-c-white p-10"
  >
    <div class="relative flex h-full w-full items-center justify-center">
      <span
        v-if="!isLoaded"
        class="absolute top-1/2 left-1/2 z-100 -translate-x-1/2 -translate-y-1/2 rounded-lg p-5 text-[1rem] text-c-white"
      >
        {{ `[ ${$t('utils.loading')} ]` }}
      </span>
      <NuxtImg
        v-show="!isLoaded"
        :src="imgSrc"
        :alt="`${imgAlt(imgSrc)} image`"
        class="absolute inset-0 h-full w-full rounded-xl object-cover transition-opacity"
        sizes="100vw sm:50vw md:400px"
        format="webp"
        :placeholder="false"
        quality="50"
        width="344"
        height="191"
        :style="{
          viewTransitionName: !isLoaded ? imgAlt(imgSrc) : 'none',
        }"
      />
      <NuxtImg
        v-show="isLoaded"
        :src="imgSrc"
        :alt="`${imgAlt} image`"
        class="absolute inset-0 h-full w-full rounded-xl object-cover transition-opacity"
        format="webp"
        :placeholder="false"
        sizes="100vw sm:50vw md:400px"
        :style="{
          viewTransitionName: isLoaded ? imgAlt(imgSrc) : 'none',
        }"
        quality="100"
        @load="handleLoad"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useImageExpand } from '~/components/ImageExpanded/useImageExpand';

const { imgSrc, resetImgSrc } = useImageExpand();

const zIndexImg = ref<number>(100);
const isLoaded = ref<boolean>(false);

const handleLoad = () => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 200);
  zIndexImg.value = 0;
};
const imgAlt = (img: string): string => {
  return img.split('/').at(-1)?.split('.')[0] || '';
};
const closeImg = () => {
  isLoaded.value = false;

  if (document.startViewTransition) {
    document.startViewTransition(() => {
      resetImgSrc();
    });
  } else {
    resetImgSrc();
  }
};

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    closeImg();
  }
}

watch(imgSrc, () => (isLoaded.value = false));
onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped></style>
