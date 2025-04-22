<template>
  <header class="scrolled-block flex h-8 w-full bg-c-dark px-3 text-c-white uppercase">
    <section class="flex w-1/3 items-center justify-start gap-3">
      <NuxtLink to="/">
        <Icon name="gridicons:domains" size="0.9rem" />
      </NuxtLink>
      <span>{{ currentRoute }}</span>
    </section>
    <section class="flex w-1/3 items-center justify-center">
      <span>{{ formattedDate }}</span>
    </section>
    <section class="flex w-1/3 items-center justify-end gap-1">
      <button
        @click="scrollToBlock"
        class="flex cursor-pointer items-center rounded-sm bg-neutral-800 p-1 uppercase duration-300 hover:bg-white hover:text-black"
      >
        <span>{{ $t('header.contact') }}</span>
        <Icon name="mynaui:arrow-long-down-solid" size="0.8rem" />
      </button>
      <NuxtLink :to="$switchLocalePath(newLocale)">{{ newLocale }}</NuxtLink>
    </section>
  </header>
</template>

<script setup lang="ts">
import { useContacts } from '~/components/Contacts/useContacts';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from '#imports';
import { useRoute } from 'vue-router';

const formattedDate = ref('');
let intervalId: number;

const { scrollToBlock } = useContacts();
const route = useRoute();
const { locale, t } = useI18n();

const newLocale = computed(() => {
  if (locale.value === 'en') {
    return 'ru';
  } else return 'en';
});

const currentRoute = computed<string>(() => {
  return route.name ? route.name.toString() : '';
});

const updateDate = () => {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat(locale.value, {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const parts = formatter.formatToParts(now);

  const getPart = (type: string) => parts.find((p) => p.type === type)?.value ?? '';

  formattedDate.value = `${t('header.date.M')}${getPart('month')} ${t('header.date.D')}${getPart('day')} ${t('header.date.Y')}${getPart('year')} ${t('header.date.T')}${getPart('hour')}:${getPart('minute')}:${getPart('second')} `;
};

onMounted(() => {
  updateDate();
  intervalId = setInterval(updateDate, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped></style>
