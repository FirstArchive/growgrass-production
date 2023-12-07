// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      bodyAttrs: {
        class: "demo",
      },
      charset: "utf-8",
      titleTemplate: "%s | growgrassth",
      meta: [
        {
          name: "author",
          content: "Growgrassth Ltd., Thailand",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=5",
        },
      ],
    },
  },

  ssr: true,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-icon",
    "@vueuse/nuxt",
    "@ant-design-vue/nuxt",
    [
      "@nuxtjs/strapi",
      {
        url: process.env.STRAPI_URL || "http://localhost:1337",
        prefix: "/api",
        admin: "/admin",
        version: "v4",
        cookie: {},
        cookieName: "strapi_jwt",
      },
    ],
    [
      "@nuxtjs/robots",
      {
        UserAgent: "*",
        Disallow: "",
      },
    ],
    "@nuxt/image",
  ],
});
