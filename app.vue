<template>
  <RouterFallback />
  <AppHeader class="fixed top-0 left-0 z-50" />
  <Navigation class="fixed top-10 right-3 z-50 hidden md:block" />
  <Cursor class="hidden md:block" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <BottomNav class="fixed bottom-0 left-0 z-50" />
  <ClientOnly>
    <Analytics v-if="isGuest" />
  </ClientOnly>
</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';
import { useHead, useI18n } from '#imports';
import { onMounted, ref, watch } from 'vue';

const { locale } = useI18n();

const isGuest = ref<boolean>(false);

const checkGuest = () => {
  const flag: string | null = localStorage.getItem('isGuest');

  if (flag) {
    isGuest.value = JSON.parse(flag);
  } else isGuest.value = true;
};

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [{ name: 'description', content: 'My presentation website. Creator: @btrfly11.' }],
});
onMounted(() => checkGuest());
watch(locale, (newLocale) => {
  useHead({
    htmlAttrs: {
      lang: newLocale,
    },
  });
});
</script>

<style scoped></style>
