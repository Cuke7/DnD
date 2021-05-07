<template>
  <v-lazy>
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="auto">
          <v-avatar v-if="objet.image_url != 'no_url'">
            <img :src="objet.image_url" alt="item.nom" />
          </v-avatar>
          <v-avatar v-else color="white">
            {{ objet.nom[0] }}
          </v-avatar>
        </v-col>
        <v-col cols="auto">
          {{ objet.nom }}
        </v-col>
        <v-col cols="auto">
          <v-btn nuxt v-bind:to="'/DnD/' + objet.nom" icon>
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
  name: "ObjetMagique2",
  props: ["objet"]
};
</script>
