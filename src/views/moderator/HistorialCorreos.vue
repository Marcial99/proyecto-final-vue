<template>
  <div>
    <div id="app" class="container border">
      <h3 class="mt-3 font-weight-bold">Historial de pruebas realizadas</h3>
      <hr />
      <div class="row">
        <div class="col">
          <div class="overflow-auto">
            <table
              id="user-table"
              class="table display table-hover nowrap mb-5 overflow-auto"
              cellspacing="0"
              width="100%"
            >
              <thead class="thead-dark">
                <tr>
                  <th>Id prueba</th>
                  <th>Tipo de prueba</th>
                  <th>Resultado</th>
                  <th>Documento</th>
                  <th>Id medico</th>
                  <th>status</th>
                  <th>Id usuario</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
          <br /><br />
          <hr />
          <div class="mb-5 mt-5 overflow-auto">
            <h3 class="mt-3 font-weight-bold">Historial de correos enviados</h3>
            <table
              id="corr-table"
              class="table display table-hover nowrap mt-5 "
              cellspacing="0"
              width="100%"
            >
              <thead class="thead-dark">
                <tr>
                  <th>Id trazabilidad</th>
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Prueba",
  data() {
    return {
      id_prueba: "",
      tipo_prueba: "",
      resultado: "",
      documento: "",
      id_medico: "",
      status: "",
      id_usuario: "",
      dataTable: null,
      dataTable2: null,
    };
  },
  mounted() {
    let pruebas = [];
    let correos = [];

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
    const url = "https://proyecto-tedw.herokuapp.com/prueba/status/cerrado";
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
              prueba.id_medico,
              prueba.status,
              prueba.id_users,
            ])
            .draw(false);
        });
      });

    this.dataTable2 = $("#corr-table").DataTable({});
    const url2 = "https://proyecto-tedw.herokuapp.com/traz";
    fetch(url2)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          correos.push(item);
        });
        correos.forEach((correo) => {
          this.dataTable2.row
            .add([correo.id_trazabilidad, correo.id_prueba, correo.correo])
            .draw(false);
        });
      });
  },
};
</script>

<style scoped></style>
