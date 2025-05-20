import { useState } from '#app';

export function useImageExpand() {
  const imgSrc = useState<string | null>('image-expand-src', () => null);

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
