<template>
<!--  <ThemeContainer/>-->
  <div class="bg-black w-screen h-screen flex flex-col items-center relative">
    <AppHeader class="fixed left-0 top-0 z-50"/>
    <Navigation class="fixed right-3 top-10 z-50"/>
    <div class="flex flex-col gap-0.5 items-center  w-[calc(100%-20px)] mx-auto my-8 rounded-xl relative">
      <RouterFallback/>
      <NuxtPage/>
      <AppFooter/>
    </div>
    <BottomNav class="fixed left-0 bottom-0 z-50"/>
    <Cursor/>
  </div>
</template>

<script setup lang="ts">
import ThemeContainer from "~/components/ThemeContainer.vue";
import AppFooter from "~/components/AppFooter.vue";
</script>

<style scoped>
</style>

