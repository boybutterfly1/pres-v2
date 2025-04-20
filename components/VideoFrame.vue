<template>
  <div class="h-60 w-90 overflow-hidden rounded-lg border-10 border-black bg-black">
    <video
      class="h-full w-full origin-center transform object-cover"
      autoplay
      muted
      loop
      playsinline
    >
      <source src="/public/video/video.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
