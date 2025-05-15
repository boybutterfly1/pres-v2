<template>
  <div
    @click="closeImg"
    class="absolute top-0 left-0 z-90 flex h-screen w-screen cursor-zoom-out items-center justify-center bg-c-white px-10 py-15"
  >
    <div class="relative flex h-full w-full items-center justify-center">
      <span
        v-if="!isLoaded"
        class="absolute top-1/2 left-1/2 z-100 -translate-x-1/2 -translate-y-1/2 rounded-lg p-5 text-[1rem] text-c-white"
      >
        {{ `[ ${t('utils.loading')} ]` }}
      </span>
      <NuxtImg
        @click.stop
        v-show="!isLoaded"
        :src="imgSrc"
        :alt="`${imgAlt(imgSrc)} image`"
        class="absolute inset-0 h-full w-full cursor-wait rounded-xl object-contain"
        sizes="100vw sm:50vw md:400px"
        format="webp"
        :placeholder="false"
        quality="50"
        :style="{
          viewTransitionName: !isLoaded ? imgAlt(imgSrc) : 'none',
        }"
      />
      <NuxtImg
        @click="closeImg"
        v-show="isLoaded"
        :src="imgSrc"
        :alt="`${imgAlt} image`"
        class="absolute inset-0 h-full w-full cursor-zoom-out rounded-xl object-contain"
        format="webp"
        :placeholder="false"
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
import { useOverflow } from '~/composables/useOverflow';
import { useI18n } from '#imports';

const { t } = useI18n();
const { imgSrc, resetImgSrc } = useImageExpand();
const { resumeScroll } = useOverflow();

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
  resumeScroll();

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

watch(imgSrc, () => {
  isLoaded.value = false;
});
onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped></style>
