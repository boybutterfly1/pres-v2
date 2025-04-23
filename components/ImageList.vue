<template>
  <div v-for="(img, index) in imgList" :key="index" class="relative w-full">
    <div
      v-if="!isLoaded[index]"
      class="absolute inset-0 z-10 flex cursor-wait items-center justify-center rounded-md border border-dotted border-c-dark bg-gray-100"
    >
      <span class="text-gray-400">
        {{ `[ ${$t('utils.loading')} ]` }}
      </span>
    </div>
    <LazyNuxtImg
      :src="img"
      :alt="`${imgAlt(img)} image`"
      class="w-full cursor-zoom-in rounded-md object-cover duration-300 hover:scale-102"
      sizes="100vw sm:50vw md:400px"
      format="webp"
      :placeholder="false"
      quality="50"
      loading="lazy"
      @load="handleLoad(index)"
      :style="!imgSrc ? `view-transition-name: ${imgAlt(img)}` : ''"
      @click="expandImage(img)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useImageExpand } from '~/components/ImageExpanded/useImageExpand';
import { useOverflow } from '~/composables/useOverflow';

const { imgSrc, setImgSrc } = useImageExpand();
const { stopScroll } = useOverflow();

defineProps<{
  imgList: string[];
}>();

const isLoaded = ref<boolean[]>([]);

const preloadImage = (src: string) => {
  const img = new Image();
  img.src = src;
};
const imgAlt = (img: string): string => img.split('/').at(-1)?.split('.')[0] || '';
const expandImage = (img: string) => {
  stopScroll();
  preloadImage(img);
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      setImgSrc(img);
    });
  } else {
    setImgSrc(img);
  }
};

const handleLoad = (index: number) => {
  setTimeout(() => {
    isLoaded.value[index] = true;
  }, 1000);
};
</script>

<style scoped></style>
