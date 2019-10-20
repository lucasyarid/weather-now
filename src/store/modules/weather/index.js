import state from "./state.weather";
import getters from "./getters.weather";
import mutations from "./mutations.weather";
import actions from "./actions.weather";

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
