<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1 class="display-2 font-weight-bold mb-3 primary--text">
          <container-main v-if="loggedUser"></container-main>
          {{ !loggedUser ? "Bem vindo ao Smart Collector" : "" }}
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ContainerMain from "./ContainerMain.vue";

export default Vue.extend({
  name: "HelloWorld",

  components: {
    ContainerMain,
  },
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
