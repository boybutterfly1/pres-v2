import { defineNuxtRouteMiddleware } from '#app';
import { useRouterFallback } from '~/components/RouterFallback/useRouterFallback';
import { useOverflow } from '~/composables/useOverflow';

export default defineNuxtRouteMiddleware(() => {
  const { setPending } = useRouterFallback();
  const { stopScroll } = useOverflow();

  setPending(true);

  stopScroll();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
});
