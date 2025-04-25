import { ref, onMounted } from 'vue';

export function useInitChunksProgress() {
  const progress = ref(0);
  const isDone = ref(false);

  function calculateProgress() {
    const entries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    const jsChunks = entries.filter(
      (entry) => entry.initiatorType === 'script' || entry.name.endsWith('.js'),
    );

    const loaded = jsChunks.filter((e) => e.responseEnd > 0);
    const percent =
      jsChunks.length === 0 ? 100 : Math.round((loaded.length / jsChunks.length) * 100);

    progress.value = percent;
    if (percent >= 100) {
      isDone.value = true;
    }
  }

  onMounted(() => {
    const interval = setInterval(() => {
      calculateProgress();

      if (isDone.value) {
        clearInterval(interval);
      }
    }, 100);
  });

  return {
    progress,
    isDone,
  };
}
