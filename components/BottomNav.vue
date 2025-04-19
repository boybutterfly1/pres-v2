<template>
  <div
      class="
        flex px-3
        items-center
        w-full h-10
        text-c-white  uppercase
        bg-black
      "
  >
    <section class="w-1/3">
      <NuxtLink to="/" class="flex gap-1 items-center justify-start cursor-pointer">
        <img src="/public/images/logo.webp" width="30" alt="logo" />
        <span class="font-title  text-[1rem]">bbttrfl1</span>
      </NuxtLink>
    </section>
    <nav class="w-1/3 flex gap-3 items-center justify-center text-[0.65rem]">
      <button class="p-1 bg-neutral-800 rounded-sm cursor-pointer hover:bg-white hover:text-black duration-300">INDEX</button>
      <button class="p-1 bg-neutral-800 rounded-sm cursor-pointer hover:bg-white hover:text-black duration-300">ABOUT</button>
      <button class="p-1 bg-neutral-800 rounded-sm cursor-pointer hover:bg-white hover:text-black duration-300">STACK</button>
      <button class="p-1 bg-neutral-800 rounded-sm cursor-pointer hover:bg-white hover:text-black duration-300">PROJECTS</button>
    </nav>
    <section class="w-1/3 flex items-center justify-end">
      <span>
        bebers
      </span>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>