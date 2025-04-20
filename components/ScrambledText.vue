<template>
  <span v-for="(char, index) in displayedChars" :key="index">
    {{ char }}
  </span>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

const props = defineProps<{
  text: string;
  isNonstop?: boolean;
}>();

const randomChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-';
const displayedChars = ref<string[]>([]);
let randomIntervals: number[] = [];
let randomTimeouts: number[] = [];

const getRandomChar = (): string => {
  const randomIndex = Math.floor(Math.random() * randomChars.length);
  return randomChars[randomIndex] || '';
};
const clearIntervals = () => {
  randomIntervals.forEach((interval) => clearInterval(interval));
  randomIntervals = [];

  randomTimeouts.forEach((timeout) => clearTimeout(timeout));
  randomTimeouts = [];
};

const startAnimation = () => {
  clearIntervals();

  const chars = props.text.trim().split('');
  displayedChars.value = Array(chars.length)
    .fill('')
    .map(() => getRandomChar());

  chars.forEach((char: string, index: number) => {
    // Обновляем каждый символ случайным
    randomIntervals[index] = window.setInterval(() => {
      displayedChars.value[index] = getRandomChar();
    }, 80);

    if (!props.isNonstop) {
      // ⏳ Задержка 1000мс (1 сек) + постепенная анимация
      randomTimeouts[index] = window.setTimeout(
        () => {
          clearInterval(randomIntervals[index]);
          displayedChars.value[index] = char;
        },
        300 + (index + 1) * 120, // ← добавляем 1 секунду перед заменой
      );
    }
  });
};

watch(
  () => props.text,
  () => startAnimation(),
);
watch(
  () => props.isNonstop,
  () => startAnimation(),
);

onMounted(() => {
  startAnimation();
});
</script>

<style lang="scss" scoped></style>
