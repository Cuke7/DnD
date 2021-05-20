<template>
  <v-container>
    <div class="bloc pa-2">
      <h1 class="my-6">{{ selected_item.nom }}</h1>
      <div class="ma-3" style="font-weight: bold;">
        École : {{ selected_item.ecole }}, sort de niveau
        {{ selected_item.level }}.
      </div>
      <div class="ma-3" style="font-weight: bold;">
        {{ selected_item.incantation }}.
      </div>
      <div v-if="selected_item.rituel" class="mb-6" style="font-weight: bold;">
        Nécessite un rituel.
      </div>
      <div
        v-if="selected_item.concentration"
        class="ma-3"
        style="font-weight: bold;"
      >
        Concentration nécessaire.
      </div>
      <div v-html="selected_item.description"></div>
    </div>
  </v-container>
</template>

<script>
export default {
  layout: "subpage",
  data: () => ({
    //
  }),
  computed: {
    selected_item() {
      this.$store.commit("changeSubtitle", this.spell);
      return this.$store.getters.get_selected_spell(this.spell);
    }
  },
  async asyncData({ params }) {
    const spell = params.spell; // When calling /abc the slug will be "abc"
    return { spell };
  }
};
</script>

<style>
.bloc {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.1rem;
}

.bloc h1 {
  padding: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #6d0000;
  font-size: 1.4rem;
  line-height: 1;
  font-weight: bold;
  break-after: avoid;
}

.bloc table {
  margin-top: 6px;
  border-spacing: 0;
  font-family: arial, sans-serif;
  font-size: 1.1rem;
}
.bloc table tr:nth-child(even) {
  background-color: #ffe0d0;
}
.bloc table th {
  font-weight: bold;
  vertical-align: bottom;
}
.bloc table td {
  vertical-align: top;
}
.bloc table th,
.bloc table td {
  min-width: 40px;
  padding: 2px 6px 2px 4px;
  text-align: left;
}
.bloc table th.center,
.bloc table td.center {
  text-align: center;
}
.bloc table td.center {
  text-align: center;
}
</style>
