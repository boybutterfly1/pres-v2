<template>
  <div
    class="projects sticky top-8 flex h-[calc(100dvh-4.5rem)] w-full flex-col items-start justify-start overflow-hidden rounded-xl bg-c-white"
    ref="projectsRef"
  >
    <div class="start relative flex h-full w-full flex-col">
      <div
        class="scrollbar-hide scroll-container relative h-full w-full flex-col items-start overflow-y-scroll px-4 text-c-dark sm:px-6 md:px-8"
      >
        <div class="scrolled-block" />
        <h1
          class="mt-4 mb-5 font-title text-2xl font-bold text-c-dark sm:mt-6 sm:mb-14 sm:text-3xl md:mt-8 md:mb-20 md:text-[3rem]"
        >
          <ScrambledText :text="$t('pageTitle.projects')" />
        </h1>
        <div
          v-for="project in projectsList"
          :key="project.name"
          class="scrolled-block project mb-4 grid w-full grid-cols-2 sm:mb-6 md:mb-8 md:w-2/3"
        >
          <div class="flex flex-col gap-3 p-2">
            <LazyNuxtImg
              v-for="(img, index) in project.imgList"
              :key="index"
              :src="img"
              :alt="`${project.name} image`"
              class="w-full rounded-md object-cover"
              format="webp"
              size="100%"
              :placeholder="true"
              quality="70"
              loading="lazy"
            />
          </div>
          <div class="sticky top-10 ml-3 flex h-fit flex-col p-2">
            <div class="mb-8 flex items-start gap-1.5">
              <span class="mt-1">{{ $t('projectsPage.title') }}</span>
              <h2 class="font-title text-xl font-bold">[ {{ project.name }} ]</h2>
            </div>

            <div class="flex items-start gap-1.5">
              <span class="mt-0.5">{{ $t('projectsPage.technology') }}</span>
              <h3 class="mb-3 text-[0.85rem] font-bold">{{ $t('projectsPage.stack') }}</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="item in project.stack.split(',')"
                :key="item"
                class="rounded-sm border border-c-dark bg-c-dark px-1.5 py-1 text-xs text-c-white"
              >
                {{ item }}
              </span>
            </div>
          </div>
          <div class="col-start-1 flex flex-col p-2">
            <span>{{ $t('projectsPage.description') }}</span>
            <p class="text-xs">{{ project.description }}</p>
          </div>
          <div class="col-start-1 flex flex-col p-2">
            <span>{{ $t('projectsPage.whatIDid') }}</span>
            <ul>
              <li
                v-for="(string, index) in project.whatIDid"
                :key="index"
                class="ml-3.5 list-disc text-xs"
              >
                {{ string }}
              </li>
            </ul>
          </div>
        </div>
        <div class="scrolled-block" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouterFallback } from '~/components/RouterFallback/useRouterFallback';
import { onMounted, ref } from 'vue';
import { useHead, useI18n, useScrollScale } from '#imports';

const { t } = useI18n();
const { setPending } = useRouterFallback();

const projectsRef = ref<HTMLElement | null>(null);

