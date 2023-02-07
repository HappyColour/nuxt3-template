// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules/image
  // https://nuxt.com/modules/device
  modules: ["@nuxt/image-edge", "@nuxtjs/device",'@nuxt/ui'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;'
        }
      }
    }
  }
});
