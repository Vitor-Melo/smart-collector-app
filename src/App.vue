<template>
  <v-app>
    <HeaderMain @modalLogin="getModal" @modalRegister="getModalRegister" />
    <FormLogin
      :dialog="showModal"
      @closeModal="closeModal()"
      @saveModal="saveModal"
    />
    <FormRegister
      :dialog="showModalRegister"
      @closeModalRegister="closeModalRegister()"
      @saveModalRegister="saveModalRegister"
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
import FormRegister from "./components/FormRegister.vue";
import { Login, registerUser } from "./http/auth.http";

export default Vue.extend({
  name: "App",

  components: {
    HeaderMain,
    FormLogin,
    FormRegister,
  },
  data: () => ({
    showModal: false,
    showModalRegister: false,
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
    getModalRegister(value: any) {
      this.showModalRegister = true;
    },
    closeModalRegister() {
      this.showModalRegister = false;
    },
    saveModalRegister(register: any) {
      this.$store
        .dispatch("registerUser", register)
        .then(() => {
          this.$toast.success("Cadastro efetuado com sucesso!");
        })
        .catch(() => {
          this.$toast.error("Não foi possível efetuar o cadastro");
        });
      this.showModalRegister = false;
    },
  },
});
</script>