const projectsList = [
  {
    name: 'DEXFOLIO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum,' +
      ' sagittis odio vitae, dapibus nisi. Nulla et malesuada diam. Fusce vestibulum ipsum a.',
    whatIDid: [
      'Реализовал модульную архитектуру с использованием Composition API и TypeScript.',
      'Настроил динамическую загрузку данных с DEX через Web3-интеграции.',
      'Имплементировал кастомные графики с ECharts и удобные фильтры для портфеля.',
      'Использовал Tailwind для адаптивной вёрстки и быстрой стилизации компонентов.',
      'Настроил глобальное состояние через Pinia, включая сохранение предпочтений пользователя.',
      'Обеспечил SSR и оптимизацию загрузки с помощью Vite + Nuxt.',
    ],
    stack:
      'Vue 3, Nuxt 3, Webpack, Module Federation, Vite, Pinia, i18n, JavaScript, TypeScript, Firebase(Auth & Database), Axios, Echarts',
    imgList: ['/images/projects/dexfolio1.png', '/images/projects/dexfolio2.png'],
  },
  {
    name: 'Soljuh Map',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum',
    whatIDid: [
      'Реализовал модульную архитектуру с использованием Composition API и TypeScript.',
      'Настроил динамическую загрузку данных с DEX через Web3-интеграции.',
      'Имплементировал кастомные графики с ECharts и удобные фильтры для портфеля.',
      'Использовал Tailwind для адаптивной вёрстки и быстрой стилизации компонентов.',
      'Настроил глобальное состояние через Pinia, включая сохранение предпочтений пользователя.',
      'Обеспечил SSR и оптимизацию загрузки с помощью Vite + Nuxt.',
    ],
    stack: 'Vue 3, Pinia, TypeScript, Axios, Websocket, Canvas',
    imgList: ['/images/projects/soljuh1.png'],
  },
  {
    name: 'kanban',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum',
    whatIDid: [
      'Реализовал модульную архитектуру с использованием Composition API и TypeScript.',
      'Настроил динамическую загрузку данных с DEX через Web3-интеграции.',
      'Имплементировал кастомные графики с ECharts и удобные фильтры для портфеля.',
      'Использовал Tailwind для адаптивной вёрстки и быстрой стилизации компонентов.',
      'Настроил глобальное состояние через Pinia, включая сохранение предпочтений пользователя.',
      'Обеспечил SSR и оптимизацию загрузки с помощью Vite + Nuxt.',
    ],
    stack: 'Vue 3, Pinia, JavaScript, TypeScript',
    imgList: ['/images/projects/kanban.png'],
  },
  {
    name: 'jonesy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum,' +
      ' sagittis odio vitae, dapibus nisi. Nulla et malesuada diam. Fusce vestibulum ipsum a.',
    whatIDid: [
      'Реализовал модульную архитектуру с использованием Composition API и TypeScript.',
      'Настроил динамическую загрузку данных с DEX через Web3-интеграции.',
      'Имплементировал кастомные графики с ECharts и удобные фильтры для портфеля.',
      'Использовал Tailwind для адаптивной вёрстки и быстрой стилизации компонентов.',
      'Настроил глобальное состояние через Pinia, включая сохранение предпочтений пользователя.',
      'Обеспечил SSR и оптимизацию загрузки с помощью Vite + Nuxt.',
    ],
    stack: 'Vue 3, JavaScript, TypeScript, Axios, THREE.js',
    imgList: ['/images/projects/jonesy1.png', '/images/projects/jonesy2.png'],
  },
  {
    name: 'The Local Star',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum, sagittis odio vitae, dapibus nisi. ',
    whatIDid: [
      'Реализовал модульную архитектуру с использованием Composition API и TypeScript.',
      'Настроил динамическую загрузку данных с DEX через Web3-интеграции.',
      'Имплементировал кастомные графики с ECharts и удобные фильтры для портфеля.',
      'Использовал Tailwind для адаптивной вёрстки и быстрой стилизации компонентов.',
      'Настроил глобальное состояние через Pinia, включая сохранение предпочтений пользователя.',
      'Обеспечил SSR и оптимизацию загрузки с помощью Vite + Nuxt.',
    ],
    stack: 'Nuxt 3, TypeScript',
    imgList: ['/images/projects/tls1.png'],
  },
  {
    name: 'arabcat',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum',
    whatIDid: [
      'Реализовал модульную архитектуру с использованием Composition API и TypeScript.',
      'Настроил динамическую загрузку данных с DEX через Web3-интеграции.',
      'Имплементировал кастомные графики с ECharts и удобные фильтры для портфеля.',
      'Использовал Tailwind для адаптивной вёрстки и быстрой стилизации компонентов.',
      'Настроил глобальное состояние через Pinia, включая сохранение предпочтений пользователя.',
      'Обеспечил SSR и оптимизацию загрузки с помощью Vite + Nuxt.',
    ],
    stack: 'Vue 3, i18n, TypeScript, Axios',
    imgList: ['/images/projects/arabcat1.png', '/images/projects/arabcat2.png'],
  },
  {
    name: 'Jungle',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum,' +
      ' sagittis odio vitae, dapibus nisi. Nulla et malesuada diam. Fusce vestibulum ipsum a.',
    whatIDid: [
      'Реализовал модульную архитектуру с использованием Composition API и TypeScript.',
      'Настроил динамическую загрузку данных с DEX через Web3-интеграции.',
      'Имплементировал кастомные графики с ECharts и удобные фильтры для портфеля.',
      'Использовал Tailwind для адаптивной вёрстки и быстрой стилизации компонентов.',
      'Настроил глобальное состояние через Pinia, включая сохранение предпочтений пользователя.',
      'Обеспечил SSR и оптимизацию загрузки с помощью Vite + Nuxt.',
    ],
    stack: 'Vue 3, JavaScript, TypeScript, Axios, MongoDB',
    imgList: ['/images/projects/jungle1.png', '/images/projects/jungle2.png'],
  },
];

function initObserver(): void {
  const projects = document.querySelectorAll<HTMLImageElement>('.project');

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
  };

  const callback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement;
        image.classList.add('project--visible');
        observer.unobserve(image);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  projects.forEach((project) => {
    observer.observe(project);
  });
}

useHead({ title: `BTRFL1 ◦ ${t('navigation.projects')}` });
onMounted(() => {
  setPending(false);
  useScrollScale(projectsRef.value);
  initObserver();
});
</script>

<style scoped>
.project {
  opacity: 0;
  filter: blur(10px);
  will-change: opacity, filter;
  transition:
    opacity 0.5s,
    filter 0.5s;
}
.project--visible {
  opacity: 1;
  filter: blur(0);
}
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
</style>
