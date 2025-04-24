<template>
  <RouterFallback />
  <AppHeader class="fixed top-0 left-0 z-50" />
  <Navigation class="fixed top-10 right-3 z-50 hidden md:block" />
  <Cursor class="hidden md:block" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <BottomNav class="fixed bottom-0 left-0 z-50" />
</template>

<script setup lang="ts">
import { useHead, useI18n } from '#imports';
import { watch } from 'vue';
import AppFooter from '~/components/AppFooter.vue';

const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [{ name: 'description', content: 'My presentation website. Creator: @boybutterfly1.' }],
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
