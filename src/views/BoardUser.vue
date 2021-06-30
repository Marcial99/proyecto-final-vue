<template>
  <div class="container-fluid col-sm-6 text-start">
    <div class="notificaciones">
      <div v-for="prueba in pruebas" :key="prueba.id_prueba">
        <div class="alert alert-danger" role="alert">
          <h4 class="alert-heading">Debes hacerte una prueba</h4>
          <p>Id prueba: {{ prueba.id_prueba }}</p>
          <p>Tipo de prueba: {{ prueba.tipo_prueba }}</p>
          <button class="btn btn-primary" @click="submitPrueba(prueba)">
            Aceptar prueba
          </button>
        </div>
      </div>
    </div>
    <div class="text-center">
      <router-link
        to="user/solicitud_medico"
        v-if="$route.fullPath !== '/user/solicitud_medico'"
      >
        <button type="button" class="btn btn-outline-primary mt-2 mb-2">
          Solicitar cita medica
        </button>
      </router-link>
      <router-view></router-view>
    </div>
    <form @submit.prevent="submitForm">
      <div class="stt mb-2 p-2 shadow-lg rounded">
        <h6>Progreso:</h6>

        <div class="progress">
          <div
            class="progress-bar  progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="valor"
          ></div>
        </div>
      </div>
      <div class="">
        <div class="card shadow rounded mb-4">
          <div class="card-header">
            <strong> 1.- </strong> ¿Siente fiebre, escalofríos como los de una
            gripe, o una fiebre con una temperatura tomada por la boca de 38,1°C
            (100,6°F) o más?
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r1"
                id="flexRadioDefault1"
                value="true"
                v-model="r1"
                required
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r1"
                id="flexRadioDefault2"
                value="false"
                checked
                v-model="r1"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card  shadow rounded mb-4">
          <div class="card-header">
            <strong>2.-</strong> ¿Ha tenido una pérdida repentina del olfato sin
            congestión nasal (nariz tapada), con o sin pérdida del gusto?
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r2"
                id="flexRadioDefault1"
                value="true"
                v-model="r2"
                required
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r2"
                id="flexRadioDefault2"
                value="false"
                v-model="r2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card  shadow rounded  mb-4">
          <div class="card-header">
            <strong>3.- </strong> ¿Ha desarrollado una tos o su tos crónica ha
            empeorado recientemente?
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r3"
                id="flexRadioDefault1"
                value="true"
                v-model="r3"
                required
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r3"
                id="flexRadioDefault2"
                value="false"
                v-model="r3"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card rounded shadow  mb-4">
          <div class="card-header">
            <strong>4.-</strong> ¿Tiene problemas al respirar o le falta el
            aliento?
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r4"
                id="flexRadioDefault1"
                value="true"
                v-model="r4"
                required
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r4"
                id="flexRadioDefault2"
                value="false"
                v-model="r4"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card shadow  rounded  mb-4">
          <div class="card-header">
            <strong>5.-</strong> ¿Tiene dolor de garganta?
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r5"
                id="flexRadioDefault1"
                value="true"
                v-model="r5"
                required
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r5"
                id="flexRadioDefault2"
                value="false"
                v-model="r5"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card shadow rounded  mb-4">
          <div class="card-header">
            <strong>6.-</strong> ¿Tiene secreción o congestión nasal de causa
            desconocida?
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r6"
                id="flexRadioDefault1"
                value="true"
                v-model="r6"
                required
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r6"
                id="flexRadioDefault2"
                value="false"
                v-model="r6"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card shadow rounded  mb-4">
          <div class="card-header"><strong>7.-</strong> Dolor de estómago</div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r7"
                id="flexRadioDefault1"
                value="true"
                v-model="r7"
                required
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r7"
                id="flexRadioDefault2"
                value="false"
                v-model="r7"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card shadow rounded  mb-4">
          <div class="card-header"><strong>8.-</strong> Náuseas o vómitos</div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r8"
                id="flexRadioDefault1"
                value="true"
                v-model="r8"
                required
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r8"
                id="flexRadioDefault2"
                value="false"
                v-model="r8"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card shadow rounded  mb-4">
          <div class="card-header"><strong>9.-</strong> Diarrea</div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r9"
                id="flexRadioDefault1"
                value="true"
                v-model="r9"
                required
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r9"
                id="flexRadioDefault2"
                value="false"
                v-model="r9"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card rounded shadow  mb-4">
          <div class="card-header">
            <strong>10.-</strong> Fatiga inusualmente intensa sin razón obvia
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r10"
                id="flexRadioDefault1"
                value="true"
                v-model="r10"
                required
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r10"
                id="flexRadioDefault2"
                value="false"
                v-model="r10"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card shadow rounded mb-4">
          <div class="card-header">
            <strong>11.-</strong> Pérdida significativa de apetito
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r11"
                id="flexRadioDefault1"
                value="true"
                v-model="r11"
                required
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r11"
                id="flexRadioDefault2"
                value="false"
                v-model="r11"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card rounded shadow  mb-4">
          <div class="card-header">
            <strong>12.-</strong> Dolores musculares generalizados inusuales o
            sin razón obvia (no relacionado con el esfuerzo físico)
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r12"
                id="flexRadioDefault1"
                value="true"
                v-model="r12"
                required
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r12"
                id="flexRadioDefault2"
                value="false"
                v-model="r12"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card shadow rounded  mb-3">
          <div class="card-header">
            <strong>13.-</strong> Dolor de cabeza inhabitual
          </div>
          <div class="card-body text-dark">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r13"
                id="flexRadioDefault1"
                value="true"
                v-model="r13"
                required
              />
              <label class="form-check-label" for="flexRadioDefault1">
                si
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="r13"
                id="flexRadioDefault2"
                value="false"
                v-model="r13"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                no
              </label>
            </div>
          </div>
        </div>

        <div class="card shadow rounded  mb-4">
          <div class="card-header">
            <strong>14.-</strong> Describa si tiene otros síntomas:
          </div>
          <div class="card-body text-dark">
            <input
              type="text"
              class="form-control"
              name="r14"
              v-model="r14"
              aria-describedby="helpId"
              placeholder="Escribe aqui.."
            />
            <br />
            <select
              class="form-select"
              aria-label="Default select example"
              name="modalidad"
              v-model="modalidad"
              required
            >
              <option selected>MODALIDAD DE LA ENCUESTA</option>
              <option value="obligatoria">obligatoria</option>
              <option value="voluntaria">voluntaria</option>
              <option value="aleatoria">aleatoria</option>
            </select>
          </div>
        </div>
      </div>
      <div class="right">
        <button type="submit" class="btn btn-primary ml-4 btn-md">
          Enviar
        </button>
      </div>
    </form>
    <!-- <p> {{id_usuario}} </p> -->
    <!-- <h3>Data retrieved from server:</h3>
    <div class="alert alert-success" role="alert" v-if="success">
      <strong>{{ success }}</strong>
    </div>
    <pre>{{ response }}</pre> -->
  </div>
