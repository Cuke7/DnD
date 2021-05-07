<template>
  <v-lazy>
      <v-list-item>
        <v-list-item-avatar>
          <v-avatar v-if="objet.image_url != 'no_url'">
            <img :src="objet.image_url" alt="item.nom" />
          </v-avatar>
          <v-avatar v-else color="white">
            {{ objet.nom[0] }}
          </v-avatar>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ objet.nom }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn nuxt v-bind:to="'/DnD/' + objet.nom" icon>
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider class="mt-2"></v-divider>
  </v-lazy>
</template>

<script>
export default {
  name: "ObjetMagique",
  props: ["objet"]
};
</script>
