<template>
  <div>
    <div id="app" class="container border shadow mb-4">
      <h1 class="mt-3">Historial de encuestas</h1>

      <hr />
      <div class="row mb-5">
        <div class="col overflow-auto">
          <table
            id="user-table"
            class="table display table-hover nowrap"
            cellspacing="0"
            width="50%"
          >
            <thead class="thead-dark">
              <tr>
                <th>Id encuesta</th>
                <th>Modalidad</th>
                <th>Id usuario</th>
                <th>Fecha</th>
                <th>pregunta 1</th>
                <th>pregunta 2</th>
                <th>pregunta 3</th>
                <th>pregunta 4</th>
                <th>pregunta 5</th>
                <th>pregunta 6</th>
                <th>pregunta 7</th>
                <th>pregunta 8</th>
                <th>pregunta 9</th>
                <th>pregunta 10</th>
                <th>pregunta 11</th>
                <th>pregunta 12</th>
                <th>pregunta 13</th>
                <th>pregunta 14</th>
                <th>resultado</th>
                <th>status</th>
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
  name: "Encuesta",
  data() {
    return {
      id_encuesta: "",
      modalidad: "",
      id_users: "",
      fecha: "",
      r1: false,
      r2: false,
      r3: false,
      r4: false,
      r5: false,
      r6: false,
      r7: false,
      r8: false,
      r9: false,
      r10: false,
      r11: false,
      r12: false,
      r13: false,
      r14: false,
      resultado: "",
      dataTable: null,
      status: "",
    };
  },

  mounted() {
    let encuestas = [];

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
    const url =
      "https://proyecto-tedw.herokuapp.com/encuestas/all/" +
      this.$store.state.auth.user.id;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          encuestas.push(item);
        });
        encuestas.forEach((encuesta) => {
          this.dataTable.row
            .add([
              encuesta.id_encuesta,
              encuesta.modalidad,
              encuesta.id_users,
              encuesta.fecha,
              encuesta.r1,
              encuesta.r2,
              encuesta.r3,
              encuesta.r4,
              encuesta.r5,
              encuesta.r6,
              encuesta.r7,
              encuesta.r8,
              encuesta.r9,
              encuesta.r10,
              encuesta.r11,
              encuesta.r12,
              encuesta.r13,
              encuesta.r14,
              encuesta.resultado,
              encuesta.status,
            ])
            .draw(false);
        });
      });
  },
};
</script>

<style scoped></style>
