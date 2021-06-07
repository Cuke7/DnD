import data_magical_items from "./static/data/magical_objects.json";

import data_spell from "./static/data/spells.json";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s",
    title: "D&D app",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: "D&D app",
      lang: "fr",
      theme_color: "#6d0000",
      short_name: "D&D app"
    },
    icon: {
      source: "/icon2.png",
      fileName: "icon2.png"
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      themes: {
        light: {
          primary: "#6d0000",
          secondary: "#d1b83d",
          tertiary: "#c9720e",
          grey: "#faf7f7",
          accent: "#3557bd"
        },
        dark: {
          primary: "#000080",
          grey: "#292828"
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  target: "static",

  generate: {
  //   routes: function() {
  //     let arr = [];
  //     for (const item of data_magical_items) {
  //       arr.push("/item/" + encodeURI(item.nom));
  //     }
  //     for (const spell of data_spell) {
  //       arr.push("/spell/" + encodeURI(spell.nom));
  //     }
  //     return arr;
  //   }
  }
};
