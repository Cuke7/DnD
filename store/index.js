import data_magical_items from "~/static/data/magical_objects.json";
const fuzzysort = require("fuzzysort");

export const state = () => ({
  counter: 0,
  data_magical_items: data_magical_items,
  filters: []
});

export const getters = {
  get_selected_item: state => nom => {
    return state.data_magical_items.find(item => item.nom === nom);
  }
};
