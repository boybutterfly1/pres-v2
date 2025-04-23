<template>
  <div class="relative flex h-screen w-full flex-col items-center bg-c-dark">
    <div
      class="relative mx-auto my-8 flex w-[calc(100%-20px)] flex-col items-center gap-0.5 rounded-xl"
    >
      <NuxtPage />
      <AppFooter />
    </div>
  </div>

  <ImageExpanded v-if="imgSrc" />
</template>

<script setup lang="ts">
import AppFooter from '~/components/AppFooter.vue';
import { useImageExpand } from '~/components/ImageExpanded/useImageExpand';
const { imgSrc } = useImageExpand();
</script>

<style scoped></style>
