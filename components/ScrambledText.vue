<template>
  <span v-for="(char, index) in displayedChars" :key="index">
    {{ char }}
  </span>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useI18n } from '#imports';

const props = defineProps<{
  text: string;
  isNonstop?: boolean;
}>();

const { locale } = useI18n();

const randomChars: string =
  locale.value === 'en'
    ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-'
    : 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789!@#$%^&*()_+=-';
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
    randomIntervals[index] = window.setInterval(() => {
      displayedChars.value[index] = getRandomChar();
    }, 80);

    if (!props.isNonstop) {
      randomTimeouts[index] = window.setTimeout(
        () => {
          clearInterval(randomIntervals[index]);
          displayedChars.value[index] = char;
        },
        500 + (index + 1) * 120,
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
