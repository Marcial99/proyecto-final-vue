<template>
  <div id="app" class="container border shadow mb-4">
    <h1 class="text-center mt-2">Reporte sobre estudiantes contagiados</h1>
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
              <th>Carrera</th>
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
  name: "casosEstudiante",
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
    let estudiantes = [];

    this.dataTable = $("#user-table").DataTable({
      responsive: "true",
      dom: "Bfrtilp",
      buttons: [
        {
          extend: "excelHtml5",
          text: '<i class="fas fa-file-excel"></i> ',
          titleAttr: "Reporte en Excel",
          className: "btn btn-success",
          title: "Estudiantes de la institución contagiados",
        },
        {
          extend: "pdfHtml5",
          text: '<i class="fas fa-file-pdf"></i> ',
          titleAttr: "Reporte en PDF",
          className: "btn btn-danger",
          title: "Estudiantes de la institución contagiados",
        },
        {
          extend: "print",
          text: '<i class="fa fa-print"></i> ',
          titleAttr: "Imprimir reporte",
          className: "btn btn-info",
          title: "Estudiantes de la institución contagiados",
        },
      ],
    });
    const url = "https://proyecto-tedw.herokuapp.com/alumnos/all/reporte";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          estudiantes.push(item);
        });
        estudiantes.forEach((estudiante) => {
          this.dataTable.row
            .add([
              estudiante.nombre +
                " " +
                estudiante.a_paterno +
                " " +
                estudiante.a_materno,
              estudiante.fecha,
              estudiante.resultado,
              estudiante.carrera,
            ])
            .draw(false);
        });
      });
  },
};
</script>

<style scoped></style>
