<template>
  <v-app>
    <HeaderMain @modalLogin="getModal()" />
    <FormLogin
      :dialog="showModal"
      @closeModal="closeModal()"
      @saveModal="saveModal()"
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
import axios from "axios";

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
    getModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    saveModal() {
      axios.defaults.withCredentials = true;

      axios
        .get("http://localhost/sanctum/csrf-cookie")
        .then((response) => {
          axios
            .post("http://localhost/login", {
              email: "admin@admin.com",
              password: "admin",
            })
            .then((response) => {
              axios
                .get("http://localhost/me")
                .then((re) => console.log(re))
                .catch((re) => console.log(re));
            })
            .catch((resp) => console.log(resp));
        })
        .catch((resp) => console.log(resp));
      this.showModal = false;
    },
  },
});
</script>
