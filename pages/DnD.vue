<template>
  <v-container id="banner" fluid>
    <v-card class="mx-1 my-3 pa-5" color="rgb(255, 255, 255, 0.1)">
      <v-row align="center" justify="space-around">
        <v-col cols="10">
          <v-text-field
            label="Chercher un objet magique"
            v-model="search"
            color="primary"
            autocomplete="off"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" justify="space-between">
        <v-col cols="auto">
          <v-card-title class="subtitle">Filtrer les résultats</v-card-title>
        </v-col>
        <v-col cols="auto">
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-subtitle class="subtitle">
            Rareté
          </v-card-subtitle>

          <v-chip-group v-model="rarete" column>
            <v-chip filter outlined value="A">
              Commun
            </v-chip>
            <v-chip filter outlined value="B">
              Peu commun
            </v-chip>
            <v-chip filter outlined value="C">
              Rare
            </v-chip>
            <v-chip filter outlined value="D">
              Très rare
            </v-chip>
            <v-chip filter outlined value="E">
              Légenfaire
            </v-chip>
            <v-chip filter outlined value="F">
              Artéfact
            </v-chip>
          </v-chip-group>

          <v-card-subtitle class="subtitle">
            Emplacement
          </v-card-subtitle>

          <v-chip-group v-model="type" column>
            <v-chip filter outlined value="G">
              Anneau
            </v-chip>
            <v-chip filter outlined value="H">
              Arme
            </v-chip>
            <v-chip filter outlined value="I">
              Armure
            </v-chip>
            <v-chip filter outlined value="J">
              Baguette
            </v-chip>
            <v-chip filter outlined value="K">
              Bâton
            </v-chip>
            <v-chip filter outlined value="L">
              Objet merveilleux
            </v-chip>
            <v-chip filter outlined value="M">
              Parchemin
            </v-chip>
            <v-chip filter outlined value="N">
              Potion
            </v-chip>
            <v-chip filter outlined value="O">
              Sceptre
            </v-chip>
          </v-chip-group>
        </div>
      </v-expand-transition>
    </v-card>
    <v-card-subtitle>
      {{ sorted_results.length }} objets trouvés :
    </v-card-subtitle>

    <ObjetMagique
      :objet="result"
      v-for="(result, index) in sorted_results"
      v-bind:key="index"
      class="mx-1 pa-2"
    ></ObjetMagique>

    <v-btn
      fab
      v-scroll="onScroll"
      fixed
      bottom
      right
      @click="toTop"
      v-show="fab"
      color="primary"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import ObjetMagique from "~/components/ObjetMagique.vue";
const fuzzysort = require("fuzzysort");

export default {
  components: {
    ObjetMagique
  },
  data: () => ({
    search: "",
    show: false,
    rarete: null,
    type: "",
    fab: false,
    LevImplementation: true
  }),
  computed: {
    // Applay filters
    filtered_results() {
      //console.log("In filter results");
      let checker = (arr, target) => target.every(v => arr.includes(v));
      return this.$store.state.data_magical_items.filter(item =>
        checker(item.code, this.filters)
      );
    },
    // Aplly fuzzy search
    sorted_results() {
      //console.log("In sorted results");
      if (this.search) {
        return fuzzysort
          .go(this.search, this.filtered_results, {
            key: "nom"
          })
          .map(a => a.obj);
      } else {
        return this.filtered_results;
      }
    },
    filters() {
      return [this.rarete, this.type].filter(function(el) {
        return el;
      });
    }
  },
  watch: {
    search: function(search) {
      this.$store.state.search_query = search;
    }
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 50;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
      this.search = this.$store.state.search_query;
    });
  }
};
</script>

<style>
.subtitle {
  color: #6d0000 !important;
}
</style>
