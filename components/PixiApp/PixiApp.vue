<template>
  <div ref="pixiContainer" class="w-screen h-screen fixed top-0 left-0" />
</template>

<script setup lang="ts">
import { Application } from 'pixi.js';
import { addGradient } from "~/components/PixiApp/addGradient";

const pixiContainer = ref<HTMLDivElement | null>(null);

const app = new Application();

async function setupPixi() {
  await app.init({
    resizeTo: window,
    background: 'black',
  });

  if (pixiContainer.value) {
    pixiContainer.value.appendChild(app.canvas);
  }
}

onMounted(async () => {
  await setupPixi();
  addGradient(app);
});
</script>
