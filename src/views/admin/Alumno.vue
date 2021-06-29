<template>
  <div>
    <div id="app" class="container border shadow mb-4">
      <h3 class="mt-3">Add Student</h3>
      <hr />
      <div class="row mb-3">
        <div class="col">
          <label>No control</label>
          <input
            type="text"
            class="form-control"
            maxlength="8"
            v-model="no_control"
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
          <label>Semestre</label>
         <input type="number" max="12" min="1" step="1" v-model="semestre" class="form-control">
        </div>
        <div class="col">
          <label>Clave usuario</label>
          <input type="text" class="form-control" v-model="id_users" />
        </div>
        <div class="col">
          <label>Clave carrera</label>
          <input type="text" class="form-control" v-model="id_carrera" />
        </div>
        <div class="col">
          <label>Correo</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
      </div>

      <button class="btn btn-info mr-4" @click="submitForm">Add student</button>
      <button class="btn btn-warning mr-4" @click="updateForm">
        Update student
      </button>
      <button class="btn btn-danger mr-4" @click="deleteForm">
        Delete student
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
                <th>Alumno No control</th>
                <th>Alumno nombre</th>
                <th>Alumno a_paterno</th>
                <th>Alumno a_materno</th>
                <th>Alumno semestre</th>
                <th>Alumno id_users</th>
                <th>Alumno id_carrera</th>
                <th>Alumno email</th>
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
  name: "Alumno",
  data() {
    return {
      no_control: "",
      nombre: "",
      a_paterno: "",
      a_materno: "",
      semestre: "",
      id_users: "",
      id_carrera: "",
      email:"",
      dataTable: null,
    };
  },
  methods: {
    submitForm() {
      axios
        .post("https://proyecto-tedw.herokuapp.com/alumnos", {
          no_control: this.no_control,
          nombre: this.nombre,
          a_paterno: this.a_paterno,
          a_materno: this.a_materno,
          semestre: this.semestre,
          id_users: this.id_users,
          id_carrera: this.id_carrera,
          email:this.email,
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
     
    
      setTimeout(function(){location.reload()},5000)
    },
    deleteForm() {
      axios({
        method: "delete",
        url: "https://proyecto-tedw.herokuapp.com/alumnos/" + this.no_control,
        data: {
          nombre: this.nombre,
          a_paterno: this.a_paterno,
          a_materno: this.a_materno,
          semestre: this.semestre,
          id_users: this.id_users,
          id_carrera: this.id_carrera,
          email: this.email,
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
    
     setTimeout(function(){location.reload()},5000)
    },
    updateForm() {
      axios
        .put("https://proyecto-tedw.herokuapp.com/alumnos/" + this.no_control, {
          no_control: this.no_control,
          nombre: this.nombre,
          a_paterno: this.a_paterno,
          a_materno: this.a_materno,
          semestre: this.semestre,
          id_users: this.id_users,
          id_carrera: this.id_carrera,
          email: this.email,
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
     setTimeout(function(){location.reload()},5000)
    },
  },
  mounted() {
    let alumnos = [];

    this.dataTable = $("#user-table").DataTable({});
    const url = "https://proyecto-tedw.herokuapp.com/alumnos";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          alumnos.push(item);
        });
        alumnos.forEach((alumno) => {
          this.dataTable.row
            .add([
              alumno.no_control,
              alumno.nombre,
              alumno.a_paterno,
              alumno.a_materno,
              alumno.semestre,
              alumno.id_users,
              alumno.id_carrera,
              alumno.email
            ])
            .draw(false);
        });
      });
  },
};
</script>

<style scoped></style>
