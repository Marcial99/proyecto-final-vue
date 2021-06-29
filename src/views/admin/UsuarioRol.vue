<template>
  <div>
    <div id="app" class="container border shadow mb-4">
      <h3 class="mt-3">Add role and user</h3>
      <hr />
      <div class="row mb-3">
        <div class="col">
         <label for="cars">Selecciona un rol:</label>

<select v-model="permiso.id" class="form-select">
<option v-for="p in permisos" v-bind:value="p">{{permiso.rol[p-1]}}</option>
</select>
        </div>
        <div class="col">
          <label>Id usuario</label>
          <input type="text" class="form-control" v-model="userId" />
        </div>
      </div>
      <button class="btn btn-warning mr-3" @click="updateForm">
        Update relation
      </button>
      <button class="btn btn-danger mr-3" @click="deleteForm">
        Delete relation
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
                <th>Id rol</th>
                <th>Id user</th>
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
  name: "UsuarioRol",
  data() {
    return {
      userId: "",
      roleId: "",
      dataTable: null,
      permisos:[],
                fruit:'',
      names:[],
      permiso:{
        rol:"",
        id:""
      }
    };
  },
  methods: {
    submitForm() {
      this.roleId = this.permiso.id;
      axios
        .post("https://proyecto-tedw.herokuapp.com/ur", {
          roleId: this.roleId,
          userId: this.userId
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
      this.roleId = this.permiso.id;
      axios({
        method: "delete",
        url: "https://proyecto-tedw.herokuapp.com/ur/" + this.userId,
        data: {
          roleId: this.roleId,
          userId: this.userId
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
      this.roleId = this.permiso.id;
      axios
        .put("https://proyecto-tedw.herokuapp.com/ur/" + this.userId, {
          roleId: this.roleId,
          userId: this.userId
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
  },
 mounted() {
    let users_roles = [];
    let roles = [];
    this.dataTable = $("#user-table").DataTable({});
    const url = "https://proyecto-tedw.herokuapp.com/ur";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          users_roles.push(item);
        });
        users_roles.forEach((user_rol) => {
          this.dataTable.row
            .add([
              user_rol.roleId,
              user_rol.userId,
            ])
            .draw(false);
        });
      });
fetch("https://proyecto-tedw.herokuapp.com/rol")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          roles.push(item.id);
          this.permisos.push(item.id);
          this.names.push(item.name);
        });

      });
 this.permiso.id=this.permisos;
 this.permiso.rol=this.names;
      console.log(this.permiso)

  },
};
</script>


<style scoped>

</style>