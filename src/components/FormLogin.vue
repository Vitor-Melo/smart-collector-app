<template>
  <v-row justify="center">
    <v-dialog :value="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Entrar</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Primeiro Nome*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Ultimo nome*"
                  hint="example of persistent helper text"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Senha*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('closeModal')">
            Cancelar
          </v-btn>
          <v-btn color="blue darken-1" text @click="$emit('saveModal')">
            Entrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FormLogin",

  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
});
</script>
