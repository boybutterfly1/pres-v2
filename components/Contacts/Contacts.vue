<template>
  <div
      class="w-full grid grid-cols-3 grid-rows-2 gap-[1px] overflow-hidden rounded-sm relative p-[1px] bg-neutral-900"
      :class="{ highlighted : isHighlighted }"
      id="contactsBlock"
  >
    <div
        ref="lightCircle"
        class="z-10 w-1/3 aspect-square rounded-full duration-100 ease-linear  absolute pointer-events-none"
        :style="{
          transform: `translate(${lightCirclePosition.x}px, ${lightCirclePosition.y}px)`,
          background: `radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)`,
        }"
    />

    <a
        v-for="item in contactLinks"
        :key="item.title"
        :href="item.href"
        target="_blank"
        class="z-11 rounded-sm cursor-pointer py-1 px-3 uppercase bg-c-dark hover:bg-neutral-800 "
    >
      <div class="w-full flex gap-1 items-center">
        <span class="text-[0.65rem]">{{ item.title }}</span>
        <Icon :name="item.iconName" size="0.7rem"/>
        <Icon name="material-symbols:arrow-outward" size="0.7rem" style="margin-left: auto"/>
      </div>
      <span class="text-neutral-500">{{ item.description }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import {useContacts} from "~/components/Contacts/useContacts";

const { isHighlighted } = useContacts()


const contactLinks = [
  {title: 'Github', description: '/boybutterfly1', href: 'https://github.com/boybutterfly1', iconName: 'mdi:github-box'},
  {title: 'Telegram', description: '@boybutterfly1', href: ':', iconName: 'ri:telegram-2-fill'},
  {title: 'Email', description: 'boybutterfly1@gmail.com', href: 'mailto:', iconName: 'material-symbols:mail'},
  {title: 'Twitter', description: '', href: ':', iconName: 'hugeicons:new-twitter'},
  {title: 'Instagram', description: '@boybutterfly1', href: ':', iconName: 'mdi:instagram'},
  {title: 'Discord', description: 'boybutterfly1', href: ':', iconName: 'ic:baseline-discord'},
]

const lightCircle = ref<HTMLDivElement | null>(null);
const lightCirclePosition = ref({ x: 0, y: 0 });

const onMouseMove = (event: MouseEvent) => {
  const parentRect = lightCircle.value?.parentElement?.getBoundingClientRect();
  if (!parentRect || !lightCircle.value) return;

  const circleWidth = lightCircle.value.offsetWidth;
  const circleHeight = lightCircle.value.offsetHeight;

  const x = event.clientX - parentRect.left - circleWidth / 2;
  const y = event.clientY - parentRect.top - circleHeight / 2;

  lightCirclePosition.value = { x, y };
};


onMounted(() => {
  const footerBlock = document.getElementById("footerBlock");
  if (!footerBlock) return;

  window.addEventListener("mousemove", onMouseMove);

  onUnmounted(() => {
    window.removeEventListener("mousemove", onMouseMove);
  });
});


</script>

<style scoped>
.highlighted {
  animation: flash-in 0.7s ease-out;
  transition: opacity 0.2s ease, filter 0.2s ease, background 0.2s ease;
}

@keyframes flash-in {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
</style>