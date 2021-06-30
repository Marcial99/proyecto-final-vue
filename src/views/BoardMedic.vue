<template>
  <div class="contenedor overflow-auto">
    <h1 class="text-center">Encuestas realizadas</h1>
    <br />
    <table
      class="table  table-responsive-md table-hover table-bordered "
      cellspacing="0"
    >
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id encuesta</th>
          <th scope="col">Modalidad</th>
          <th scope="col">Id usuario</th>
          <th scope="col">Fecha</th>
          <th scope="col">Resultado</th>
          <th scope="col">Prueba</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="encuesta in encuestas" :key="encuesta.id_encuesta">
          <td>{{ encuesta.id_encuesta }}</td>
          <td>{{ encuesta.modalidad }}</td>
          <td>{{ encuesta.id_users }}</td>
          <td>{{ encuesta.fecha }}</td>
          <td>{{ encuesta.resultado }}</td>
          <td>
            <router-link
              :to="{
                path: '/detalles',
                query: {
                  id_encuesta: encuesta.id_encuesta,
                },
              }"
              class="btn btn-success rounded shadow"
            >
              Ver y levantar prueba
            </router-link>
          </td>
        </tr>

        <tr v-if="!except">
          <td>{{ encuestas[0].id_encuesta }}</td>
          <td>{{ encuestas[0].modalidad }}</td>
          <td>{{ encuestas[0].id_users }}</td>
          <td>{{ encuestas[0].fecha }}</td>
          <td>{{ encuestas[0].resultado }}</td>
          <td>
            <router-link
              :to="{
                path: '/detalles',
                query: {
                  id_encuesta: encuestas[0].id_encuesta,
                },
              }"
              class="btn btn-success rounded shadow"
            >
              Ver y levantar prueba
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import UserService from "../services/user.service";
export default {
  name: "Medic",
  components: {},
  data() {
    return {
      encuestas: [],
      cargado: false,
      except: false,
    };
  },
  methods: {
    async getEncuestas() {
      try {
        const encuestas = await axios.get(
          "https://proyecto-tedw.herokuapp.com/encuestas/st/sospechoso/abierta"
        );
        try {
          this.encuestas = encuestas.data.result.rows;
        } catch (Exception) {
          this.encuestas[0] = {
            id_encuesta: encuestas.data.id_encuesta,
            modalidad: encuestas.data.modalidad,
            id_users: encuestas.data.id_users,
            fecha: encuestas.data.fecha,
            resultado: encuestas.data.resultado,
          };
          this.except = true;
        }

        console.log(this.encuestas);
        this.cargado = false;
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getEncuestas();
  },
  computed: {},
  mounted() {
    UserService.getMedicBoard().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
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
