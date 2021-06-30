<template>
  <div class="contenedor overflow-auto">
    <h1 class="text-center">Acualizar resultados de pruebas</h1>
    <br />
    <table
      class="table  table-responsive-md table-hover table-bordered "
      cellspacing="0"
    >
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id Prueba</th>
          <th scope="col">Tipo Prueba</th>
          <th scope="col">Resultado</th>
          <th scope="col">Documento</th>
          <th scope="col">Id medico</th>
          <th scope="col">Status</th>
          <th scope="col">Id usuario</th>
          <th scope="col">Opcion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prueba in pruebas" :key="prueba.id_prueba">
          <td>{{ prueba.id_prueba }}</td>
          <td>{{ prueba.tipo_prueba }}</td>
          <td>{{ prueba.resultado }}</td>
          <td>{{ prueba.documento }}</td>
          <td>{{ prueba.id_medico }}</td>
          <td>{{ prueba.status }}</td>
          <td>{{ prueba.id_users }}</td>
          <td>
            <router-link
              :to="{
                path: '/actualizarPruebas',
                query: {
                  id_prueba: prueba.id_prueba,
                  tipo_prueba: prueba.tipo_prueba,
                  resultado: prueba.resultado,
                  documento: prueba.documento,
                  id_medico: prueba.id_medico,
                  status: prueba.status,
                  id_users: prueba.id_users,
                },
              }"
              class="btn btn-success rounded shadow"
            >
              Mandar correos
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "modprueba",
  components: {},
  data() {
    return {
      pruebas: [],
      cargado: false,
    };
  },
  methods: {
    async getPruebas() {
      try {
        const pruebas = await axios.get(
          "https://proyecto-tedw.herokuapp.com/prueba/status/prog/procesando"
        );
        this.pruebas = pruebas.data;
        console.log(pruebas);
        this.cargado = false;
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getPruebas();
  },
  computed: {},
};
</script>

<style>
.contenedor {
  border: 1px solid rgb(209, 209, 209);
  width: 70%;
  margin: 40px auto;
  padding: 40px;
  text-align: left;
  background: white;
  box-shadow: 0px 0px 10px 0px rgba(95, 95, 95, 0.986);
  border-radius: 0px;
}
.tabla {
  color: white;
}
</style>
