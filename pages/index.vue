<template>
  <v-container>
    <h1 class="text-center my-4">La croisée des chemins</h1>
    <!-- <v-card-title class="pl-0 pt-0">Quelques liens utiles...</v-card-title> -->
    <v-row>
      <v-col cols="12" lg="6" v-for="(link, index) in links" v-bind:key="index">
        <v-card v-if="link.color" color="rgb(55, 0, 0, 0.2)" class="pa-4">
          <a :href="link.link">{{ link.nom }} sur Aidedd</a>
        </v-card>
        <v-card v-else color="rgb(255, 255, 255, 0.2)" class="pa-4">
          <a :href="link.link">{{ link.nom }} sur Aidedd</a>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    //VuetifyLogo
  },
  data: () => ({
    links: [
      // {
      //   nom: "Barbare",
      //   link: "https://www.aidedd.org/regles/classes/barbare/"
      // },
      // {
      //   nom: "Barde",
      //   link: "https://www.aidedd.org/regles/classes/barde/"
      // },
      // {
      //   nom: "Clerc",
      //   link: "https://www.aidedd.org/regles/classes/clerc/"
      // }
      {
        nom: "Druide",
        link: "https://www.aidedd.org/regles/classes/druide/"
      },
      // {
      //   nom: "Ensorceleur",
      //   link: "https://www.aidedd.org/regles/classes/ensorceleur/"
      // },
      {
        nom: "Guerrier",
        link: "https://www.aidedd.org/regles/classes/guerrier/"
      },
      // {
      //   nom: "Magicien",
      //   link: "https://www.aidedd.org/regles/classes/magicien/"
      // },
      // {
      //   nom: "Moine",
      //   link: "https://www.aidedd.org/regles/classes/moine/"
      // },
      {
        nom: "Paladin",
        link: "https://www.aidedd.org/regles/classes/paladin/"
      },
      // {
      //   nom: "Rôdeur",
      //   link: "https://www.aidedd.org/regles/classes/rodeur/"
      // },
      // {
      //   nom: "Roublard",
      //   link: "https://www.aidedd.org/regles/classes/Roublard/"
      // },
      {
        nom: "Sorcier",
        link: "https://www.aidedd.org/regles/classes/Sorcier/"
      },
      {
        nom: "Dons",
        link: "https://www.aidedd.org/dnd-filters/dons.php",
        color: "red"
      },
      {
        nom: "Sorts",
        link: "https://www.aidedd.org/dnd-filters/sorts.php",
        color: "red"
      },
      {
        nom: "Armes",
        link: "https://www.aidedd.org/regles/equipement/armes/",
        color: "red"
      },
      {
        nom: "Armures",
        link: "https://www.aidedd.org/regles/equipement/armures/",
        color: "red"
      },
      {
        nom: "Matériel",
        link: "https://www.aidedd.org/regles/equipement/materiel/",
        color: "red"
      },
      {
        nom: "Outils",
        link: "https://www.aidedd.org/regles/equipement/outils/",
        color: "red"
      }
    ]
  }),
  methods: {}
};
</script>
