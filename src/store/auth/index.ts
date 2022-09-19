import { Module } from "vuex";
import RootState from "../types";
import { AuthenticationState } from "./types";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

const state: AuthenticationState = {
  me: null,
  loggedUser: false,
};

export const authentication: Module<AuthenticationState, RootState> = {
  state,
  actions,
  mutations,
  getters,
};
