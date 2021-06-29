<template>
  <div>
    <div id="app" class="container border shadow mb-4">
      <h3 class="mt-3">Add Medic</h3>
      <hr />
      <div class="row mb-3">
        <div class="col">
          <label>Id medico</label>
          <input type="text" class="form-control" v-model="id_medico" />
        </div>
        <div class="col">
          <label>Cedula</label>
          <input
            type="text"
            class="form-control"
            maxlength="7"
            v-model="cedula"
          />
        </div>
        <div class="col">
          <label>Nombre</label>
          <input
            type="text"
            class="form-control"
            maxlength="30"
            v-model="nombre"
          />
        </div>
        <div class="col">
          <label>Apellido paterno</label>
          <input
            type="text"
            class="form-control"
            maxlength="20"
            v-model="a_paterno"
          />
        </div>
        <div class="col">
          <label>Apellido materno</label>
          <input
            type="text"
            class="form-control"
            maxlength="20"
            v-model="a_materno"
          />
        </div>
        <div class="col">
          <label>Clave usuario</label>
          <input type="text" class="form-control" v-model="id_users" />
        </div>
      </div>
      <button class="btn btn-info mr-3" @click="submitForm">Add medic</button>
      <button class="btn btn-warning mr-3" @click="updateForm">
        Update medic
      </button>
      <button class="btn btn-danger mr-3" @click="deleteForm">
        Delete medic
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
                <th>Medico ID</th>
                <th>Medico nombre</th>
                <th>Medico a_paterno</th>
                <th>Medico a_materno</th>
                <th>Medico cedula</th>
                <th>Medico id_users</th>
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
import Vue from 'vue';
export default {
  name: "Medico",
  data() {
    return {
      id_medico: "",
      nombre: "",
      a_paterno: "",
      a_materno: "",
      cedula: "",
      id_users: "",
      dataTable: null,
    };
  },
  methods: {
    submitForm() {
      axios
        .post("https://proyecto-tedw.herokuapp.com/medico", {
          nombre: this.nombre,
          a_paterno: this.a_paterno,
          a_materno: this.a_materno,
          cedula: this.cedula,
          id_users: this.id_users,
        })
        .then(function(response) {
          console.log(response);
Vue.$toast.open({
        message: "registro existoso recarga la pagina",
        type: "success",
        duration: 5000,
        dismissible: true,
      });

        })
        .catch(function(error) {
          console.log(error);
           Vue.$toast.open({
        message: "algo succedio",
        type: "error",
        duration: 5000,
        dismissible: true,
      });
        });
    
setTimeout(function(){location.reload()},5000);
    },
    deleteForm() {
      axios({
        method: "delete",
        url: "https://proyecto-tedw.herokuapp.com/medico/" + this.id_medico,
        data: {
          nombre: this.nombre,
          a_paterno: this.a_paterno,
          a_materno: this.a_materno,
          cedula: this.cedula,
          id_users: this.id_users,
        },
      })
        .then(function(response) {
          console.log(response);
          Vue.$toast.open({
        message: "borrado existoso recarga la pagina",
        type: "error",
        duration: 5000,
        dismissible: true,
      });

        })
        .catch(function(error) {
          console.log(error);
           Vue.$toast.open({
        message: "algo succedio",
        type: "error",
        duration: 5000,
        dismissible: true,
      });
        });
     setTimeout(function(){location.reload()},5000);
    },
    updateForm() {
      axios
        .put("https://proyecto-tedw.herokuapp.com/medico/" + this.id_medico, {
          nombre: this.nombre,
          a_paterno: this.a_paterno,
          a_materno: this.a_materno,
          cedula: this.cedula,
          id_users: this.id_users,
        })
        .then(function(response) {
          console.log(response);
             Vue.$toast.open({
        message: "actualizacion existosa, recarga la pagina",
        type: "warning",
        duration: 5000,
        dismissible: true,
      });
        })
        .catch(function(error) {
          console.log(error);
           Vue.$toast.open({
        message: "algo succedio",
        type: "error",
        duration: 5000,
        dismissible: true,
      });
        });
     setTimeout(function(){location.reload()},5000);
    },
  },
  mounted() {
    let medicos = [];

    this.dataTable = $("#user-table").DataTable({});
    const url = "https://proyecto-tedw.herokuapp.com/medico";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          medicos.push(item);
        });
        medicos.forEach((medico) => {
          this.dataTable.row
            .add([
              medico.id_medico,
              medico.nombre,
              medico.a_paterno,
              medico.a_materno,
              medico.cedula,
              medico.id_users,
            ])
            .draw(false);
        });
      });
  },
};
</script>

<style scoped></style>
