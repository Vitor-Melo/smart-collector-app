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
                >mdi-file-document-plus-outline</v-icon
              >
              <v-card-text
                color="primary"
                class="font-weight-medium text-center text-subtitle-1 primary--text"
              >
                Cadastre o dispositivo
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </template>
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar color="primary" dark>Escolha uma opção</v-toolbar>
          <v-card-text class="text-center">
            <v-btn color="primary" dark class="ma-2" @click="requestExample()">
              Planilha Exemplo
            </v-btn>
            <input
              id="fileUpload"
              type="file"
              hidden
              @change="requestImport()"
            />
            <v-btn color="primary" dark class="ma-2" @click="chooseFile()">
              Importar planilha
            </v-btn>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog.value = false">Fechar</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-col>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";

export default Vue.extend({
  name: "BlockWidgets",

  data: () => ({}),
  computed: {},
  methods: {
    next() {
      alert("You clicked next!");
    },
    async requestExample() {
      await axios
        .get("export-csv", { responseType: "blob" })
        .then((response) => {
          const href = URL.createObjectURL(response.data);
          const link = document.createElement("a");
          link.href = href;
          link.setAttribute("download", "planilha-exemplo.csv"); //or any other extension
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(href);
        });
    },
    async chooseFile() {
      document?.getElementById("fileUpload").click();
    },
    async requestImport() {
      var csv = document.getElementById("fileUpload");
      if (csv.files.length === 0) {
        return;
      }

      if (csv.files.lenght > 1) {
        this.$toast.info("É Permitido somente 1 arquivo por vez.");
        return;
      }

      if (csv.files[0].type !== "text/csv") {
        this.$toast.info("Somente arquivo tipo CSV é permitido");
        return;
      }

      var formData = new FormData();
      formData.append("file", csv?.files[0]);
      await axios
        .post("import-csv", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => this.$toast.success(data.data))
        .catch(() =>
          this.$toast.error("Não foi possível cadastrar dispositivo")
        );
    },
  },
});
</script>

<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
