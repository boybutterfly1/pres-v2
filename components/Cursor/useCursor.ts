import { ref } from 'vue';

const cursorText = ref<string | null>(null);

export function useCursor() {
  const setCursorText = (text: string) => {
    cursorText.value = text;
  };
  const resetCursorText = () => {
    cursorText.value = null;
  };

  return {
    cursorText,
    setCursorText,
    resetCursorText,
  };
}
