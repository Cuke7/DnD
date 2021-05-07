<template>
  <v-lazy>
    <v-container>
      <v-card color="rgb(255, 255, 255, 0.4)" class="pa-5">
        <v-row justify="space-between" align="center">
          <v-col cols="auto">
            <v-row class="subtitle-1">
              {{ objet.nom }}
            </v-row>
            <v-row class="subtitle-2 mt-4">
              {{ objet.type }}, {{ objet.rarete }}.
            </v-row>
          </v-col>
          <v-col cols="auto" class="ma-0 pa-0">
            <v-btn nuxt v-bind:to="'/DnD/' + objet.nom" icon>
              <v-icon>
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-lazy>
</template>

<script>
export default {
  name: "ObjetMagique",
  props: ["objet"]
};
</script>
