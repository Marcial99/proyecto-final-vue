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
          <select name="semestre" v-model="semestre">
            <option value="1">semestre 1</option>
            <option value="2">semestre 2</option>
            <option value="3">semestre 3</option>
            <option value="4">semestre 4</option>
            <option value="5">semestre 5</option>
            <option value="6">semestre 6</option>
            <option value="7">semestre 7</option>
            <option value="8">semestre 8</option>
            <option value="9">semestre 9</option>
            <option value="10">semestre 10</option>
            <option value="11">semestre 11</option>
            <option value="12">semestre 12</option>
          </select>
        </div>
        <div class="col">
          <label>Clave usuario</label>
          <input type="text" class="form-control" v-model="id_users" />
        </div>
        <div class="col">
          <label>Clave carrera</label>
          <input type="text" class="form-control" v-model="id_carrera" />
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
        url: "https://proyecto-tedw.herokuapp.com/alumnos/" + this.no_control,
        data: {
          nombre: this.nombre,
          a_paterno: this.a_paterno,
          a_materno: this.a_materno,
          semestre: this.semestre,
          id_users: this.id_users,
          id_carrera: this.id_carrera,
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
        .put("https://proyecto-tedw.herokuapp.com/alumnos/" + this.no_control, {
          no_control: this.no_control,
          nombre: this.nombre,
          a_paterno: this.a_paterno,
          a_materno: this.a_materno,
          semestre: this.semestre,
          id_users: this.id_users,
          id_carrera: this.id_carrera,
        })
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
            ])
            .draw(false);
        });
      });
  },
};
</script>

<style scoped></style>
