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
import Vue from 'vue';
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
        url: "https://proyecto-tedw.herokuapp.com/traz/" + this.id_trazabilidad,
        data: {
          id_prueba: this.id_prueba,
          correo: this.correo,
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
          "https://proyecto-tedw.herokuapp.com/traz/" + this.id_trazabilidad,
          {
            id_prueba: this.id_prueba,
            correo: this.correo,
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
    let trazabilidades = [];

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
