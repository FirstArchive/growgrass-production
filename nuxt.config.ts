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
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://scontent.fbkk30-1.fna.fbcdn.net/v/t39.30808-6/358427765_313343501028422_2674244689172395098_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEb9QIcUww5VbBkth-sZz65t9_K1CxH1t6338rULEfW3vaRqrKjE7nkn7d0DNVVFtnVtgFXQdHex2j9XWKL4E_4&_nc_ohc=6VG3vnL_8vcAX-Hry_V&_nc_ht=scontent.fbkk30-1.fna&oh=00_AfBUFiR-XclpjIWUuZArarr3GSUKoXUGw-SanWZrmEk-pg&oe=657739C0",
        },
      ],
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
    "@nuxt/image",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@ant-design-vue/nuxt",
    [
      "nuxt-gtag",
      {
        id: "G-9VT42LB6FR",
      },
    ],
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
  ],
});
