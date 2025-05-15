<template>
  <div
    :class="['appear', { show: isVisible }]"
    class="z-50 flex w-90 flex-col items-start overflow-hidden rounded-lg border-[0.5px] border-c-white bg-c-dark px-2 text-c-white"
  >
    <NuxtLink
      prefetch-on="interaction"
      v-for="(item, index) in navItems"
      :key="item.name"
      :to="localePath({ name: item.to })"
      :aria-label="t(item.name)"
      @click="scrollToTop"
      :class="{ active: item.to === currentRoute }"
      class="flex w-full cursor-pointer items-center gap-5 px-1 py-[2px] hover:bg-neutral-800"
    >
      <span class="font-main text-[0.5rem] font-light">
        {{ `[00-${index + 1}]` }}
      </span>
      <span class="font-main text-[0.65rem] font-bold tracking-wider uppercase">
        {{ t(item.name) }}
      </span>
      <Icon name="mdi:arrow-down-right" size="0.7rem" style="margin-left: auto" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useLocalePath } from '#i18n';
import { useI18n } from '#imports';

const { t } = useI18n();
const localePath = useLocalePath();

const navItems = [
  { to: 'index', name: 'navigation.intro' },
  { to: 'about', name: 'navigation.about' },
  { to: 'stack', name: 'navigation.stack' },
  { to: 'projects', name: 'navigation.projects' },
];

const route = useRoute();
const currentRoute = computed(() => {
  const name = route.name?.toString() || '';
  return name.split('___')[0];
});

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 300);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
.appear {
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 3s ease,
    padding 0.3s ease;
  padding-top: 0;
  padding-bottom: 0;
}

.appear.show {
  max-height: 1000px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.active {
  background-color: white;
  color: black;
}
</style>
