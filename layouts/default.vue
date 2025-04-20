<template>
  <div class="relative flex h-screen w-screen flex-col items-center bg-black">
    <AppHeader class="fixed top-0 left-0 z-50" />
    <Navigation class="fixed top-10 right-3 z-50" />
    <div
      class="relative mx-auto my-8 flex w-[calc(100%-20px)] flex-col items-center gap-0.5 rounded-xl"
    >
      <RouterFallback />
      <NuxtPage />
      <AppFooter />
    </div>
    <BottomNav class="fixed bottom-0 left-0 z-50" />
    <Cursor />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/AppFooter.vue';
</script>

<style scoped></style>
