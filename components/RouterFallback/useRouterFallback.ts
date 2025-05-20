import { useOverflow } from '~/composables/useOverflow';
import { useState } from '#app';

export const useRouterFallback = () => {
  const isPending = useState<boolean>('pending', () => true);

  const { resumeScroll } = useOverflow();

  const setPending = (value: boolean) => {
    isPending.value = value;

    if (!value) {
      setTimeout(() => {
        resumeScroll();
      }, 500);
    }
  };

  return {
    isPending,
    setPending,
  };
};
