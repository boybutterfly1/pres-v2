<template>
  <div class="default relative flex h-screen w-full flex-col items-center bg-c-dark">
    <AppHeader class="fixed top-0 left-0 z-50" />
    <Navigation class="fixed top-10 right-3 z-50 hidden md:block" />
    <div
      class="relative mx-auto my-8 flex w-[calc(100%-20px)] flex-col items-center gap-0.5 rounded-xl"
    >
      <NuxtPage />
      <AppFooter />
    </div>
    <BottomNav class="fixed bottom-0 left-0 z-50" />
    <Cursor class="hidden md:block" />
    <!--    <Info />-->
  </div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/AppFooter.vue';
// import Info from '~/components/Info.vue';
</script>

<style scoped></style>
