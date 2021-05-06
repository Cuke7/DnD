<template>
  <v-app v-cloak>
    <v-app-bar app color="primary">
      <v-btn icon nuxt to="/DnD">
        <v-icon color="white">
          mdi-arrow-left
        </v-icon>
      </v-btn>

      <v-toolbar-title class="white--text">D&D assistant</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dark_mode_activated: true
  }),
  watch: {
    dark_mode_activated(val) {
      this.$vuetify.theme.dark = !val;
    }
  },
};
</script>

<style>
.v-main {
  background-image: url("/DnD/background.jpg");
  background-repeat: repeat;
}
</style>
