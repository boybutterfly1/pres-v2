<template>
  <div>
    <span id="typewriter"></span>
    <span id="cursor"> _</span>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { onMounted } from 'vue';

const props = defineProps<{
  stringArr: string[];
}>();

function initGsap() {
  gsap.registerPlugin(TextPlugin);

  gsap.to('#cursor', {
    opacity: 0,
    repeat: -1,
    duration: 1,
    ease: 'power2.inOut',
  });

  gsap.to('#typewriter', {
    text: props.stringArr[0],
    duration: 2,
    delay: 0.5,
    onComplete: () => {
      gsap.to('#typewriter', {
        text: props.stringArr.join('<br>'),
        duration: 2,
      });
    },
  });
}

onMounted(initGsap);
</script>

<style scoped>
#typewriter {
  white-space: pre;
}
</style>
