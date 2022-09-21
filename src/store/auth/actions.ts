import { Login, loginUser, logOutUser } from "@/http/auth.http";
import { ActionTree } from "vuex";
import RootState from "../types";
import { AuthencationMutations } from "./mutations";
import { AuthenticationState } from "./types";

export const actions: ActionTree<AuthenticationState, RootState> = {
  async login({ commit }, login: Login): Promise<boolean> {
    let user;
    await loginUser(login).then((resp) => {
      if (resp.status === 200) {
        user = resp.data;
        return;
      }
      commit(AuthencationMutations.SET_LOGGED_USER, false);
    });
    commit(AuthencationMutations.SET_LOGGED_USER, true);
    commit(AuthencationMutations.SET_USER, user);
    return true;
  },
  async logOut({ commit }): Promise<any> {
    return await logOutUser().then(() => {
      commit(AuthencationMutations.SET_LOGGED_USER, false);
      commit(AuthencationMutations.SET_USER, null);
    });
  },
};
