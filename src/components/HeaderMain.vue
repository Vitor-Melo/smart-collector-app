<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink ml-4"
        contain
        src="../assets/smart-colletor.svg"
        transition="scale-transition"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn text v-if="!loggedUser" @click="$emit('modalRegister')">
      <span class="mr-2">Registre-se</span>
      <v-icon>mdi-account-plus-outline</v-icon>
    </v-btn>
    |
    <v-btn text @click="$emit('modalLogin', loggedUser)">
      <span class="mr-2">{{ loggedUser === false ? "Entrar" : "Sair" }}</span>
      <v-icon>mdi-login</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeaderMain",

  data: () => ({}),
  computed: {
    loggedUser: {
      get(): boolean {
        return this.$store.getters.loggedUser;
      },
    },
  },
  methods: {},
});
</script>
