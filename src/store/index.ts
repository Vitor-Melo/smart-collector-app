import Vue from "vue";
import Vuex from "vuex";
import { authentication } from "./auth/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { authentication },
});
