<template>
  <div
    @click="shutdown"
    :class="{ smaller: isShuttingDown }"
    class="fixed right-3 bottom-12 z-50 flex h-[250px] w-90 overflow-hidden rounded-sm border-[0.5px] border-c-white bg-neutral-950"
  >
    <Icon
      name="game-icons:cyborg-face"
      size="3rem"
      class="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-neutral-700 opacity-0"
      :class="{ visible: isShuttingDown }"
    />
    <div
      :class="[
        'flex h-[250px] w-90 justify-start overflow-hidden transition-all duration-500 ease-in-out',
        isShuttingDown ? 'animate-crt-off' : '',
      ]"
    >
      <img
        src="/images/ascii.png"
        alt="ascii"
        class="project-img h-full border-l-4 border-l-neutral-950 object-contain"
      />
      <div class="flex flex-col items-start justify-center p-1 text-c-white">
        <span class="mb-5 text-[0.4rem] normal-case">0xY2338I800WR17PWS</span>

        <ul class="flex flex-col gap-1.5">
          <li class="flex gap-1">
            <span>Name:</span>
            <span>KAMIL</span>
          </li>
          <li class="flex gap-1">
            <span>Age:</span>
            <span>25</span>
          </li>
          <li class="flex gap-1">
            <span>Citizenship:</span>
            <span>RUSSIAN</span>
          </li>
          <li class="flex gap-1">
            <span>Language:</span>
            <span>RU, EN</span>
          </li>
        </ul>

        <span class="mt-5 text-[0.4rem]">366 732 3212 9088</span>
        <span class="text-[0.4rem]">254 3005 123 1475</span>
        <span class="mb-2 text-[0.4rem]">4593 732 943 2034</span>

        <span class="mt-2 text-[0.4rem]">DIS</span>
        <span class="text-[0.4rem]">ASJ9</span>
        <span class="text-[0.4rem]">CAMI</span>
        <span class="text-[0.4rem]">CHKW</span>
        <span class="mb-2 text-[0.4rem]">MAND</span>
      </div>
      <GrainAnimation />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GrainAnimation from '~/components/GrainAnimation.vue';

const isShuttingDown = ref(false);

function shutdown() {
  isShuttingDown.value = true;
}
</script>

<style scoped>
@keyframes crtOff {
  0% {
    transform: scaleY(1);
    opacity: 1;
  }
  60% {
    transform: scaleY(0.05);
    opacity: 0.9;
  }
  100% {
    transform: scaleY(0);
    opacity: 0;
  }
}

.animate-crt-off {
  animation: crtOff 0.6s ease-in-out forwards;
  transform-origin: center center;
}
.smaller {
  animation: small 0.6s ease-in-out forwards;
  animation-delay: 0.6s;
}
@keyframes small {
  0% {
  }
  100% {
    width: 5rem;
    height: 5rem;
  }
}
.visible {
  animation: show 0.5s ease-in-out forwards;
  animation-delay: 1.2s;
}
@keyframes show {
  0% {
  }
  100% {
    opacity: 1;
  }
}
</style>
