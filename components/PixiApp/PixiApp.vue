<template>
  <div ref="wrapper" class="h-full w-full overflow-hidden rounded-xl">
    <canvas ref="pixiContainer" />
  </div>
</template>

<script setup lang="ts">
import { Application } from 'pixi.js';
import { addGradient } from '~/components/PixiApp/addGradient';
import { onMounted, onUnmounted, ref } from 'vue';

const emits = defineEmits<{}>();

const wrapper = ref<HTMLDivElement | null>(null);
const pixiContainer = ref<HTMLCanvasElement | null>(null);
const app = new Application();

let resizeObserver: ResizeObserver | null = null;

async function setupPixi(width: number, height: number) {
  if (!pixiContainer.value) return;

  await app.init({
    canvas: pixiContainer.value,
    width,
    height,
    background: 'black',
  });

  addGradient(app);
}

function resize() {
  if (!wrapper.value) return;

  const { width, height } = wrapper.value.getBoundingClientRect();
  app.renderer.resize(width, height);
}

onMounted(async () => {
  if (!wrapper.value) return;

  const { width, height } = wrapper.value.getBoundingClientRect();
  await setupPixi(width, height);

  resizeObserver = new ResizeObserver(() => {
    resize();
  });

  resizeObserver.observe(wrapper.value);
});

onUnmounted(() => {
  resizeObserver?.disconnect();
  app.destroy(true);
});
</script>

<style scoped></style>
