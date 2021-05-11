<template>
  <v-lazy>
    <NuxtLink v-bind:to="'/spell/' + objet.nom">
      <v-container>
        <v-row>
          <v-col cols="auto" class="pa-1">
            <div v-if="$vuetify.breakpoint.mobile">
              {{ objet.nom }} (niv .{{ objet.level }})
            </div>
            <div v-else class="text-h6">
              {{ objet.nom }} (niv .{{ objet.level }})
            </div>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="11">
            <v-row align="center">
              <v-col cols="auto" lg="12" class="pa-1">
                <v-chip
                  color="blue lighten-4"
                  class="black--text"
                  label
                  :small="$vuetify.breakpoint.mobile ? true : false"
                >
                  {{ objet.ecole }}
                </v-chip>
              </v-col>
              <v-col
                cols="auto"
                v-for="(classes, index) in objet.classes"
                v-bind:key="index"
                class="pa-1"
              >
                <v-chip
                  color="green lighten-4"
                  class="black--text"
                  label
                  :small="$vuetify.breakpoint.mobile ? true : false"
                >
                  {{ classes }}
                </v-chip>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="1">
            <v-btn
              nuxt
              v-bind:to="'/spell/' + encodeURIComponent(objet.nom)"
              icon
            >
              <v-icon>
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </v-col>

          <!--<v-col cols="auto">
          <v-row>
            <v-col class="ma-1 pa-0">
              <v-chip
                color="blue lighten-4"
                class="black--text"
                label
                :small="$vuetify.breakpoint.mobile ? true : false"
              >
                {{ objet.ecole }}
              </v-chip>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="auto"
              v-for="(classes, index) in objet.classes"
              v-bind:key="index"
              class="ma-1 pa-0"
            >
              <v-chip
                color="green lighten-4"
                class="black--text"
                label
                :small="$vuetify.breakpoint.mobile ? true : false"
              >
                {{ classes }}
              </v-chip>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="auto">
          <v-btn
            nuxt
            v-bind:to="'/spell/' + encodeURIComponent(objet.nom)"
            icon
          >
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </v-col> -->
        </v-row>
        <v-row>
          <v-divider class="mt-2"></v-divider>
        </v-row>
      </v-container>
    </NuxtLink>
  </v-lazy>
</template>

<script>
export default {
  name: "Spell",
  props: ["objet"]
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
