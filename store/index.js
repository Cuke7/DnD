import data_magical_items from "~/static/data/magical_objects.json";
import data_spells from "~/static/data/spells.json";

export const state = () => ({
  counter: 0,
  data_magical_items: data_magical_items,
  data_spells: data_spells,
  subtitle: ""
});

export const getters = {
  get_selected_item: state => nom => {
    return state.data_magical_items.find(item => item.nom === nom);
  },
  get_selected_spell: state => nom => {
    return state.data_spells.find(spell => spell.nom === nom);
  }
};

export const mutations = {
  changeSubtitle(state, value) {
    state.subtitle = value;
  }
};
