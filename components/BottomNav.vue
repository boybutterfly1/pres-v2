<template>
  <div class="flex h-10 w-full items-center bg-c-dark px-3 text-c-white uppercase">
    <section class="w-1/5">
      <NuxtLink :to="localePath('/')" :aria-label="t('navigation.intro')">
        <button class="flex cursor-pointer items-center justify-start gap-1 uppercase">
          <img src="/public/images/logo.webp" alt="logo" class="aspect-square w-6" />
          <span class="font-title text-[0.8rem] md:text-[1rem]">btrfl1</span>
        </button>
      </NuxtLink>
    </section>
    <nav class="flex w-3/5 items-center justify-center gap-3 text-[0.65rem]">
      <NuxtLink
        prefetch-on="interaction"
        v-for="item in navItems"
        :key="item.name"
        :to="localePath(item.to)"
        :aria-label="t(item.name)"
      >
        <button
          class="cursor-pointer rounded-sm bg-neutral-800 p-1 uppercase duration-300 hover:bg-white hover:text-black"
        >
          {{ t(item.name) }}
        </button>
      </NuxtLink>
    </nav>
    <section class="flex w-1/5 items-center justify-end">
      <span> Some data </span>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLocalePath } from '#i18n';
import { useI18n } from '#imports';

const { t } = useI18n();

const navItems = [
  { to: '/', name: 'navigation.intro' },
  { to: '/about', name: 'navigation.about' },
  { to: '/stack', name: 'navigation.stack' },
  { to: '/projects', name: 'navigation.projects' },
];

const localePath = useLocalePath();
</script>

<style scoped></style>
