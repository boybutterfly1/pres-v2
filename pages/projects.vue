<template>
  <div
    class="w-full px-5  h-fit min-h-[calc(100dvh-4.5rem)] relative py-5 rounded-xl flex flex-col items-start justify-start  overflow-hidden bg-c-white"
  >
    <div class="start flex flex-col h-full w-full relative">
      <h2 class="text-c-dark text-[3rem] font-title font-bold mb-20">
        <ScrambledText :text="$t('pageTitle.projects')"/>
      </h2>
      <div class="grid grid-cols-7 grid-rows-1 gap-x-3 gap-y-10 w-full h-full">
        <div
            v-for="(project, index) in projectsList"
            :key="index"
            class="flex flex-col items-start justify-start w-full gap-2"
        >
          <span class="text-c-dark font-main font-bold tracking-wider uppercase text-[0.65rem]">
            {{ `[ ${project.name} ]` }}
          </span>
          <div class="flex flex-col items-start justify-start gap-2">
            <img
                v-for="(img, index) in project.imgList"
                :key="index"
               :src="img" :alt="project.name + 'image'"
                class="w-full rounded-sm"
            >
          </div>
          <span class="text-c-dark">
            {{ project.description }}
          </span>
          <span class="text-c-dark font-bold text-[0.65rem]">
            {{ project.stack }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouterFallback} from "~/components/RouterFallback/useRouterFallback";
import {ref} from "vue";

const { setPending } = useRouterFallback()

const projectsList = [
  {
    name: 'DEXFOLIO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum,' +
        ' sagittis odio vitae, dapibus nisi. Nulla et malesuada diam. Fusce vestibulum ipsum a.',
    stack: "Vue 3, Nuxt 3, Webpack, Module Federation, Vite, Pinia, i18n, JavaScript, TypeScript, Firebase(Auth, Database), Axios, Echarts",
    imgList: ['/images/projects/dexfolio1.png', '/images/projects/dexfolio2.png'],
  },
  {
    name: 'Soljuh Map',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum',
    stack: "Vue 3, Pinia, TypeScript, Axios, Websocket, Canvas",
    imgList: ['/images/projects/soljuh1.png']
  },
  {
    name: 'kanban',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum',
    stack: "Vue 3, Pinia, JavaScript, TypeScript",
    imgList: ['/images/projects/kanban.png']
  },
  {
    name: 'jonesy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum,' +
        ' sagittis odio vitae, dapibus nisi. Nulla et malesuada diam. Fusce vestibulum ipsum a.',
    stack: "Vue 3, JavaScript, TypeScript, Axios, THREE.js",
    imgList: ['/images/projects/jonesy1.png', '/images/projects/jonesy2.png']
  },
  {
    name: 'The Local Star',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum, sagittis odio vitae, dapibus nisi. ',
    stack: "Nuxt 3, TypeScript",
    imgList: ['/images/projects/tls1.png']
  },
  {
    name: 'arabcat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum',
    stack: "Vue 3, i18n, TypeScript, Axios",
    imgList: ['/images/projects/arabcat1.png', '/images/projects/arabcat2.png']
  },
  {
    name: 'Jungle',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum,' +
        ' sagittis odio vitae, dapibus nisi. Nulla et malesuada diam. Fusce vestibulum ipsum a.',
    stack: "Vue 3, JavaScript, TypeScript, Axios, MongoDB",
    imgList: ['/images/projects/jungle1.png', '/images/projects/jungle2.png']
  },
  {
    name: 'Presentation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula condimentum,' +
        ' sagittis odio vitae, dapibus nisi. Nulla et malesuada diam. Fusce vestibulum ipsum a.',
    stack: "Nuxt 3, TypeScript, i18n, Tailwind, Pixi.js, Three.js",
    imgList: ['/images/projects/pres1.png', '/images/projects/pres2.png']
  },
]


useHead({title: 'BBTRFL1 ◦ Projects'})
onMounted(() => {
  setPending(false)
})
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