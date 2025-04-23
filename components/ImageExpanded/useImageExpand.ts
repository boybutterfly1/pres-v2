import { ref } from 'vue';

const imgSrc = ref<string | null>(null);

export function useImageExpand() {
  const setImgSrc = (src: string) => {
    imgSrc.value = src;
  };
  const resetImgSrc = () => {
    imgSrc.value = null;
  };

  return {
    imgSrc,
    setImgSrc,
    resetImgSrc,
  };
}
