

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  modules: ['@nuxtjs/tailwindcss'],
  builder: 'webpack',
  build:{
    postcss: {
        postcssOptions: {
          plugins: {
          },
        },
      },
},
  head: {
    title: "Dev Edmonton Society",
    meta: [
        { charset: "utf-8" },
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
        },
        {
            hid: "description",
            name: "description",
            content: "Fostering a stronger software development community in Edmonton. We are made up of people who believe that an impactful, diverse, and collaborative developer community enriches us all. We realize this vision by sharing knowledge and ideas, understanding the community and its needs, promoting events and initiatives, and supporting technology meetups and organizations.",
        },
    ],
},
link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],

components: true,
/*
     ** PWA Settings
     */
     pwa: {
        meta: { mobileApp: false },
    },
    googleAnalytics: {
        id: "UA-180778341-1",
    }
})
