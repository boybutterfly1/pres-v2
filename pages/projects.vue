<template>
  <div
    class="projects sticky top-8 flex h-[calc(100dvh-4.5rem)] w-full flex-col items-start justify-start overflow-hidden rounded-xl bg-c-white p-4 sm:p-6 md:p-8"
    ref="projectsRef"
  >
    <div class="start relative flex h-full w-full flex-col">
      <h2
        class="mb-10 font-title text-2xl font-bold text-c-dark sm:mb-14 sm:text-3xl md:mb-20 md:text-[3rem]"
      >
        <ScrambledText :text="$t('pageTitle.projects')" />
      </h2>

      <div
        class="scrollbar-hide relative h-full w-full flex-col overflow-y-scroll"
        style="
          mask-image: linear-gradient(to bottom, transparent, white 10%, white 90%, transparent);
        "
      >
        <div
          class="grid h-full w-full grid-cols-1 gap-y-8 py-10 pb-20 sm:grid-cols-2 sm:gap-x-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7"
        >
          <div
            v-for="(project, index) in projectsList"
            :key="index"
            class="flex w-full flex-col items-start justify-start gap-2"
          >
            <span
              class="font-main text-[0.7rem] font-bold tracking-wider text-c-dark uppercase sm:text-[0.85rem]"
            >
              {{ `[ ${project.name} ]` }}
            </span>

            <div class="flex w-full flex-col items-start justify-start gap-2">
              <img
                v-for="(img, index) in project.imgList"
                :key="index"
                :src="img"
                :alt="project.name + 'image'"
                class="w-full max-w-full rounded-sm object-cover"
              />
            </div>

            <span class="text-[0.6rem] text-c-dark sm:text-[0.7rem] md:text-[0.8rem]">
              {{ project.description }}
            </span>

            <span class="text-[0.6rem] font-bold text-c-dark sm:text-[0.7rem] md:text-[0.8rem]">
              {{ project.stack }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouterFallback } from '~/components/RouterFallback/useRouterFallback';

const { setPending } = useRouterFallback();

const projectsList = [
  {
    name: 'DEXFOLIO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum,' +
      ' sagittis odio vitae, dapibus nisi. Nulla et malesuada diam. Fusce vestibulum ipsum a.',
    stack:
      'Vue 3, Nuxt 3, Webpack, Module Federation, Vite, Pinia, i18n, JavaScript, TypeScript, Firebase(Auth, Database), Axios, Echarts',
    imgList: ['/images/projects/dexfolio1.png', '/images/projects/dexfolio2.png'],
  },
  {
    name: 'Soljuh Map',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum',
    stack: 'Vue 3, Pinia, TypeScript, Axios, Websocket, Canvas',
    imgList: ['/images/projects/soljuh1.png'],
  },
  {
    name: 'kanban',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum',
    stack: 'Vue 3, Pinia, JavaScript, TypeScript',
    imgList: ['/images/projects/kanban.png'],
  },
  {
    name: 'jonesy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum,' +
      ' sagittis odio vitae, dapibus nisi. Nulla et malesuada diam. Fusce vestibulum ipsum a.',
    stack: 'Vue 3, JavaScript, TypeScript, Axios, THREE.js',
    imgList: ['/images/projects/jonesy1.png', '/images/projects/jonesy2.png'],
  },
  {
    name: 'The Local Star',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum, sagittis odio vitae, dapibus nisi. ',
    stack: 'Nuxt 3, TypeScript',
    imgList: ['/images/projects/tls1.png'],
  },
  {
    name: 'arabcat',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum',
    stack: 'Vue 3, i18n, TypeScript, Axios',
    imgList: ['/images/projects/arabcat1.png', '/images/projects/arabcat2.png'],
  },
  {
    name: 'Jungle',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum,' +
      ' sagittis odio vitae, dapibus nisi. Nulla et malesuada diam. Fusce vestibulum ipsum a.',
    stack: 'Vue 3, JavaScript, TypeScript, Axios, MongoDB',
    imgList: ['/images/projects/jungle1.png', '/images/projects/jungle2.png'],
  },
];
const projectsRef = ref<HTMLElement | null>(null);

const { t } = useI18n();

useHead({ title: `BTRFL1 ◦ ${t('navigation.projects')}` });
onMounted(() => {
  setPending(false);
  useScrollScale(projectsRef.value);
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
</style>
