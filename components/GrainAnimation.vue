<template>
  <div
    class="animate-grain pointer-events-none absolute top-[-300%] left-[-150%] z-[9999] h-[600%] w-[600%] opacity-50"
  />
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes grain {
  0%,
  100% {
    transform: translate(0);
  }
  10% {
    transform: translate(-5%, -10%);
  }
  20% {
    transform: translate(-15%, 5%);
  }
  30% {
    transform: translate(7%, -25%);
  }
  40% {
    transform: translate(-5%, 25%);
  }
  50% {
    transform: translate(-15%, 10%);
  }
  60% {
    transform: translate(15%);
  }
  70% {
    transform: translateY(15%);
  }
  80% {
    transform: translate(3%, 35%);
  }
  90% {
    transform: translate(-10%, 10%);
  }
}
.animate-grain {
  animation: grain 7s steps(10) infinite;
  background-image: url('public/images/noise.png');
  background-size: 200px;
  background-repeat: repeat;
}
</style>
