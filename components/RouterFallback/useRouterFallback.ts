import { ref } from 'vue';

const isPending = ref<boolean>(true);

export const useRouterFallback = () => {
  const setPending = (value: boolean) => {
    isPending.value = value;
  };

  return {
    isPending,
    setPending,
  };
};
