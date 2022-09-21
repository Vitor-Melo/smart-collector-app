<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1 class="display-2 font-weight-bold mb-3">
          {{
            loggedUser
              ? "Bem vindo ao Smart Collector, obrigado por comprar"
              : "Compre o Smart Collector"
          }}
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  computed: {
    loggedUser: {
      get() {
        return this.$store.getters.loggedUser;
      },
    },
  },
  data: () => ({}),
});
</script>
