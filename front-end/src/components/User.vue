<template>
<div class="my-5">
<h1 class="grey--text">List des patients</h1>
  <v-container class="grey lighten-5 ">
        <v-data-table
          fixed-header
          :headers="headers"
          :items="patients"
          :items-per-page="50"
          class="elevation-1"
        ></v-data-table>
  </v-container>
</div>
  
</template>

<script>
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
      patients: this.patients,
    };
  },

  methods: {
    fetchUsers: function () {
      const baseURI = "http://localhost:5000/api/1.0/patient/all";
      this.$http
        .get(baseURI)
        .then((res) => {
          this.patients = res.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    methods: {
     
    }
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>
