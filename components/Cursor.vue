<template>
  <div class="cursor">
    <div class="cursor-line horizontal" :style="{ transform: `translate3d(0, ${y}px, 0)` }" />
    <div class="cursor-line vertical" :style="{ transform: `translate3d(${x}px, 0, 0)` }" />
    <div class="cursor-center" :style="{ transform: `translate3d(${x - 17}px, ${y - 17}px, 0)` }" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const x = ref(0);
const y = ref(0);

const handleMouseMove = (e: MouseEvent) => {
  x.value = e.clientX;
  y.value = e.clientY;
};

onMounted(() => {
  x.value = window.innerWidth / 2;
  y.value = window.innerHeight / 2;
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style scoped>
.cursor {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 100;
}

.cursor-line {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.3);
  pointer-events: none;
  z-index: 100;
  transition: transform 0.3s ease-out;
  backdrop-filter: invert(1);
  opacity: 0.3;
}

.cursor-line.horizontal {
  top: 0;
  left: 0;
  width: 100vw;
  height: 1px;
  transform: translateY(0);
}

.cursor-line.vertical {
  top: 0;
  left: 0;
  width: 1px;
  height: 100vh;
  transform: translateX(0);
}

.cursor-center {
  position: absolute;
  width: 34px;
  height: 34px;
  background-color: rgba(255, 255, 255, 0.01);
  backdrop-filter: invert(1);
  border-radius: 50%;
  z-index: 110;
  pointer-events: none;
}
</style>
