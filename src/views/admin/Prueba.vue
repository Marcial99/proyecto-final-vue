<template>
  <div>
    <div id="app" class="container border shadow mb-4">
      <h3 class="mt-3">Add test</h3>
      <hr />
      <div class="row mb-3">
        <div class="col">
          <label>Id prueba</label>
          <input
            type="text"
            class="form-control"
            maxlength="7"
            v-model="id_prueba"
          />
        </div>
        <div class="col">
          <label>Tipo de prueba</label>
          <input type="text" class="form-control" v-model="tipo_prueba" />
        </div>
        <div class="col">
          <label>Resultado</label>
          <input type="text" class="form-control" v-model="resultado" />
        </div>
        <div class="col">
          <label>Documento</label>
          <input type="text" class="form-control" v-model="documento" />
        </div>
        <div class="col">
          <label>Status</label>
          <select name="status" v-model="status">
            <option value="resultado">resultado</option>
            <option value="correos">correos</option>
            <option value="cerrado">cerrado</option>
            <option value="abierto">abierta</option>
            <option value="procesando">procesando</option>
          </select>
        </div>
        <div class="col">
          <label>Id medico</label>
          <input type="text" class="form-control" v-model="id_medico" />
        </div>
        <div class="col">
          <label>Id usuario</label>
          <input type="text" class="form-control" v-model="id_users" />
        </div>
      </div>
      <button class="btn btn-info mr-3" @click="submitForm">Add test</button>
      <button class="btn btn-warning mr-3" @click="updateForm">
        Update test
      </button>
      <button class="btn btn-danger mr-3" @click="deleteForm">
        Delete test
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
                <th>Id prueba</th>
                <th>Tipo de prueba</th>
                <th>Resultado</th>
                <th>Documento</th>
                <th>Status</th>
                <th>Id medico</th>
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
  name: "Prueba",
  data() {
    return {
      id_prueba: "",
      tipo_prueba: "",
      resultado: "",
      documento: "",
      status:"",
      id_medico: "",
      id_users: "",
      dataTable: null,
    };
  },
  methods: {
    submitForm() {
      axios
        .post("https://proyecto-tedw.herokuapp.com/prueba", {
          tipo_prueba: this.tipo_prueba,
          resultado: this.resultado,
          documento: this.documento,
          status:this.status,
          id_medico: this.id_medico,
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
        url: "https://proyecto-tedw.herokuapp.com/prueba/" + this.id_prueba,
        data: {
          tipo_prueba: this.tipo_prueba,
          resultado: this.resultado,
          documento: this.documento,
          status: this.status,
          id_medico: this.id_medico,
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
        .put("https://proyecto-tedw.herokuapp.com/prueba/" + this.id_prueba, {
          tipo_prueba: this.tipo_prueba,
          resultado: this.resultado,
          documento: this.documento,
          status: this.status,
          id_medico: this.id_medico,
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
    let pruebas = [];

    this.dataTable = $("#user-table").DataTable({});
    const url = "https://proyecto-tedw.herokuapp.com/prueba";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          pruebas.push(item);
        });
        pruebas.forEach((prueba) => {
          this.dataTable.row
            .add([
              prueba.id_prueba,
              prueba.tipo_prueba,
              prueba.resultado,
              prueba.documento,
              prueba.status,
              prueba.id_medico,
              prueba.id_users,
            ])
            .draw(false);
        });
      });
  },
};
</script>

<style scoped></style>
