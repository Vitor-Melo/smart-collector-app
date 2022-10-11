<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1 class="display-2 font-weight-bold mb-3">
          <block-widgets v-if="loggedUser"></block-widgets>
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import BlockWidgets from "./BlockWidgets.vue";

export default Vue.extend({
  name: "HelloWorld",

  components: {
    BlockWidgets,
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
