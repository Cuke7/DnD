import data from "~/static/magical_objects_V2.json";
const fuzzysort = require("fuzzysort");

export const state = () => ({
  counter: 0,
  data_magical_items: data
});

export const getters = {
  get_selected_item: state => nom => {
    return state.data_magical_items.find(item => item.nom === nom);
  },
  get_filtered_list: state => (filters, search) => {
    let out = [];
    let checker = (arr, target) => target.every(v => arr.includes(v));
    let found = (arr1, arr2) => arr1.some(r => arr2.indexOf(r) >= 0);
    out = state.data_magical_items.filter(item => checker(item.code, filters));

    if (search) {
      return fuzzysort
        .go(search, out, {
          key: "nom"
        })
        .map(a => a.obj);
    } else {
      return out;
    }
  }
};
