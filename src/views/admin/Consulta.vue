<template>
  <div>
    <div id="app" class="container border shadow mb-4">
      <h3 class="mt-3">Add consult</h3>
      <hr />
      <div class="row mb-3">
        <div class="col">
          <label>Id consulta</label>
          <input
            type="number"
            class="form-control"
            v-model="id_consulta"
            step="1"
          />
        </div>
        <div class="col">
          <label>Sintomas</label>
          <input type="text" class="form-control" v-model="sintomas" />
        </div>
        <div class="col">
          <label>Id medico</label>
          <input
            type="number"
            step="1"
            class="form-control"
            v-model="id_medico"
          />
        </div>
        <div class="col">
          <label>Id users</label>
          <input
            type="number"
            step="1"
            class="form-control"
            v-model="id_users"
          />
        </div>
        <div class="col">
          <label>Status</label>
          <input type="text" class="form-control" v-model="status" />
        </div>
      </div>
      <button class="btn btn-info mr-3" @click="submitForm">Add consult</button>
      <button class="btn btn-warning mr-3" @click="updateForm">
        Update consult
      </button>
      <button class="btn btn-danger mr-3" @click="deleteForm">
        Delete consult
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
                <th>Id consulta</th>
                <th>fecha</th>
                <th>Sintomas</th>
                <th>Id medico</th>
                <th>Id usuario</th>
                <th>Status</th>
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
import Vue from "vue";
export default {
  name: "Consulta",
  data() {
    return {
      id_consulta: "",
      fecha: "",
      sintomas: "",
      id_medico: "",
      id_users: "",
      status: "",
      dataTable: null,
    };
  },
  methods: {
    submitForm() {
      axios
        .post("https://proyecto-tedw.herokuapp.com/consultas", {
          sintomas: this.sintomas,
          id_medico: this.id_medico,
          id_users: this.id_users,
          status: this.status,
        })
        .then(function (response) {
          console.log(response);
          Vue.$toast.open({
            message: "registro existoso recarga la pagina",
            type: "success",
            duration: 5000,
            dismissible: true,
          });
        })
        .catch(function (error) {
          console.log(error);
          Vue.$toast.open({
            message: "algo succedio",
            type: "error",
            duration: 5000,
            dismissible: true,
          });
        });

      setTimeout(function () {
        location.reload();
      }, 5000);
    },
    deleteForm() {
      axios({
        method: "delete",
        url:
          "https://proyecto-tedw.herokuapp.com/consultas/" + this.id_consulta,
      })
        .then(function (response) {
          console.log(response);
          Vue.$toast.open({
            message: "borrado existoso recarga la pagina",
            type: "error",
            duration: 5000,
            dismissible: true,
          });
        })
        .catch(function (error) {
          console.log(error);

          Vue.$toast.open({
            message: "algo succedio",
            type: "error",
            duration: 5000,
            dismissible: true,
          });
        });

      setTimeout(function () {
        location.reload();
      }, 5000);
    },
    updateForm() {
      axios
        .put(
          "https://proyecto-tedw.herokuapp.com/consultas/" + this.id_consulta,
          {
            sintomas: this.sintomas,
            id_medico: this.id_medico,
            id_users: this.id_users,
            status: this.status,
          }
        )
        .then(function (response) {
          console.log(response);
          Vue.$toast.open({
            message: "actualizacion existosa, recarga la pagina",
            type: "warning",
            duration: 5000,
            dismissible: true,
          });
        })
        .catch(function (error) {
          console.log(error);

          Vue.$toast.open({
            message: "algo succedio",
            type: "error",
            duration: 5000,
            dismissible: true,
          });
        });
      setTimeout(function () {
        location.reload();
      }, 5000);
    },
  },
  mounted() {
    let consultas = [];

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
    const url = "https://proyecto-tedw.herokuapp.com/consultas";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          consultas.push(item);
        });
        consultas.forEach((consulta) => {
          this.dataTable.row
            .add([
              consulta.id_consulta,
              consulta.fecha,
              consulta.sintomas,
              consulta.id_medico,
              consulta.id_users,
              consulta.status,
            ])
            .draw(false);
        });
      });
  },
};
</script>

<style scoped></style>
