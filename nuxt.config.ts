// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: false },
  experimental: {
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
  modules: ['@nuxt/image', '@nuxt/icon', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Unbounded: [900],
      Tiny5: true,
      Jost: [300, 500],
      "Old Standard TT": [400],
      "Mary Jane": true
    },
  },
  css: ['./assets/css/main.css', "./assets/fonts/fonts.css"],

  vite: {
    plugins: [tailwindcss(), svgLoader()],
  },
});
