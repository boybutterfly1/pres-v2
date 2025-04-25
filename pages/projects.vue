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
          class="mt-4 mb-10 font-title text-2xl font-bold text-c-dark sm:mt-6 sm:text-3xl md:mt-8 md:text-[3rem]"
        >
          <ScrambledText :text="$t('pageTitle.projects')" />
        </h1>
        <div
          v-for="project in projectsList"
          :key="project.name"
          class="scrolled-block project mb-4 grid w-full grid-cols-2 pt-10 sm:mb-6 md:mb-8 md:w-2/3"
        >
          <div class="flex flex-col gap-3 p-2">
            <ImageList :img-list="project.imgList" />
          </div>
          <div
            class="right-side sticky top-10 col-start-2 row-start-1 row-end-3 ml-3 flex h-fit flex-col p-2"
          >
            <div class="mb-8 flex flex-col items-start gap-1.5">
              <span class="mt-1">{{ $t('projectsPage.title') }}</span>
              <div class="flex items-center gap-2">
                <h2 class="font-title text-xl font-bold">[ {{ project.name }} ]</h2>
                <a :href="project.link" target="_blank">
                  <Icon
                    name="iconamoon:link-external"
                    size="1.2rem"
                    class="cursor-pointer duration-300 hover:scale-130"
                  />
                </a>
                <a v-if="project.github" :href="project.github" target="_blank">
                  <Icon
                    name="mdi:github-box"
                    size="1.3rem"
                    class="cursor-pointer duration-300 hover:scale-130"
                  />
                </a>
              </div>
            </div>
            <div class="flex flex-col items-start gap-1.5">
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
            <p class="text-xs">{{ $t(project.description) }}</p>
          </div>
          <div class="col-start-1 flex flex-col p-2">
            <span>{{ $t('projectsPage.whatIDid') }}</span>
            <ul class="flex flex-col gap-1">
              <li
                v-for="(string, index) in project.whatIDid"
                :key="index"
                class="ml-3.5 list-disc text-xs"
              >
                {{ $t(string) }}
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
import ImageList from '~/components/ImageList.vue';

const { t } = useI18n();
const { setPending } = useRouterFallback();

const projectsRef = ref<HTMLElement | null>(null);

const projectsList = [
  {
    name: 'Presentation',
    link: 'https://boybutterfly1.vercel.app',
    github: 'https://github.com/boybutterfly1/pres-v2',
    description: 'projectsPage.presentation.description',
    whatIDid: [
      'projectsPage.presentation.whatIDid.line1',
      'projectsPage.presentation.whatIDid.line2',
      'projectsPage.presentation.whatIDid.line3',
      'projectsPage.presentation.whatIDid.line4',
      'projectsPage.presentation.whatIDid.line5',
      'projectsPage.presentation.whatIDid.line6',
    ],
    stack: 'Nuxt 3, Tailwind, i18n, TypeScript, Three.js, Pixi.js',
    imgList: ['/images/projects/pres1.png'],
  },
  {
    name: 'DEXFOLIO',
    link: 'https://host-eta-ten.vercel.app/wallet-tracker',
    github: 'https://github.com/boybutterfly1/dexfolio2.0',
    description: 'projectsPage.dexfolio.description',
    whatIDid: [
      'projectsPage.dexfolio.whatIDid.line2',
      'projectsPage.dexfolio.whatIDid.line3',
      'projectsPage.dexfolio.whatIDid.line4',
      'projectsPage.dexfolio.whatIDid.line5',
      'projectsPage.dexfolio.whatIDid.line6',
      'projectsPage.dexfolio.whatIDid.line7',
      'projectsPage.dexfolio.whatIDid.line8',
      'projectsPage.dexfolio.whatIDid.line9',
      'projectsPage.dexfolio.whatIDid.line10',
      'projectsPage.dexfolio.whatIDid.line11',
      'projectsPage.dexfolio.whatIDid.line12',
      'projectsPage.dexfolio.whatIDid.line13',
      'projectsPage.dexfolio.whatIDid.line14',
      'projectsPage.dexfolio.whatIDid.line15',
    ],
    stack:
      'Vue 3, Nuxt 3, FSD, Webpack, Module Federation, Vite, Pinia, i18n, JavaScript, TypeScript, Firebase(Auth & Database), Axios, Echarts',
    imgList: ['/images/projects/dexfolio1.png', '/images/projects/dexfolio2.png'],
  },
  {
    name: 'Soljuh Map',
    link: 'https://soljuh-recon.vercel.app/',
    github: null,
    description: 'projectsPage.soljuh.description',
    whatIDid: [
      'projectsPage.soljuh.whatIDid.line1',
      'projectsPage.soljuh.whatIDid.line2',
      'projectsPage.soljuh.whatIDid.line4',
      'projectsPage.soljuh.whatIDid.line5',
      'projectsPage.soljuh.whatIDid.line6',
    ],
    stack: 'Vue 3, Pinia, TypeScript, Axios, Websocket, Canvas',
    imgList: ['/images/projects/soljuh1.png'],
  },
  {
    name: 'kanban',
    link: 'https://kanban-theta-opal.vercel.app/',
    github: null,
    description: 'projectsPage.kanban.description',
    whatIDid: ['projectsPage.kanban.whatIDid.line1', 'projectsPage.kanban.whatIDid.line2'],
    stack: 'Vue 3, Pinia, JavaScript, TypeScript',
    imgList: ['/images/projects/kanban.png'],
  },
  {
    name: 'jonesy',
    link: 'https://www.jonesy.meme/',
    github: null,
    description: 'projectsPage.jonesy.description',
    whatIDid: [
      'projectsPage.jonesy.whatIDid.line1',
      'projectsPage.jonesy.whatIDid.line3',
      'projectsPage.jonesy.whatIDid.line4',
    ],
    stack: 'Vue 3, JavaScript, TypeScript, Axios, THREE.js',
    imgList: ['/images/projects/jonesy1.png', '/images/projects/jonesy2.png'],
  },
  {
    name: 'The Local Star',
    link: 'https://tls-vue3.vercel.app/',
    github: null,
    description: 'projectsPage.tls.description',
    whatIDid: ['projectsPage.tls.whatIDid.line1'],
    stack: 'Nuxt 3, TypeScript',
    imgList: ['/images/projects/tls1.png'],
  },
  // {
  //   name: 'arabcat',
  //   description: '',
  //   whatIDid: [],
  //   stack: 'Vue 3, i18n, TypeScript, Axios',
  //   imgList: ['/images/projects/arabcat1.png', '/images/projects/arabcat2.png'],
  // },
  // {
  //   name: 'Jungle',
  //   description: '',
  //   whatIDid: [],
  //   stack: 'Vue 3, JavaScript, TypeScript, Axios, MongoDB',
  //   imgList: ['/images/projects/jungle1.png', '/images/projects/jungle2.png'],
  // },
];

function initObserver(): void {
  const projects = document.querySelectorAll<HTMLImageElement>('.project');

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
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
  will-change: opacity, filter;
  transition:
    opacity 0.5s,
    filter 0.5s;
}
.project--visible {
  opacity: 1;
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
