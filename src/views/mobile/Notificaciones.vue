<template>
  <div class="container">
    <h1 class="text-center">Notificaciones</h1>
    <div class="overflow-auto">
      <div v-for="resultado in resultadosP" :key="resultado.id_prueba">
        <div class="alert  alert-danger  shadow" role="alert">
          <h4 class="alert-heading">Resultados de tu prueba</h4>
          <p>Id prueba: {{ resultado.id_prueba }}</p>
          <p>Tipo de prueba: {{ resultado.tipo_prueba }}</p>
          <p>Resultado: {{ resultado.resultado }}</p>
          <strong>Por favor envia los correos en el siguiente enlace</strong>
          <br />
          <router-link
            :to="{
              path: '/trazabilidad_correos',
              query: {
                id_prueba: resultado.id_prueba,
                tipo_prueba: resultado.tipo_prueba,
                resultado: resultado.resultado,
                documento: resultado.documento,
                id_medico: resultado.id_medico,
                status: resultado.status,
                id_users: resultado.id_users,
              },
            }"
            class="btn btn-success rounded shadow"
          >
            Mandar correos
          </router-link>
        </div>
      </div>
      <div v-for="prueba in pruebas" :key="prueba.id_prueba">
        <div class="alert  alert-warning  shadow" role="alert">
          <h4 class="alert-heading">Debes hacerte una prueba</h4>
          <p>Id prueba: {{ prueba.id_prueba }}</p>
          <p>Tipo de prueba: {{ prueba.tipo_prueba }}</p>
          <button class="btn btn-primary" @click="submitPrueba(prueba)">
            Aceptar prueba
          </button>
        </div>
      </div>
      <div v-for="resultado in resultadosN" :key="resultado.id_prueba">
        <div class="alert  alert-primary shadow" role="alert">
          <h4 class="alert-heading">
            Tus resultados de la prueba {{ resultado.id_prueba }}
          </h4>

          <p>Tipo de prueba: {{ resultado.tipo_prueba }}</p>
          <p>Resultado: {{ resultado.resultado }}</p>
          <button class="btn btn-primary" @click="submitPruebaN(resultado)">
            Cerrar prueba
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../../services/user.service";
import axios from "axios";
export default {
  name: "User",
  data() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var id = this.$store.state.auth.user.id;
    return {
      modalidad: "",
      id_usuario: id,
      fecha: date,
      r1: "",
      r2: "",
      r3: "",
      r4: "",
      r5: "",
      r6: "",
      r7: "",
      r8: "",
      r9: "",
      r10: "",
      r11: "",
      r12: "",
      r13: "",
      r14: "",
      resultado: "default",
      success: "",
      response: "",
      success: "",
      content: "",
      resultado1: 0,
      resultadoFinal: "no sospechoso",
      contador: 0,
      pruebas: [],
      resultadosP: [],
      resultadosN: [],
      dispositivoMovil: false,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    valor: function() {
      this.resultado1 = 0;
      if (this.r1 !== "") {
        this.resultado1 += 7;
      }
      if (this.r2 !== "") {
        this.resultado1 += 7;
      }
      if (this.r3 !== "") {
        this.resultado1 += 7;
      }
      if (this.r4 !== "") {
        this.resultado1 += 7;
      }
      if (this.r5 !== "") {
        this.resultado1 += 7;
      }
      if (this.r6 !== "") {
        this.resultado1 += 7;
      }
      if (this.r7 !== "") {
        this.resultado1 += 7;
      }
      if (this.r8 !== "") {
        this.resultado1 += 7;
      }
      if (this.r9 !== "") {
        this.resultado1 += 7;
      }
      if (this.r10 !== "") {
        this.resultado1 += 7;
      }
      if (this.r11 !== "") {
        this.resultado1 += 7;
      }
      if (this.r12 !== "") {
        this.resultado1 += 7;
      }
      if (this.r13 !== "") {
        this.resultado1 += 7;
      }
      if (this.r14 !== "") {
        this.resultado1 += 10;
      }
      return "width:" + this.resultado1 + "%";
    },
  },
  methods: {
    submitPrueba(prueba) {
      axios
        .put("https://proyecto-tedw.herokuapp.com/prueba/" + prueba.id_prueba, {
          tipo_prueba: prueba.tipo_prueba,
          resultado: prueba.resultado,
          documento: prueba.documento,
          status: "procesando",
          id_medico: prueba.id_medico,
          id_users: prueba.id_users,
        })
        .then((response) => {
          console.log(response);
          this.activoo = true;
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getNotificaciones() {
      try {
        const pruebas = await axios.get(
          "https://proyecto-tedw.herokuapp.com/prueba/abierta/" +
            this.id_usuario
        );
        this.pruebas = pruebas.data;
        console.log(pruebas);
        this.cargado = false;
      } catch (err) {
        console.log(err);
      }
      try {
        const resultadosP = await axios.get(
          "https://proyecto-tedw.herokuapp.com/prueba/res/" +
            this.id_usuario +
            "/positivo"
        );
        this.resultadosP = resultadosP.data;
        console.log(this.resultadosP);
        this.cargado = false;
      } catch (err) {
        console.log(err);
      }
      try {
        const resultadosN = await axios.get(
          "https://proyecto-tedw.herokuapp.com/prueba/res/" +
            this.id_usuario +
            "/negativo"
        );
        this.resultadosN = resultadosN.data;
        console.log(this.resultadosN);
        this.cargado = false;
      } catch (err) {
        console.log(err);
      }
    },
    submitPruebaN(prueba) {
      axios
        .put("https://proyecto-tedw.herokuapp.com/prueba/" + prueba.id_prueba, {
          tipo_prueba: prueba.tipo_prueba,
          resultado: prueba.resultado,
          documento: prueba.documento,
          status: "cerrado",
          id_medico: prueba.id_medico,
          id_users: prueba.id_users,
        })
        .then((response) => {
          console.log(response);
          this.activoo = true;
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    UserService.getUserBoard().then(
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

  created() {
    this.getNotificaciones();
  },
};
</script>
<style>
.right {
  right: 10px;
}
.stt {
  position: sticky;
  z-index: 99;
  top: 10px;
  background: rgb(206, 227, 255);
}
</style>
