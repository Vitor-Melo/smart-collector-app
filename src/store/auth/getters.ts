import { GetterTree } from "vuex";
import RootState from "../types";
import { AuthenticationState } from "./types";

export const getters: GetterTree<AuthenticationState, RootState> = {
  loggedUser(state): boolean {
    return state.loggedUser;
  },
  getUserLogged(state): any {
    return state.me;
  },
};
