<template>
  <div class="my-5">
    <v-container class="grey lighten-5">
      <v-data-table
        height="350px"
        fixed-header
        :headers="headers"
        :items="tests"
        :items-per-page="50"
        class="elevation-1"
      >

        <template v-slot:top   v-slot:item.date="{ item }" >
        {{ formatDate(item.date) }}
          <v-toolbar flat>
            <v-toolbar-title>Liste des tests du jour</v-toolbar-title>
            <v-divider class="mx-4" inset vertical> </v-divider>
            <v-spacer></v-spacer>

            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" small dark class="mb-2" v-bind="attrs" v-on="on">
                  Nouveau test
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Nouveau test</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Dessert name"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Calories"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Fat (g)"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Carbs (g)"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Protein (g)"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text> Cancel </v-btn>
                  <v-btn color="blue darken-1" text> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5"
                  >Are you sure you want to delete this item?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text>Cancel</v-btn>
                  <v-btn color="blue darken-1" text>OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {moment} from "moment";

export default {
  data() {
    return {
      headers: [
        {
          text: "Sample ID",
          align: "start",
          value: "sampleId",
        },
        { text: "Date", value: "date" },
        { text: "Patient", value: "PatientId" },
        { text: "Resultat", value: "result" },
      ],
    };
  },

  computed: {
    ...mapState("tests", ["tests"]),
    ...mapState("app", ["loading"]),
  },
  mounted() {
    this.$store.dispatch("tests/getTests");
  },
  methods: {
    formatDate(value) {
      return moment(value).format("MMMM DD YYYY");
    },
  },
};
</script>
