<template>
  <div class="my-5">
    <v-container class="grey lighten-5">
      <v-data-table
        height="350px"
        fixed-header
        :headers="headers"
        :items="patients"
        :items-per-page="itemPerPage"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>List des patients</v-toolbar-title>
            <v-divider class="mx-4" inset vertical> </v-divider>
            <v-spacer></v-spacer>

            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" small dark class="mb-2" v-bind="attrs" v-on="on">
                  Nouveau Patient
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Nouveau Patient</span>
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
export default {
  data() {
    return {
      headers: [
        {
          text: "Nom",
          align: "start",
          sortable: false,
          value: "firstName",
        },
        { text: "Prénom", value: "lastName" },
        { text: "Age", value: "age" },
        { text: "Genre", value: "gender" },
      ],
      itemPerPage: 10,
      dialog: false,
      dialogDelete: false,
    };
  },
  computed: {
    ...mapState("patients", ["patients"]),
    ...mapState("app", ["loading"]),
  },
  mounted() {
    this.$store.dispatch("patients/getPatients");
  },
};
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */
#lateral .v-btn-e {
  bottom: 0;
  position: absolute;
  margin: 0 0 46px 46px;
}
</style>