</template>

<script>
import UserService from "../services/user.service";
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
          id_medico: 2,
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
    },
    submitForm() {
      if (this.r1 == "true") {
        this.contador += 1;
      }
      if (this.r2 == "true") {
        this.contador += 1;
      }
      if (this.r3 == "true") {
        this.contador += 1;
      }
      if (this.r4 == "true") {
        this.contador += 1;
      }
      if (this.r5 == "true") {
        this.contador += 1;
      }
      if (this.r6 == "true") {
        this.contador += 1;
      }
      if (this.r7 == "true") {
        this.contador += 1;
      }
      if (this.r8 == "true") {
        this.contador += 1;
      }
      if (this.r9 == "true") {
        this.contador += 1;
      }
      if (this.r10 == "true") {
        this.contador += 1;
      }
      if (this.r11 == "true") {
        this.contador += 1;
      }
      if (this.r12 == "true") {
        this.contador += 1;
      }
      if (this.r13 == "true") {
        this.contador += 1;
      }
      if (this.r14 == "true") {
        this.contador += 1;
      }
      if (this.contador > 5) {
        this.resultadoFinal = "sospechoso";
      }
      axios
        .post("https://proyecto-tedw.herokuapp.com/encuestas", {
          modalidad: this.modalidad,
          id_users: this.id_usuario,
          fecha: this.fecha,
          r1: this.r1,
          r2: this.r2,
          r3: this.r3,
          r4: this.r4,
          r5: this.r5,
          r6: this.r6,
          r7: this.r7,
          r8: this.r8,
          r9: this.r9,
          r10: this.r10,
          r11: this.r11,
          r12: this.r12,
          r13: this.r13,
          r14: this.r14,
          resultado: this.resultadoFinal,
          status: "abierta",
        })
        .then((response) => {
          console.log(response);
          this.response = response.data;
          this.success = "Data saved successfully";
          this.response = JSON.stringify(response, null, 2);
          (this.modalidad = ""),
            (this.r1 = ""),
            (this.r2 = ""),
            (this.r3 = ""),
            (this.r4 = ""),
            (this.r5 = ""),
            (this.r6 = ""),
            (this.r7 = ""),
            (this.r8 = ""),
            (this.r9 = ""),
            (this.r10 = ""),
            (this.r11 = ""),
            (this.r12 = ""),
            (this.r13 = ""),
            (this.r14 = ""),
            (this.resultadoFinal = ""),
            (this.resultado1 = 0);
        })
        .catch((error) => {
          console.log(error);
        });
      this.$toast.open({
        message: "Registro existoso",
        type: "success",
        duration: 5000,
        dismissible: true,
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
.notificaciones {
  position: fixed;
  right: 10px;
  width: 20%;
}
</style>
