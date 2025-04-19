<template>
  <header class="w-full h-8 px-3 bg-black text-c-white flex uppercase">
    <section class="w-1/3 flex items-center gap-3 justify-start">
      <NuxtLink to="/">
        <Icon name="gridicons:domains" size="0.9rem"/>
      </NuxtLink>
      <span>{{ currentRoute }}</span>
    </section>
    <section class="w-1/3 flex items-center justify-center">
      <span>{{ formattedDate }}</span>
    </section>
    <section class="w-1/3 flex items-center gap-1 justify-end">
      <button
          @click="scrollToBlock"
          class="flex items-center uppercase p-1 bg-neutral-800 rounded-sm cursor-pointer hover:bg-white hover:text-black duration-300"
      >
        <span>Get in touch</span>
        <Icon name="mynaui:arrow-long-down-solid" size="0.8rem"/>
      </button>
    </section>
  </header>
</template>

<script setup lang="ts">
import {useContacts} from "~/components/Contacts/useContacts";

const formattedDate = ref('')
let intervalId: number

const { scrollToBlock } = useContacts()
const route = useRoute()

const currentRoute = computed<string>(() => {
  return route.name ? route.name.toString() : ''
})

function updateDate() {
  const now = new Date()

  const localeParts = new Intl.DateTimeFormat(undefined, {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZoneName: undefined,
  }).formatToParts(now)

  const getPart = (type: string) =>
      localeParts.find(p => p.type === type)?.value ?? ''

  const month = getPart('month')
  const day = getPart('day')
  const year = getPart('year')
  const hour = getPart('hour')
  const minute = getPart('minute')
  const second = getPart('second')
  const dayPeriod = getPart('dayPeriod')

  formattedDate.value = `M${month} D${day} Y${year} T${hour}:${minute}:${second} ${dayPeriod}`
}

onMounted(() => {
  updateDate()
  intervalId = setInterval(updateDate, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>

</style>