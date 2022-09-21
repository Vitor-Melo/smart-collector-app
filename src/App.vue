<template>
  <v-app>
    <HeaderMain @modalLogin="getModal" />
    <FormLogin
      :dialog="showModal"
      @closeModal="closeModal()"
      @saveModal="saveModal"
    />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderMain from "./components/HeaderMain.vue";
import FormLogin from "./components/FormLogin.vue";
import { Login } from "./http/auth.http";

export default Vue.extend({
  name: "App",

  components: {
    HeaderMain,
    FormLogin,
  },
  data: () => ({
    showModal: false,
  }),
  methods: {
    getModal(value: any) {
      if (value) {
        this.$store.dispatch("logOut");
        return;
      }

      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    saveModal(login: Login) {
      this.$store
        .dispatch("login", login)
        .then(() => {
          this.$toast.success("Login efetuado com sucesso!");
        })
        .catch(() => {
          this.$toast.error("Email/Senha incorreto!");
        });
      this.showModal = false;
    },
  },
});
</script>
