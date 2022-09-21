import Vue from "vue";
import Vuex from "vuex";
import { authentication } from "./auth/index";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { authentication },
  plugins: [createPersistedState()],
});
