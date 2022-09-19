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

    <v-btn text @click="$emit('modalLogin')">
      <span class="mr-2">Entrar</span>
      <v-icon>mdi-login</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeaderMain",

  data: () => ({}),
  methods: {},
});
</script>
