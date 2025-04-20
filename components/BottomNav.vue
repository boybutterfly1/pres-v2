<template>
  <div class="flex h-10 w-full items-center bg-black px-3 text-c-white uppercase">
    <section class="w-1/3">
      <NuxtLink :to="localePath('/')" class="flex cursor-pointer items-center justify-start gap-1">
        <img src="/public/images/logo.webp" width="30" alt="logo" />
        <span class="font-title text-[1rem]">btrfl1</span>
      </NuxtLink>
    </section>
    <nav class="flex w-1/3 items-center justify-center gap-3 text-[0.65rem]">
      <NuxtLink v-for="item in navItems" :key="item.name" :to="localePath(item.to)">
        <button
          class="cursor-pointer rounded-sm bg-neutral-800 p-1 uppercase duration-300 hover:bg-white hover:text-black"
        >
          {{ $t(item.name) }}
        </button>
      </NuxtLink>
    </nav>
    <section class="flex w-1/3 items-center justify-end">
      <span> bebers </span>
    </section>
  </div>
</template>

<script setup lang="ts">
const navItems = [
  { to: '/', name: 'navigation.intro' },
  { to: '/about', name: 'navigation.about' },
  { to: '/stack', name: 'navigation.stack' },
  { to: '/projects', name: 'navigation.projects' },
];

const localePath = useLocalePath();
</script>

<style scoped></style>
