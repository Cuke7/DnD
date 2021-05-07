import data from "~/static/magical_objects_V2.json";
const fuzzysort = require("fuzzysort");

export const state = () => ({
  counter: 0,
  data_magical_items: data
});

export const getters = {
  get_selected_item: state => nom => {
    return state.data_magical_items.find(item => item.nom === nom);
  }
};
