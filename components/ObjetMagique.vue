<template>
  <v-lazy>
    <v-container>
      <v-row>
        <v-col cols="auto">
          <div v-if="$vuetify.breakpoint.mobile">
            {{ objet.nom }}
          </div>
          <div v-else class="text-h6">{{ objet.nom }}</div>
        </v-col>
      </v-row>
      <v-row align="center" justify="space-between">
        <v-col cols="2">
          <v-avatar
            v-if="objet.image_url != 'no_url'"
            :size="$vuetify.breakpoint.mobile ? 50 : 100"
          >
            <img :src="objet.image_url" alt="item.nom" />
          </v-avatar>
          <v-avatar
            v-else
            color="white"
            :size="$vuetify.breakpoint.mobile ? 50 : 100"
          >
            {{ objet.nom[0] }}
          </v-avatar>
        </v-col>
        <v-col cols="auto">
          <v-row>
            <v-chip
              color="blue lighten-4"
              class="black--text ma-1"
              label
              :small="$vuetify.breakpoint.mobile ? true : false"
            >
              {{ objet.rarete }}
            </v-chip>
          </v-row>
          <v-row>
            <v-chip
              color="green lighten-4"
              class="black--text ma-1"
              label
              :small="$vuetify.breakpoint.mobile ? true : false"
            >
              {{ objet.type }}
            </v-chip>
          </v-row>
        </v-col>
        <v-col cols="auto">
          <v-btn nuxt v-bind:to="objet.nom" icon>
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-divider class="mt-2"></v-divider>
      </v-row>
    </v-container>
  </v-lazy>
</template>

<script>
export default {
  name: "ObjetMagique",
  props: ["objet"]
};
</script>
