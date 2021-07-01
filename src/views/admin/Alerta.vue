<template>
  <div>
    <div id="app" class="container border shadow mb-4">
      <h3 class="mt-3">Add Alert</h3>
      <hr />
      <div class="row mb-3">
        <div class="col">
          <label>Id alerta</label>
          <input type="text" class="form-control" v-model="id_alerta" />
        </div>
        <div class="col">
          <label>Tipo de alerta</label>
          <input type="text" class="form-control" v-model="tipo_alerta" />
        </div>
        <div class="col">
          <label>Contenido</label>
          <input type="text" class="form-control" v-model="contenido" />
        </div>
        <div class="col">
          <label>status</label>
          <input type="text" class="form-control" v-model="status" />
        </div>
        <div class="col">
          <label>Id usuario</label>
          <input type="text" class="form-control" v-model="id_users" />
        </div>
      </div>
      <button class="btn btn-info mr-3" @click="submitForm">Add career</button>
      <button class="btn btn-warning mr-3" @click="updateForm">
        Update career
      </button>
      <button class="btn btn-danger mr-3" @click="deleteForm">
        Delete career
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
                <th>Alerta ID</th>
                <th>Tipo de alerta</th>
                <th>Contenido</th>
                <th>Status</th>
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
export default {
  name: "Alerta",
  data() {
    return {
      id_alerta: "",
      tipo_alerta: "",
      contenido: "",
      status: "",
      id_users: "",
      dataTable: null,
    };
  },
  methods: {
    submitForm() {
      axios
        .post("https://proyecto-tedw.herokuapp.com/alertas", {
          tipo_alerta: this.tipo_alerta,
          contenido: this.contenido,
          status: this.status,
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
setTimeout(function(){location.reload()},5000)

    },
    updateForm() {
      axios
        .put("https://proyecto-tedw.herokuapp.com/alertas/" + this.id_alerta, {
          tipo_alerta: this.tipo_alerta,
          contenido: this.contenido,
          status: this.status,
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
      setTimeout(function(){location.reload()},5000)
    },
    deleteForm() {
      axios({
        method: "delete",
        url: "https://proyecto-tedw.herokuapp.com/alertas/" + this.id_alerta,
        data: {
          tipo_alerta: this.tipo_alerta,
          contenido: this.contenido,
          status: this.status,
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
 setTimeout(function(){location.reload()},5000)
    },
  },
  mounted() {
    let alertas = [];

    this.dataTable = $("#user-table").DataTable({});
    const url = "https://proyecto-tedw.herokuapp.com/alertas";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          alertas.push(item);
        });
        alertas.forEach((alerta) => {
          this.dataTable.row
            .add([
              alerta.id_alerta,
              alerta.tipo_alerta,
              alerta.contenido,
              alerta.status,
              alerta.id_users,
            ])
            .draw(false);
        });
      });
  },
};
</script>

<style scoped></style>
