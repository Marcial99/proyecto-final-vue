<template>
  <div id="app" class="container border shadow mb-4">
    <h1 class="text-center mt-2">
      Reporte sobre personal de la institución contagiados
    </h1>
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
              <th>Nombre</th>
              <th>fecha</th>
              <th>Resultado</th>
              <th>Departamento</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default {
  name: "casosPersonal",
  data() {
    return {
      Nombre: "",
      fecha: "",
      resultado: "",
      departamento: "",
      dataTable: null,
    };
  },
  mounted() {
    let personal = [];

    this.dataTable = $("#user-table").DataTable({
      responsive: "true",
      dom: "Bfrtilp",
      buttons: [
        {
          extend: "excelHtml5",
          text: '<i class="fas fa-file-excel"></i> ',
          titleAttr: "Reporte en Excel",
          className: "btn btn-success",
        },
        {
          extend: "pdfHtml5",
          text: '<i class="fas fa-file-pdf"></i> ',
          titleAttr: "Reporte en PDF",
          className: "btn btn-danger",
        },
        {
          extend: "print",
          text: '<i class="fa fa-print"></i> ',
          titleAttr: "Imprimir reporte",
          className: "btn btn-info",
        },
      ],
    });
    const url = "https://proyecto-tedw.herokuapp.com/personal/all/reporte";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          personal.push(item);
        });
        personal.forEach((personal) => {
          this.dataTable.row
            .add([
              personal.nombre +
                " " +
                personal.a_paterno +
                " " +
                personal.a_materno,
              personal.fecha,
              personal.resultado,
              personal.departamento,
            ])
            .draw(false);
        });
      });
  },
};
</script>

<style scoped></style>
