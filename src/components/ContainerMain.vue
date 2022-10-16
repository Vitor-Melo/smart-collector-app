<template>
  <v-row>
    <v-row justify="space-around">
      <block-widgets></block-widgets>
      <create-users></create-users>
      <list-garbage></list-garbage>
    </v-row>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import BlockWidgets from "./BlockWidgets.vue";
import CreateUsers from "./CreateUsers.vue";
import ListGarbage from "./ListGarbage.vue";

export default Vue.extend({
  name: "ContainerMain",

  components: {
    BlockWidgets,
    CreateUsers,
    ListGarbage,
  },
  data: () => ({}),
  computed: {},
  methods: {},
});
</script>
