// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  ssr: true,
  imports: {
    autoImport: false,
  },
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  devtools: { enabled: false },
  experimental: {
    treeshakeClientOnly: true,
    scanPageMeta: 'after-resolve',
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    normalizeComponentNames: false,
    spaLoadingTemplateLocation: 'within',
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },
  features: {
    inlineStyles: true,
  },
  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },
  modules: ['@nuxtjs/i18n', '@nuxt/image', '@nuxt/icon', '@nuxtjs/google-fonts'],
  i18n: {
    defaultLocale: 'ru',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Russian', file: 'ru.json' },
    ],
  },
  googleFonts: {
    display: 'swap',
    preconnect: true,
    preload: true,
    families: {
      Unbounded: [300],
      'Victor Mono': [400, 700, 900],
    },
  },
  css: ['./assets/css/main.css', './assets/fonts/fonts.css'],
  vite: {
    plugins: [tailwindcss(), svgLoader()],
    optimizeDeps: {
      exclude: ['three'],
    },
  },
});
