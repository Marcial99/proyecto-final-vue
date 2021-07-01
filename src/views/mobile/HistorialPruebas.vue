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
import Vue from "vue";
export default {
  name: "Prueba",
  data() {
    return {
      id_prueba: "",
      tipo_prueba: "",
      resultado: "",
      documento: "",
      status: "",
      id_medico: "",
      id_users: "",
      dataTable: null,
      id_usuario: this.$store.state.auth.user.id,
    };
  },

  mounted() {
    let pruebas = [];

    this.dataTable = $("#user-table").DataTable({});
    const url =
      "https://proyecto-tedw.herokuapp.com/prueba/all/" + this.id_usuario;

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
