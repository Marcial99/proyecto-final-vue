<template>
  <div>
    <div id="app" class="container border shadow mb-4">
      <h3 class="mt-3">Add users</h3>
      <hr />
      <div class="row mb-3">
        <div class="col">
          <label>Id de usuario</label>
          <input type="text" class="form-control" v-model="id" />
        </div>
        <div class="col">
          <label>Nombre de usuario</label>
          <input type="text" class="form-control" v-model="username" />
        </div>
        <div class="col">
          <label>Correo</label>
          <input type="text" class="form-control" v-model="email" />
        </div>
        <div class="col">
          <label>Contraseña</label>
          <input type="text" class="form-control" v-model="password" />
        </div>

      </div>
      <button class="btn btn-info mr-3" @click="submitForm">Add users</button>
      <button class="btn btn-warning mr-3" @click="updateForm">
        Update users
      </button>
      <button class="btn btn-danger mr-3" @click="deleteForm">
        Delete users
      </button>
      <hr />

      <div class="row mb-5">
        <div class="col overflow-auto">
          <table
            id="user-table"
            class="table display table-hover nowrap "
            cellspacing="0"
            width="100%"
          >
            <thead class="thead-dark">
              <tr>
                <th>Id usuario</th>
                <th>Nombre usuario</th>
                <th>Email</th>
                <th>Password</th>
                <th>Fecha de creacion</th>
                <th>Fecha de actualizacion</th>
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
import bcrypt from 'bcryptjs';
export default {
  name: "Usuario",
  data() {
    return {
      id: "",
      username: "",
      email: "",
      password: "",
      createdAt: "",
      updatedAt: "",
      dataTable: null,
    };
  },
  methods: {
    submitForm() {
      const salt = bcrypt.genSaltSync(8);
       let encript = bcrypt.hashSync(this.password, salt);
      axios
        .post("https://proyecto-tedw.herokuapp.com/usuario", {
          username: this.username,
          email: this.email,
          password: encript,
          createdAt: this.createdAt,
          updatedAt: this.updatedAt,
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
        url: "https://proyecto-tedw.herokuapp.com/usuario/" + this.id
      })
        .then(function(response) {
          console.log(response);
           Vue.$toast.open({
        message: response.data,
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
  
// setTimeout(function(){location.reload()},5000);
    },
    updateForm() {
      const salt = bcrypt.genSaltSync(8);
       let encript = bcrypt.hashSync(this.password, salt);
      axios
        .put("https://proyecto-tedw.herokuapp.com/usuario/" + this.id, {
          username: this.username,
          email: this.email,
          password: encript,
          createdAt: this.createdAt,
          updatedAt: this.updatedAt,
        })
        .then(function(response) {
          console.log(response);
             Vue.$toast.open({
        message: response.data,
        type: "warning",
        duration: 5000,
        dismissible: true,
      });
        })
        .catch(function(error) {
          console.log(error);
           Vue.$toast.open({
        message: response.data.detail,
        type: "error",
        duration: 5000,
        dismissible: true,
      });
        });

setTimeout(function(){location.reload()},5000);
    },
  },
  mounted() {
    let users = [];

    this.dataTable = $("#user-table").DataTable({});
    const url = "https://proyecto-tedw.herokuapp.com/usuario";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          users.push(item);
        });
        users.forEach((user) => {
          this.dataTable.row
            .add([
              user.id,
              user.username,
              user.email,
              user.password,
              user.createdAt,
              user.updatedAt,
            ])
            .draw(false);
        });
      });
      const salt = bcrypt.genSaltSync(8)
          console.log( bcrypt.hashSync(this.password, salt))
  },
};
</script>

<style scoped></style>
