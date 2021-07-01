<template>
  <nav class="navbar white">
    <div class="dropdown text-right ">
      <div class="dropdown ">
        <router-link to="/profile"
          ><i class="fas fa-user icono"></i>
        </router-link>
      </div>
    </div>
    <button class="btn" @click="mostrar">
      <i :class="notificacion"
        ><span class="notss">{{ numero }}</span></i
      >
    </button>

    <div :class="not">
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
  </nav>
</template>

<script>
import axios from "axios";
import UserService from "../services/user.service";
export default {
  name: "Topbar",
  data() {
    return {
      pruebas: [],
      resultadosP: [],
      resultadosN: [],
      dispositivoMovil: false,
      id_usuario: "",
      desicion: false,
      hayNot: false,
      numero: 0,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    notificacion() {
      return !this.hayNot
        ? "fas fa-bell icono"
        : "fas fa-bell icono red rotate-center";
    },
    not() {
      return this.desicion
        ? "notificaciones overflow-auto swing-in-right-bck "
        : "notificaciones overflow-auto flip-out-ver-left";
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
    mostrar() {
      console.log(this.desicion);
      this.desicion = !this.desicion;
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
    async getNotificaciones() {
      this.id_usuario = this.$store.state.auth.user.id;
      this.numero = 0;
      try {
        const pruebas = await axios.get(
          "https://proyecto-tedw.herokuapp.com/prueba/abierta/" +
            this.id_usuario
        );
        this.pruebas = pruebas.data;
        console.log(this.pruebas.length);
        this.cargado = false;
        if (this.pruebas.length > 0) {
          this.hayNot = true;
          this.numero += this.pruebas.length;
        }
        console.log(this.hayNot);
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

        this.cargado = false;
        if (this.resultadosP.length > 0) {
          this.hayNot = true;
          this.numero += this.resultadosP.length;
        }
        console.log(this.hayNot);
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
        if (this.resultadosN.length > 0) {
          this.hayNot = true;
          this.numero += this.resultadosN.length;
        }
        console.log(this.hayNot);
      } catch (err) {
        console.log(err);
      }
      console.log(this.hayNot);
    },
  },
  created() {
    this.getNotificaciones();
  },
};
</script>

<style>
:root {
  --color-primario1: rgb(226, 239, 255);
  --color-primario: rgb(34, 76, 100);
}
.blanco {
  background: var(--color-primario);
  box-shadow: 0 1px 3px 2px rgba(170, 170, 170, 0.925);
  z-index: 1;
  color: white;
}
.round {
  border-radius: 50%;
  background: white;
  padding: 0.4rem 0.6rem;
}
.icono {
  font-size: 1.5rem;
  color: black;
}
.white {
  background: rgb(255, 255, 255);
  box-shadow: 0px 0px 20px 10px rgba(170, 170, 170, 0.925);
  margin-bottom: 10px;
  height: 3rem;
}
.notificaciones {
  position: absolute;
  right: 0px;
  top: 47px;
  width: 25%;
  height: 90vh;
  background: rgba(54, 54, 54, 0.61);
  padding: 20px;
  z-index: 99;
}
.red {
  color: red;
  font-weight: 1.7rem;
}
.rotate-center {
  -webkit-animation: rotate-center 0.6s ease-in-out both;
  animation: rotate-center 0.6s ease-in-out both;
}
.swing-in-right-bck {
  -webkit-animation: swing-in-right-bck 0.6s
    cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  animation: swing-in-right-bck 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    both;
}
.flip-out-ver-left {
  -webkit-animation: flip-out-ver-left 0.45s
    cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: flip-out-ver-left 0.45s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
@-webkit-keyframes flip-out-ver-left {
  0% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotateY(-70deg);
    transform: rotateY(-70deg);
    opacity: 0;
  }
}
@keyframes flip-out-ver-left {
  0% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotateY(-70deg);
    transform: rotateY(-70deg);
    opacity: 0;
  }
}
@-webkit-keyframes swing-in-right-bck {
  0% {
    -webkit-transform: rotateY(70deg);
    transform: rotateY(70deg);
    -webkit-transform-origin: right;
    transform-origin: right;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
    -webkit-transform-origin: right;
    transform-origin: right;
    opacity: 1;
  }
}
@keyframes swing-in-right-bck {
  0% {
    -webkit-transform: rotateY(70deg);
    transform: rotateY(70deg);
    -webkit-transform-origin: right;
    transform-origin: right;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
    -webkit-transform-origin: right;
    transform-origin: right;
    opacity: 1;
  }
}
@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.notss {
  font-size: 1rem;
  position: fixed;
  left: 0.4rem;
  top: 0.2rem;
  color: white;
}
</style>
