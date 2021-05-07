<template>
  <v-lazy>
    <v-container>
      <v-row justify="space-between" align="center">
        <v-cols cols="auto">
          <v-avatar v-if="objet.image_url != 'no_url'">
            <img :src="objet.image_url" alt="item.nom" />
          </v-avatar>
          <v-avatar v-else color="white">
            {{ objet.nom[0] }}
          </v-avatar>
        </v-cols>
        <v-col cols="auto">
          {{ objet.nom }}
        </v-col>
        <v-col cols="auto" class="ma-0 pa-0">
          <v-btn nuxt v-bind:to="'/DnD/' + objet.nom" icon>
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-divider class="mt-2"></v-divider>
    </v-container>
  </v-lazy>
</template>

<script>
export default {
  name: "ObjetMagique",
  props: ["objet"]
};
</script>
