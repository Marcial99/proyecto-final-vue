<template>
  <div>
    <div id="app" class="container border shadow mb-4">
      <h3 class="mt-3">Add career</h3>
      <hr />
      <div class="row mb-3">
        <div class="col">
          <label>Carrera ID</label>
          <input type="text" class="form-control" v-model="id_carrera" />
        </div>
        <div class="col">
          <label>Carrera nombre</label>
          <input type="text" class="form-control" v-model="carrera" />
        </div>
        <div class="col">
          <label>Carrera clave</label>
          <input type="text" class="form-control" v-model="clv_carrera" />
        </div>
      </div>
      <button class="btn btn-info mr-4" @click="submitForm">Add career</button>
      <button class="btn btn-danger mr-4" @click="deleteForm">
        Delete career
      </button>
      <button class="btn btn-warning mr-4" @click="updateForm">
        Update career
      </button>
      <hr />
      <div class="row mb-5">
        <div class="col overflow-auto">
          <table
            id="user-table"
            class="table display table-hover nowrap"
            cellspacing="0"
            width="100%"
          >
            <thead class="thead-dark">
              <tr>
                <th>Carrera ID</th>
                <th>Carrera Name</th>
                <th>Carrera key</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Carrera",
  data() {
    return {
      id_carrera: "",
      carrera: "",
      clv_carrera: "",
      dataTable: null,
    };
  },
  methods: {
    addCareer() {
      this.dataTable.row
        .add([
          this.id_carrera,
          '<a href="#">' + this.carrera + "</a>",
          this.clv_carrera,
        ])
        .draw(false);
      this.id_carrera = "";
      this.carrera = "";
      this.clv_carrera = "";
    },
    submitForm() {
      axios
        .post("https://proyecto-tedw.herokuapp.com/carreras", {
          carrera: this.carrera,
          clv_carrera: this.clv_carrera,
        })
        .then(function(response) {
          console.log(response);
          location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });
      this.$toast.open({
        message: "registro existoso recarga la pagina",
        type: "success",
        duration: 5000,
        dismissible: true,
      });
      // location.reload();
    },
    deleteForm() {
      axios({
        method: "delete",
        url: "https://proyecto-tedw.herokuapp.com/carreras/" + this.id_carrera,
        data: {
          carrera: this.carrera,
          clv_carrera: this.clv_carrera,
        },
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      this.$toast.open({
        message: "borrado existoso recarga la pagina",
        type: "error",
        duration: 5000,
        dismissible: true,
      });
      setTimeout(location.reload, 5000);
      // location.reload();
    },
    updateForm() {
      axios
        .put(
          "https://proyecto-tedw.herokuapp.com/carreras/" + this.id_carrera,
          {
            carrera: this.carrera,
            clv_carrera: this.clv_carrera,
          }
        )
        .then(function(response) {
          console.log(response);
          location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });
      this.$toast.open({
        message: "actualizacion existosa recarga la pagina",
        type: "warning",
        duration: 5000,
        dismissible: true,
      });
    },
  },
  mounted() {
    let carreras = [];

    this.dataTable = $("#user-table").DataTable({});
    const url = "https://proyecto-tedw.herokuapp.com/carreras";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          carreras.push(item);
        });
        carreras.forEach((carrera) => {
          this.dataTable.row
            .add([carrera.id_carrera, carrera.carrera, carrera.clv_carrera])
            .draw(false);
        });
      });
  },
};
</script>

<style scoped></style>
