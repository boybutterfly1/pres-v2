<template>
  <h2
    class="mb-3 ml-3 font-title text-[1.5rem] font-bold text-c-white sm:text-[1.75rem] md:text-[2rem]"
    :class="{ highlighted: isHighlighted }"
  >
    <ScrambledText :text="$t('pageTitle.links')" />
  </h2>

  <div
    class="relative grid w-full gap-[1px] overflow-hidden rounded-sm bg-neutral-900 p-[1px] sm:grid-cols-2 lg:grid-cols-3"
    :class="{ highlighted: isHighlighted }"
    id="contactsBlock"
  >
    <div
      ref="lightCircle"
      class="pointer-events-none absolute z-10 aspect-square w-1/3 rounded-full duration-100 ease-linear"
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
      class="z-11 cursor-pointer rounded-sm bg-c-dark px-3 py-2 uppercase transition-colors duration-200 hover:bg-neutral-800"
    >
      <div class="flex w-full items-center gap-2">
        <span class="text-[0.65rem] sm:text-[0.7rem]">{{ $t(item.title) }}</span>
        <Icon :name="item.iconName" size="0.9rem" />
        <Icon name="material-symbols:arrow-outward" size="0.9rem" class="ml-auto" />
      </div>
      <span class="text-[0.6rem] text-neutral-500 sm:text-[0.55rem]">{{ item.description }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { useContacts } from '~/components/Contacts/useContacts';

const { isHighlighted } = useContacts();

const contactLinks = [
  {
    title: 'contacts.github',
    description: '/boybutterfly1',
    href: 'https://github.com/boybutterfly1',
    iconName: 'mdi:github-box',
  },
  {
    title: 'contacts.telegram',
    description: '@boybutterfly1',
    href: ':',
    iconName: 'ri:telegram-2-fill',
  },
  {
    title: 'contacts.email',
    description: 'boybutterfly1@gmail.com',
    href: 'mailto:',
    iconName: 'material-symbols:mail',
  },
  { title: 'contacts.twitter', description: '', href: ':', iconName: 'hugeicons:new-twitter' },
  {
    title: 'contacts.instagram',
    description: '@boybutterfly1',
    href: ':',
    iconName: 'mdi:instagram',
  },
  {
    title: 'contacts.discord',
    description: 'boybutterfly1',
    href: ':',
    iconName: 'ic:baseline-discord',
  },
];

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
  const footerBlock = document.getElementById('footerBlock');
  if (!footerBlock) return;

  window.addEventListener('mousemove', onMouseMove);

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove);
  });
});
</script>

<style scoped>
.highlighted {
  animation: flash-in 0.7s ease-out;
  transition:
    opacity 0.2s ease,
    filter 0.2s ease,
    background 0.2s ease;
}

@keyframes flash-in {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
    filter: brightness(150%);
  }
  75% {
    opacity: 0.5;
    filter: brightness(100%);
  }
  100% {
    opacity: 1;
  }
}
</style>
