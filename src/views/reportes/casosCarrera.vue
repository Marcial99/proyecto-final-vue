<template>
  <div id="app" class="container border shadow mb-4">
    <h1 class="text-center mt-2">Reporte de contagios por carrera</h1>
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
              <th>Carrera</th>
              <th>Personas contagiadas</th>
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
  name: "casosCarreras",
  data() {
    return {
      Nombre: "",
      fecha: "",
      resultado: "",
      carrera: "",
      dataTable: null,
    };
  },
  mounted() {
    let carrera = [];

    this.dataTable = $("#user-table").DataTable({
      responsive: "true",
      dom: "Bfrtilp",
      buttons: [
        {
          extend: "excelHtml5",
          text: '<i class="fas fa-file-excel"></i> ',
          titleAttr: "Reporte en Excel",
          className: "btn btn-success",
          title: "Contagios de Covid-19 por carrera",
        },
        {
          extend: "pdfHtml5",
          text: '<i class="fas fa-file-pdf"></i> ',
          titleAttr: "Reporte en PDF",
          className: "btn btn-danger",
          title: "Contagios de Covid-19 por carrera",
        },
        {
          extend: "print",
          text: '<i class="fa fa-print"></i> ',
          titleAttr: "Imprimir reporte",
          className: "btn btn-info",
          title: "Contagios de Covid-19 por carrera",
        },
      ],
    });
    const url = "https://proyecto-tedw.herokuapp.com/alumnos/total/contagios";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          carrera.push(item);
        });
        carrera.forEach((carrera) => {
          this.dataTable.row
            .add([carrera.carrera, carrera.contagios])
            .draw(false);
        });
      });
  },
};
</script>

<style scoped></style>
