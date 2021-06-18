<template>
  <v-container id="banner" ref="container">
    <h1 class="text-center">Le grimoire du magicien</h1>
    <v-card class="pa-5 my-4" color="rgb(255, 255, 255, 0.2)">
      <v-row align="center" justify="space-around">
        <v-col cols="10">
          <v-text-field
            label="Chercher un sort"
            v-model="search"
            color="primary"
            autocomplete="off"
            @keydown.enter="searchSpell"
            append-icon="mdi-magnify"
            @click:append="searchSpell"
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
            Classe
          </v-card-subtitle>

          <v-chip-group v-model="classe" column>
            <v-chip filter outlined value="Barde">Barde</v-chip>
            <v-chip filter outlined value="Clerc">Clerc</v-chip>
            <v-chip filter outlined value="Druide">Druide</v-chip>
            <v-chip filter outlined value="Ensorceleur">Ensorceleur</v-chip>
            <v-chip filter outlined value="Magicien">Magicien</v-chip>
            <v-chip filter outlined value="Paladin">Paladin</v-chip>
            <v-chip filter outlined value="Rôdeur">Rôdeur</v-chip>
            <v-chip filter outlined value="Sorcier">Sorcier</v-chip>
            <v-chip filter outlined value="Artificier">Artificier</v-chip>
          </v-chip-group>

          <v-card-subtitle class="subtitle">
            École de magie
          </v-card-subtitle>

          <v-chip-group v-model="ecole" column>
            <v-chip filter outlined value="abjuration">
              Abjuration
            </v-chip>
            <v-chip filter outlined value="divination">
              Divination
            </v-chip>
            <v-chip filter outlined value="enchantement">
              Enchantement
            </v-chip>
            <v-chip filter outlined value="évocation">
              Évocation
            </v-chip>
            <v-chip filter outlined value="illusion">
              Illusion
            </v-chip>
            <v-chip filter outlined value="invocation">
              Invocation
            </v-chip>
            <v-chip filter outlined value="nécromancie">
              Nécromancie
            </v-chip>
            <v-chip filter outlined value="transmutation">
              Transmutation
            </v-chip>
          </v-chip-group>

          <v-card-subtitle class="subtitle">
            Niveau du sort
          </v-card-subtitle>

          <v-chip-group v-model="level" column>
            <v-chip
              v-for="n in 10"
              v-bind:key="n"
              filter
              outlined
              v-bind:value="n - 1 + ''"
            >
              {{ n - 1 }}
            </v-chip>
          </v-chip-group>
        </div>
      </v-expand-transition>
      <v-card-subtitle>
        {{ sorted_results.length }} sorts trouvé(s).
      </v-card-subtitle>
    </v-card>

    <Spell
      v-for="(result, index) in sorted_results"
      :objet="result.item"
      v-bind:key="index"
      class="pa-2"
    ></Spell>

    <!-- <v-list-item v-for="(result, index) in sorted_results" v-bind:key="index">
      <NuxtLink v-bind:to="'/spell/' + result.nom">{{ result.nom }}</NuxtLink>
    </v-list-item> -->

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
import Spell from "~/components/Spell.vue";
const fuzzysort = require("fuzzysort");
const { fuzzy, Searcher } = require("fast-fuzzy");

export default {
  components: {
    Spell
  },
  data: () => ({
    search: "",
    show: false,
    level: null,
    ecole: null,
    classe: null,
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
    // Apply filters
    filtered_results() {
      //console.log("In filter results");
      let checker = (arr, target) => target.every(v => arr.includes(v));
      return this.$store.state.data_spells.filter(spell =>
        checker(spell.code, this.filters)
      );
    },
    // Aplly fuzzy search
    // sorted_results() {
    //console.log("In sorted results");
    // if (this.search) {
    //   return fuzzysort
    //     .go(this.search, this.filtered_results, {
    //       key: "nom"
    //     })
    //     .map(a => a.obj);
    // } else {
    //   return this.filtered_results;
    // }
    // },
    filters() {
      console.log("filters");
      return [this.classe, this.ecole, this.level].filter(function(el) {
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
    searchSpell() {
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
      this.searchSpell();
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
