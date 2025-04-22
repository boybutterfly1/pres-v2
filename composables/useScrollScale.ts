import { onUnmounted } from 'vue';

export const useScrollScale = (element: HTMLElement | null) => {
  const handleScroll = () => {
    if (!element) return;

    const scrollY = window.scrollY;
    const scale = 1 - scrollY / 5000;

    element.style.transform = `translateZ(-${scrollY}px) scale(${scale})`;
  };

  window.addEventListener('scroll', handleScroll);

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
};
