<template>
  <div>
    <div id="app" class="container border shadow mb-4">
      <h3 class="mt-3">Add traceability</h3>
      <hr />
      <div class="row mb-3">
        <div class="col">
          <label>Id trazabilidad</label>
          <input
            type="text"
            class="form-control"
            maxlength="7"
            v-model="id_trazabilidad"
          />
        </div>
        <div class="col">
          <label>Id prueba</label>
          <input type="text" class="form-control" v-model="id_prueba" />
        </div>
        <div class="col">
          <label>Correo</label>
          <input type="email" class="form-control" v-model="correo" />
        </div>
      </div>
      <button class="btn btn-info mr-3" @click="submitForm">
        Add traceability
      </button>
      <button class="btn btn-warning mr-3" @click="updateForm">
        Update traceability
      </button>
      <button class="btn btn-danger mr-3" @click="deleteForm">
        Delete traceability
      </button>
      <hr />

      <div class="row mb-5">
        <div class="col overflow-auto ">
          <table
            id="user-table"
            class="table display table-hover nowrap"
            cellspacing="0"
            width="100%"
          >
            <thead class="thead-dark">
              <tr>
                <th>Trazabilidad ID</th>
                <th>Id prueba</th>
                <th>Correo</th>
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
  name: "Trazabilidad",
  data() {
    return {
      id_trazabilidad: "",
      id_prueba: "",
      correo: "",
      dataTable: null,
    };
  },
  methods: {
    submitForm() {
      axios
        .post("https://proyecto-tedw.herokuapp.com/traz", {
          id_prueba: this.id_prueba,
          correo: this.correo,
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
      location.reload();
    },
    deleteForm() {
      axios({
        method: "delete",
        url: "https://proyecto-tedw.herokuapp.com/traz/" + this.id_trazabilidad,
        data: {
          id_prueba: this.id_prueba,
          correo: this.correo,
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
          "https://proyecto-tedw.herokuapp.com/traz/" + this.id_trazabilidad,
          {
            id_prueba: this.id_prueba,
            correo: this.correo,
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
    let trazabilidades = [];

    this.dataTable = $("#user-table").DataTable({});
    const url = "https://proyecto-tedw.herokuapp.com/traz";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          trazabilidades.push(item);
        });
        trazabilidades.forEach((trazabilidad) => {
          this.dataTable.row
            .add([
              trazabilidad.id_trazabilidad,
              trazabilidad.id_prueba,
              trazabilidad.correo,
            ])
            .draw(false);
        });
      });
  },
};
</script>

<style scoped></style>
