import { MutationTree } from "vuex";
import { AuthenticationState } from "./types";

export enum AuthencationMutations {
  SET_LOGGED_USER = "SET_LOGGED_USER",
  SET_USER = "SET_USER",
  SET_SERVICES = "SET_SERVICES",
}

export const mutations: MutationTree<AuthenticationState> = {
  [AuthencationMutations.SET_LOGGED_USER](state, value: boolean) {
    state.loggedUser = value;
  },
  [AuthencationMutations.SET_USER](state, payload: any) {
    state.me = payload;
  },
};
