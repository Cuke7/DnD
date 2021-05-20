<template>
  <v-app v-cloak>
    <v-app-bar app color="primary">
      <v-btn icon nuxt @click="$router.go(-1)">
        <v-icon color="white">
          mdi-arrow-left
        </v-icon>
      </v-btn>

      <v-toolbar-title class="white--text">D&D assistant</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="share" color="white">
        <v-icon>
          mdi-share-variant
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-row justify="center" class="pa-0 ma-0">
        <v-col cols="12" lg="8">
          <nuxt />
        </v-col>
      </v-row>
      <!--  -->
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
  computed: {
    subtitle() {
      return this.$store.state.subtitle;
    }
  },
  methods: {
    share() {
      if (navigator.share) {
        navigator
          .share({
            title: "DnD app",
            text: this.subtitle,
            url: window.location.href
          })
          .then(() => console.log(this.subtitle))
          .catch(error => console.log("Error sharing", error));
      }
    }
  }
};
</script>

<style>
.v-main {
  background-image: url("/DnD/background.jpg");
  background-repeat: repeat;
}
</style>
