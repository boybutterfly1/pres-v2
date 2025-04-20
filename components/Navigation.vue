<template>
    <div
        :class="['appear', { show: isVisible }]"
        class="flex flex-col items-start px-2 z-50 overflow-hidden
           rounded-lg
           w-90 bg-black text-c-white
           border-[0.5px] border-c-white
        "
    >
      <NuxtLink
          v-for="(item, index) in navItems"
          :key="item.name"
          :to="localePath({ name: item.to })"
          @click="scrollToTop"
          :class="{ active: item.to === currentRoute }"
          class="flex px-1 py-[2px] items-center w-full gap-5 cursor-pointer hover:bg-neutral-800"
      >
      <span class="font-main font-light text-[0.5rem]">
        {{ `[00-${index + 1}]` }}
      </span>
        <span class="font-main font-bold tracking-wider uppercase text-[0.65rem]">
        {{ $t(item.name) }}
      </span>
        <Icon name="mdi:arrow-down-right" size="0.7rem" style="margin-left: auto" />
      </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const localePath = useLocalePath()

const navItems = [
  { to: 'index', name: 'navigation.intro' },
  { to: 'about', name: 'navigation.about' },
  { to: 'stack', name: 'navigation.stack' },
  { to: 'projects', name: 'navigation.projects' },
]

const route = useRoute()
const currentRoute = computed(() => {
  const name = route.name?.toString() || ''
  return name.split('___')[0]
})

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 300)
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.appear {
  max-height: 0;
  overflow: hidden;
  transition: max-height 3s ease, padding 0.3s ease;
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
