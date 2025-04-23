import { ref } from 'vue';
import { useOverflow } from '~/composables/useOverflow';

const isPending = ref<boolean>(true);
const { resumeScroll } = useOverflow();

export const useRouterFallback = () => {
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
