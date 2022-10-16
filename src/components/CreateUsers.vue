<template>
  <v-col cols="auto">
    <v-dialog transition="dialog-bottom-transition" max-width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-col>
          <v-hover v-slot="{ hover }" close-delay="200">
            <v-card
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class="mx-auto"
              height="150"
              max-width="150"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon x-large color="primary" class="mt-6"
                >mdi-account-plus-outline</v-icon
              >
              <v-card-text
                color="primary"
                class="font-weight-medium text-center text-subtitle-1 primary--text"
              >
                Cadastre usuário
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-dialog>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CreateUsers",

  data: () => ({}),
  computed: {},
  methods: {
    next() {
      alert("You clicked next!");
    },
  },
});
</script>
