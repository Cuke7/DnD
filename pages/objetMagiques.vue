<template>
  <v-container id="banner" ref="container">
    <h1 class="text-center">Le marché aux objets magiques</h1>
    <v-card class="pa-5 my-4" color="rgb(255, 255, 255, 0.2)">
      <v-row align="center" justify="space-around">
        <v-col cols="10">
          <v-text-field
            label="Chercher un objet magique"
            v-model="search"
            color="primary"
            autocomplete="off"
            @keydown.enter="searchItem"
            hide-details
            append-icon="mdi-magnify"
            @click:append="searchItem"
            ref="searchElement"
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
      <v-card-subtitle>
        {{ sorted_results.length }} objets trouvés.
      </v-card-subtitle>
    </v-card>

    <ObjetMagique
      :objet="result.item"
      v-for="(result, index) in sorted_results"
      v-bind:key="index"
      class="pa-2"
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
      class="fab"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import ObjetMagique from "~/components/ObjetMagique.vue";
const fuzzysort = require("fuzzysort");
const { fuzzy, Searcher } = require("fast-fuzzy");

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
    sorted_results: []
  }),
  computed: {
    mySearcher() {
      console.log("In searcher");
      return new Searcher(this.filtered_results, {
        keySelector: obj => obj.nom
      });
    },
    // Applay filters
    filtered_results() {
      //console.log("In filter results");
      let checker = (arr, target) => target.every(v => arr.includes(v));
      return this.$store.state.data_magical_items.filter(item =>
        checker(item.code, this.filters)
      );
    },
    // Aplly fuzzy search
    // sorted_results() {
    //   //console.log("In sorted results");
    //   if (this.search) {
    //     return fuzzysort
    //       .go(this.search, this.filtered_results, {
    //         key: "nom"
    //       })
    //       .map(a => a.obj);
    //   } else {
    //     return this.filtered_results;
    //   }
    // },
    filters() {
      return [this.rarete, this.type].filter(function(el) {
        return el;
      });
    }
  },
  watch: {
    search: function(search) {
      this.$store.state.search_query = search;
    },
    rarete: function(rarete) {
      this.$store.state.rarete = rarete;
    },
    type: function(type) {
      this.$store.state.type = type;
    }
  },
  methods: {
    searchItem() {
      this.$refs.searchElement.blur();
      if (this.search) {
        this.show = false;
        this.sorted_results = this.mySearcher.search(this.search, {
          returnMatchData: true
        });
      } else {
        this.show = false;
        this.sorted_results = this.filtered_results.map(a => {
          return { item: a };
        });
      }
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 1500;
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
      this.rarete = this.$store.state.rarete;
      this.type = this.$store.state.type;
      this.searchItem();
    });
  }
};
</script>

<style>
.subtitle {
  color: #6d0000 !important;
}
.fab {
  bottom: 75px !important;
}
</style>
