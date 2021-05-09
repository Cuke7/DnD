<template>
  <v-app v-cloak>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon
        color="white"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">D&D app</v-toolbar-title>

      <v-spacer></v-spacer>
      <!--
      <v-switch color="white" v-model="dark_mode_activated" hide-details>
        <v-icon slot="append" color="white">mdi-brightness-6</v-icon>
      </v-switch>
      <v-icon class="mx-4" color="white" @click="drawer2 = !drawer2"
        >mdi-dots-vertical</v-icon
      >-->
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      class="pa-4"
      color="grey lighten-3"
      id="navigation_drawer"
    >
      <v-card
        elevation="0"
        v-bind:to="page.page_url"
        nuxt
        color="rgb(255, 255, 255, 0.6)"
        v-for="page in pages"
        :key="pages.indexOf(page)"
        class="pa-1 my-4 rounded-pill"
      >
        <v-row align-content="center" align="center">
          <v-col cols="auto">
            <v-avatar> <img v-bind:src="page.icon_url"/></v-avatar>
          </v-col>
          <v-col cols="auto" class="font-weight-bold">
            {{ page.name }}
          </v-col>
        </v-row>
      </v-card>
    </v-navigation-drawer>

    <v-main>
      <!--  -->
      <v-row justify="center" class="pa-0 ma-0">
        <v-col cols="12" lg="8">
          <nuxt />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    dark_mode_activated: true,
    pages: [
      {
        page_url: "/",
        name: "Menu principal",
        icon_url: "/icon2.png"
      },
      {
        page_url: "/objetMagiques",
        name: "Objets magiques",
        icon_url: "/icons/chest_icon.jpg"
      },
    ]
  }),
  watch: {
    dark_mode_activated(val) {
      this.$vuetify.theme.dark = !val;
    }
  }
};
</script>

<style scoped>
.v-main {
  background-image: url("/DnD/background.jpg");
  background-repeat: repeat;
}
#navigation_drawer {
  background-image: url("/DnD/tiles.jpg");
  background-repeat: repeat;
}
</style>
