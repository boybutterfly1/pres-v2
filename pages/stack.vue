<template>
  <div
    class="relative flex h-fit min-h-[calc(100dvh-4.5rem)] w-full flex-col items-start justify-start overflow-hidden rounded-xl bg-c-white py-5"
  >
    <div class="start relative flex h-full w-full flex-col">
      <h2 class="px-5 font-title text-[3rem] font-bold text-c-dark">
        <ScrambledText :text="$t('pageTitle.stack')" />
      </h2>

      <div class="mt-auto ml-auto flex w-2/3 flex-col">
        <div
          :class="['appear', { show: isVisible }]"
          v-for="(item, index) in stackList"
          :key="item.name"
          class="w-ful l relative flex gap-5 border-b border-dotted border-b-transparent px-5 py-1.5 text-c-dark hover:border-b-c-dark hover:bg-neutral-800 hover:text-c-white"
          @mouseenter="setIcon(item.icon)"
          @mouseleave="setIcon('')"
        >
          <span class="mt-1 text-[0.45rem]">
            {{ `00-3.1.${index + 1}` }}
          </span>
          <span class="text-[1rem] font-black">{{ item.name }}</span>
          <span class="ml-auto text-right"
            >Lorem ipsum dolo Lorem ipsum dolores Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut.</span
          >
        </div>
      </div>
      <transition name="fade">
        <Icon
          v-if="currentIcon"
          class="absolute bottom-3 left-5 text-c-dark"
          :name="currentIcon"
          size="5rem"
        />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouterFallback } from '~/components/RouterFallback/useRouterFallback';
import { ref } from 'vue';

const stackList = [
  { name: 'JavaScript', icon: 'skill-icons:javascript' },
  { name: 'TypeScript', icon: 'skill-icons:typescript' },
  { name: 'Webpack', icon: 'devicon:webpack' },
  { name: 'Axios', icon: 'devicon-plain:axios' },
  { name: 'Vite', icon: 'vscode-icons:file-type-vite' },
  { name: 'Vue.js', icon: 'material-icon-theme:vue' },
  { name: 'Pinia', icon: 'logos:pinia' },
  { name: 'Nuxt 3', icon: 'vscode-icons:file-type-nuxt' },
  { name: 'HTML', icon: 'devicon:html5' },
  { name: 'SCSS', icon: 'vscode-icons:file-type-scss' },
  { name: 'FSD', icon: 'material-symbols:folder-open-rounded' },
  { name: 'i18n', icon: 'material-icon-theme:i18n' },
  { name: 'Tailwind', icon: 'vscode-icons:file-type-tailwind' },
  { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
  { name: 'GitHub', icon: 'skill-icons:github-dark' },
  { name: 'Eslint', icon: 'devicon:eslint' },
  { name: 'Vercel', icon: 'skill-icons:vercel-light' },
  { name: 'Three.js', icon: 'tabler:brand-threejs' },
  { name: 'ECharts', icon: 'simple-icons:apacheecharts' },
];

const isVisible = ref(false);
const currentIcon = ref<string>('');
const setIcon = (icon: string) => {
  currentIcon.value = icon;
};

const { setPending } = useRouterFallback();

useHead({ title: 'BBTRFL1 ◦ Stack' });
onMounted(() => {
  setPending(false);

  setTimeout(() => {
    isVisible.value = true;
  }, 300);
});
</script>

<style scoped>
.start {
  animation: zoomOut 0.6s ease-out forwards;
}
@keyframes zoomOut {
  0% {
    scale: 1.2;
    filter: blur(5rem);
  }
  100% {
    scale: 1;
    filter: blur(0);
  }
}

.appear {
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 6s ease,
    padding 0.3s ease;
  padding-top: 0;
  padding-bottom: 0;
}

.appear.show {
  max-height: 1000px;
  padding: 6px 0;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.1s ease,
    filter 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(10px);
}
</style>
