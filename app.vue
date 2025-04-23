<template>
  <RouterFallback />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useHead, useI18n } from '#imports';
import { watch } from 'vue';

const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
});

watch(locale, (newLocale) => {
  useHead({
    htmlAttrs: {
      lang: newLocale,
    },
  });
});
</script>

<style scoped></style>
