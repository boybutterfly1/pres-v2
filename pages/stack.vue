<template>
  <div
    class="about sticky top-8 flex h-[calc(100dvh-4.5rem)] w-full flex-col items-start justify-start overflow-hidden rounded-xl bg-c-white p-4 sm:p-6 md:p-8"
    ref="stackRef"
  >
    <div class="start flex h-full w-full flex-col">
      <h1
        class="mb-10 font-title text-2xl font-bold text-c-dark sm:mb-16 sm:text-3xl md:mb-20 md:text-[3rem]"
      >
        <ScrambledText :text="$t('pageTitle.stack')" />
      </h1>

      <div
        class="scrollbar-hide relative ml-[30%] h-full w-full flex-col overflow-y-scroll py-5"
        style="
          mask-image: linear-gradient(to bottom, transparent, white 10%, white 90%, transparent);
        "
      >
        <div
          v-for="(item, index) in stackList"
          :key="item.name"
          class="flex w-full flex-col gap-2 rounded-sm border-b border-dotted border-b-transparent px-3 py-2 text-c-dark hover:border-b-c-dark hover:bg-neutral-800 hover:text-c-white sm:flex-row sm:gap-5 sm:px-5 sm:py-1.5"
          @mouseenter="setIcon(item.icon)"
          @mouseleave="setIcon('')"
        >
          <span class="mt-0.5 whitespace-nowrap md:text-[0.6rem] lg:text-[0.6rem]">
            {{ `00-3.1.${index + 1}` }}
          </span>
          <span class="text-[1rem] font-black whitespace-nowrap sm:text-[1.1rem] md:text-[1.2rem]">
            {{ item.name }}
          </span>
        </div>
      </div>

      <transition name="fade">
        <Icon
          v-if="currentIcon"
          class="absolute bottom-0 text-c-dark"
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
  { name: 'HTML', icon: 'devicon:html5' },
  { name: 'SCSS', icon: 'vscode-icons:file-type-scss' },
  { name: 'JavaScript', icon: 'skill-icons:javascript' },
  { name: 'TypeScript', icon: 'skill-icons:typescript' },

  { name: 'Vue.js', icon: 'material-icon-theme:vue' },
  { name: 'Pinia', icon: 'logos:pinia' },
  { name: 'Nuxt 3', icon: 'vscode-icons:file-type-nuxt' },
  { name: 'Three.js', icon: 'tabler:brand-threejs' },
  { name: 'ECharts', icon: 'simple-icons:apacheecharts' },

  { name: 'Tailwind', icon: 'vscode-icons:file-type-tailwind' },

  { name: 'Webpack', icon: 'devicon:webpack' },
  { name: 'Vite', icon: 'vscode-icons:file-type-vite' },
  { name: 'Axios', icon: 'devicon-plain:axios' },
  { name: 'i18n', icon: 'material-icon-theme:i18n' },
  { name: 'Eslint', icon: 'devicon:eslint' },

  { name: 'FSD', icon: 'material-symbols:folder-open-rounded' },

  { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
  { name: 'Vercel', icon: 'skill-icons:vercel-light' },

  { name: 'GitHub', icon: 'skill-icons:github-dark' },
];

const isVisible = ref(false);
const currentIcon = ref<string>('');
const setIcon = (icon: string) => {
  currentIcon.value = icon;
};

const { setPending } = useRouterFallback();

const { t } = useI18n();
const stackRef = ref<HTMLElement | null>(null);

useHead({ title: `BTRFL1 ◦ ${t('navigation.stack')}` });

onMounted(() => {
  setPending(false);
  useScrollScale(stackRef.value);

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

.about {
  will-change: transform;
  transition: transform 0.1s ease-out;
}
</style>

<!--<div class="mt-auto ml-auto flex w-full flex-col sm:w-full md:w-2/3">-->
<!--<div-->
<!--  v-for="(item, index) in stackList"-->
<!--  :key="item.name"-->
<!--  class="flex w-full flex-col gap-2 border-b border-dotted border-b-transparent px-3 py-2 text-c-dark hover:border-b-c-dark hover:bg-neutral-800 hover:text-c-white sm:flex-row sm:gap-5 sm:px-5 sm:py-1.5"-->
<!--  @mouseenter="setIcon(item.icon)"-->
<!--  @mouseleave="setIcon('')"-->
<!--&gt;-->
<!--          <span class="mt-0.5 whitespace-nowrap md:text-[0.6rem] lg:text-[0.6rem]">-->
<!--            {{ `00-3.1.${index + 1}` }}-->
<!--          </span>-->
<!--  <span class="text-[1rem] font-black whitespace-nowrap sm:text-[1.1rem] md:text-[1.2rem]">-->
<!--            {{ item.name }}-->
<!--          </span>-->
<!--</div>-->
<!--</div>-->
