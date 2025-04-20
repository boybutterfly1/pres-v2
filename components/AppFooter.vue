<template>
  <footer
      id="footerBlock"
      class="relative w-full z-20 h-[calc(100dvh-4.5rem)] p-3 border-dotted border-b border-b-c-white/30 flex flex-col mb-10 bg-c-dark rounded-t-xl"
  >
    <div class="grid h-full grid-cols-8 grid-rows-2 gap-2.5">
      <img src="/images/globe.webp" width="100" alt="logo" class="" />
      <div class="text-[0.65rem] text-c-white">2025®</div>
      <span class="row-start-1 row-end-2 col-start-5 col-end-7 text-[0.5rem] text-c-white">
        {{ $t("decoration.rights") }}
      </span>
      <img src="https://i.pinimg.com/736x/93/a6/b2/93a6b2674e6e959802e1e124b6b9eb93.jpg" width="200" alt="logo" class=" self-end row-start-2 col-start-8 row-end-2 " />
      <div class="self-end row-start-2 col-start-1 col-end-6 row-end-2">
        <Contacts/>
      </div>
    </div>
    <ThreeModel class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>