<template>
  <div>
    <v-container class="grey lighten-5 mb-6 mt-1" fluid>
      <v-row no-gutters dense class="mb-2">
        <v-col xs="12" sm="6" md="6" lg="6" xl="3" class="px-2">
          <v-card class="pa-2" outlined tile>
            <v-card-title>Patients par age</v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col xs="12" sm="6" md="6" lg="6" xl="3" class="px-2">
          <v-card class="pa-2" outlined tile>
            <v-card-title>Nombre de patient par genre</v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row no-gutters dense class="mt-4">
        <v-col class="px-2">
          <v-card class="pa-2" outlined tile>
            <v-card-title>Liste des tests positifs du jour</v-card-title>

            <v-data-table
              height="250px"
              fixed-header
              :headers="headers"
              :items="dailyTests"
              :items-per-page="itemPerPage"
              class="elevation-1"
            >
            </v-data-table>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { Bar } from "vue-chartjs";

export default {
  Bar,
  name: "Dashboard",
  components: {},
  data() {
    return {
      headers: [
        {text: "Date", align: "start", sortable: false,value: "date" },
        { text: "ID échantillon", value: "sampleId" },
        { text: "Résultat", value: "result" }
      ],
      dailyTests: this.dailyTests,
      itemPerPage: 10,
      dialog: false,
      dialogDelete: false,
    };
  },

  methods: {
    fetchTests: function () {
      const baseURI = "http://localhost:5000/api/1.0/test/day";
      this.$http
        .get(baseURI)
        .then((res) => {
          this.dailyTests = res.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    methods: {},
  },
  mounted() {
    this.fetchTests();
  },
};
</script>
