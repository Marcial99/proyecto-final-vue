<template>
  <div>
    <div id="app" class="container border shadow mb-4">
      <h3 class="mt-3">Add staff</h3>
      <hr />
      <div class="row mb-3">
        <div class="col">
          <label>Id personal</label>
          <input
            type="text"
            class="form-control"
            maxlength="7"
            v-model="id_personal"
          />
        </div>
        <div class="col">
          <label>Carrera nombre</label>
          <input type="text" class="form-control" v-model="nombre" />
        </div>
        <div class="col">
          <label>Apellido paterno</label>
          <input type="text" class="form-control" v-model="a_paterno" />
        </div>
        <div class="col">
          <label>Apellido materno</label>
          <input type="text" class="form-control" v-model="a_materno" />
        </div>
        <div class="col">
          <label>Cargo</label>
          <input type="text" class="form-control" v-model="cargo" />
        </div>
        <div class="col">
          <label>Departamento</label>
          <input type="text" class="form-control" v-model="departamento" />
        </div>
        <div class="col">
          <label>Id usuario</label>
          <input type="text" class="form-control" v-model="id_users" />
        </div>
      </div>
      <button class="btn btn-info mr-3" @click="submitForm">Add staff</button>
      <button class="btn btn-warning mr-3" @click="updateForm">
        Update staff
      </button>
      <button class="btn btn-danger mr-3" @click="deleteForm">
        Delete staff
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
                <th>Personal ID</th>
                <th>Nombre</th>
                <th>Apellido paterno</th>
                <th>Apellido materno</th>
                <th>Cargo</th>
                <th>Departamento</th>
                <th>Id usuario</th>
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
  name: "Personal",
  data() {
    return {
      id_personal: "",
      nombre: "",
      a_paterno: "",
      a_materno: "",
      cargo: "",
      departamento: "",
      id_users: "",
      dataTable: null,
    };
  },
  methods: {
    submitForm() {
      axios
        .post("https://proyecto-tedw.herokuapp.com/personal", {
          nombre: this.nombre,
          a_paterno: this.a_paterno,
          a_materno: this.a_materno,
          cargo: this.cargo,
          departamento: this.departamento,
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
        url: "https://proyecto-tedw.herokuapp.com/personal/" + this.id_personal,
        data: {
          nombre: this.nombre,
          a_paterno: this.a_paterno,
          a_materno: this.a_materno,
          cargo: this.cargo,
          departamento: this.departamento,
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
        .put(
          "https://proyecto-tedw.herokuapp.com/personal/" + this.id_personal,
          {
            nombre: this.nombre,
            a_paterno: this.a_paterno,
            a_materno: this.a_materno,
            cargo: this.cargo,
            departamento: this.departamento,
            id_users: this.id_users,
          }
        )
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
    let personas = [];

    this.dataTable = $("#user-table").DataTable({
        responsive: "true",
      dom: "Bfrtilp",
      buttons: [
        {
          extend: "excelHtml5",
          text: '<i class="fas fa-file-excel"></i> ',
          titleAttr: "Exportar a Excel",
          className: "btn btn-success",
        },
        {
          extend: "pdfHtml5",
          text: '<i class="fas fa-file-pdf"></i> ',
          titleAttr: "Exportar a PDF",
          className: "btn btn-danger",
        },
        {
          extend: "print",
          text: '<i class="fa fa-print"></i> ',
          titleAttr: "Imprimir",
          className: "btn btn-info",
        },
      ],
    });
    const url = "https://proyecto-tedw.herokuapp.com/personal";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          personas.push(item);
        });
        personas.forEach((personal) => {
          this.dataTable.row
            .add([
              personal.id_personal,
              personal.nombre,
              personal.a_materno,
              personal.a_paterno,
              personal.cargo,
              personal.departamento,
              personal.id_users,
            ])
            .draw(false);
        });
      });
  },
};
</script>

<style scoped></style>
