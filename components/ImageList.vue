<template>
  <div v-for="(img, index) in imgList" :key="index" class="relative aspect-[344/191] w-full">
    <div
      v-if="!loaded[index]"
      class="absolute inset-0 z-10 flex items-center justify-center rounded-md border border-dotted border-c-dark bg-gray-100"
    >
      <span class="text-gray-400">Загрузка...</span>
    </div>

    <LazyNuxtImg
      :src="img"
      :alt="`${imgAlt} image`"
      class="h-full w-full rounded-md object-cover transition-opacity duration-500"
      sizes="100vw sm:50vw md:400px"
      format="webp"
      :placeholder="false"
      quality="80"
      loading="lazy"
      :width="344"
      :height="191"
      @load="handleLoad(index)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  imgList: string[];
}>();

const loaded = ref<boolean[]>([]);

const imgAlt = (img: string): string => img.split('/').at(-1)?.split('.')[0] || '';

const handleLoad = (index: number) => {
  loaded.value[index] = true;
};
</script>
