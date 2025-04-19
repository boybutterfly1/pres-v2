<template>
  <div class="w-full h-fit min-h-[calc(100dvh-4.5rem)] py-5 rounded-xl flex flex-col items-start justify-start  overflow-hidden bg-c-white">
    <h2 class="px-5 text-c-dark text-[3rem] font-title font-bold">
      <ScrambledText text="MY TECHNOLOGY STACK"/>
    </h2>
    <div class="flex flex-col gap-3 mt-auto w-full">
      <div
          v-for="(item, index) in stackList"
          :key="item.name"
          class="flex gap-5 px-5 relative border-b border-dotted text-c-dark  border-b-transparent hover:border-b-c-dark hover:bg-neutral-800 hover:text-c-white"
          @mouseenter="iconSize = 2"
          @mouseleave="iconSize = 2"
      >
        <span class="mt-1 text-[0.45rem]">
          {{ `00-3.1.${index + 1}` }}
        </span>
        <span class= "font-black text-[1rem]">{{ item.name }}</span>
        <span class= "text-right ml-auto">Lorem ipsum dolo Lorem ipsum dolores Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</span>
        <Icon :name="item.icon" :size="`${0}rem`" class="duration-300 absolute top-1/2 left-[120%] -translate-y-1/2 "/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouterFallback} from "~/components/RouterFallback/useRouterFallback";
const iconSize = ref<number>(0)

const stackList = [
  {name: 'JavaScript', icon: 'skill-icons:javascript'},
  {name: 'TypeScript', icon: 'skill-icons:typescript'},
  {name: 'Webpack', icon: 'devicon:webpack'},
  {name: 'Axios', icon: 'devicon-plain:axios'},
  {name: 'Vite', icon: 'vscode-icons:file-type-vite'},
  {name: 'Vue.js', icon: 'material-icon-theme:vue'},
  {name: 'Pinia', icon: 'logos:pinia'},
  {name: 'Nuxt', icon: 'vscode-icons:file-type-nuxt'},
  {name: 'HTML', icon: 'devicon:html5'},
  {name: 'SCSS', icon: 'vscode-icons:file-type-scss'},
  {name: 'FSD', icon: 'material-symbols:check-circle-outline-rounded'},
  {name: 'i18n', icon: 'material-icon-theme:i18n'},
  {name: 'Tailwind', icon: 'vscode-icons:file-type-tailwind'},
  {name: 'Firebase', icon: 'vscode-icons:file-type-firebase'},
  {name: 'GitHub', icon: 'skill-icons:github-dark'},
  {name: 'Esliint', icon: 'devicon:eslint'},
  {name: 'Vercel', icon: 'skill-icons:vercel-light'},
  {name: 'Three.js', icon: 'tabler:brand-threejs'},
  {name: 'ECharts', icon: 'simple-icons:apacheecharts'},
]

const { setPending } = useRouterFallback()

useHead({title: 'BBTRFL1 ◦ Stack'})
onMounted(() => {
  setPending(false)
})
</script>

<style scoped>

</style>