<template>
  <div class="container overflow-auto mt-5 shadow-lg border p-5">
    <h1 class="text-center mt-2">
      Detalles de la encuesta {{ encuesta.id_encuesta }}
    </h1>
    <div class="accordion mt-4" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Detalles de la encuesta
            </button>
          </h2>
        </div>
        <div
          id="collapseOne"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <h3>Id del usuario: {{ encuesta.id_users }}</h3>
            <h3>Modalidad de la encuesta: {{ encuesta.modalidad }}</h3>
            <h3 class="text-center">Respuestas</h3>
            <table
              class="table  table-responsive-md table-hover table-bordered "
              cellspacing="0"
            >
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Pregunta</th>
                  <th scope="col">Respuesta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong> 1.-</strong> ¿Siente fiebre, escalofríos como los
                    de una gripe, o una fiebre con una temperatura tomada por la
                    boca de 38,1°C (100,6°F) o más?
                  </td>
                  <td>{{ encuesta.r1 ? "Si" : "No" }}</td>
                </tr>
                <tr>
                  <td>
                    <strong>2.-</strong> ¿Ha tenido una pérdida repentina del
                    olfato sin congestión nasal (nariz tapada), con o sin
                    pérdida del gusto?
                  </td>
                  <td>{{ encuesta.r2 ? "Si" : "No" }}</td>
                </tr>

                <tr>
                  <td>
                    <strong>3.- </strong> ¿Ha desarrollado una tos o su tos
                    crónica ha empeorado recientemente?
                  </td>
                  <td>{{ encuesta.r3 ? "Si" : "No" }}</td>
                </tr>

                <tr>
                  <td>
                    <strong>4.-</strong> ¿Tiene problemas al respirar o le falta
                    el aliento?
                  </td>
                  <td>{{ encuesta.r4 ? "Si" : "No" }}</td>
                </tr>

                <tr>
                  <td><strong>5.-</strong> ¿Tiene dolor de garganta?</td>
                  <td>{{ encuesta.r5 ? "Si" : "No" }}</td>
                </tr>

                <tr>
                  <strong>6.-</strong>
                  ¿Tiene secreción o congestión nasal de causa desconocida?
                  <td>{{ encuesta.r6 ? "Si" : "No" }}</td>
                </tr>

                <tr>
                  <strong>7.-</strong>
                  Dolor de estómago
                  <td>{{ encuesta.r7 ? "Si" : "No" }}</td>
                </tr>

                <tr>
                  <strong>8.-</strong>
                  Náuseas o vómitos
                  <td>{{ encuesta.r8 ? "Si" : "No" }}</td>
                </tr>

                <tr>
                  <strong>9.-</strong>
                  Diarrea
                  <td>{{ encuesta.r9 ? "Si" : "No" }}</td>
                </tr>
                <tr>
                  <strong>10.-</strong>
                  Fatiga inusualmente intensa sin razón obvia
                  <td>{{ encuesta.r10 ? "Si" : "No" }}</td>
                </tr>
                <tr>
                  <strong>11.-</strong>
                  Pérdida significativa de apetito
                  <td>{{ encuesta.r11 ? "Si" : "No" }}</td>
                </tr>

                <tr>
                  <strong>12.-</strong>
                  Dolores musculares generalizados inusuales o sin razón obvia
                  (no relacionado con el esfuerzo físico)
                  <td>{{ encuesta.r12 ? "Si" : "No" }}</td>
                </tr>
                <tr>
                  <strong>13.-</strong>
                  Dolor de cabeza inhabitual
                  <td>{{ encuesta.r13 ? "Si" : "No" }}</td>
                </tr>
                <tr>
                  <strong>14.-</strong>
                  Otros sintomas
                  <td>{{ encuesta.r14 }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Levantar Prueba
            </button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          class="collapse show"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <label for="tipo_prueba" class="">Tipo de prueba</label>
            <select
              class="form-select"
              name="tipo_prueba"
              required
              v-model="tipo_prueba"
              id="tipo_prueba"
            >
              <option value="Prueba rápida de sangre"
                >Prueba rápida de sangre</option
              >
              <option value="Prueba rápida de antígenos"
                >Prueba rápida de antígenos</option
              >
              <option value="Prueba PCR"
                >Prueba PCR(Reacción en cadena de la polimerasa)</option
              >
            </select>

            <button
              class="btn btn-success mt-4 ml-2 font-weight-bold"
              :disabled="activo"
              v-on:click="submitPrueba"
            >
              Levantar Prueba
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserService from "../../services/user.service";
export default {
  data() {
    var id = this.$store.state.auth.user.id;
    return {
      id_encuesta: this.$route.query.id_encuesta,
      encuesta: [],
      tipo_prueba: "",
      activoo: false,
      medico: 0,
      id_usuario: id
    };
  },
  computed: {
    activo() {
      return this.activoo;
    },
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    async getEncuesta() {
      try {
        const encuesta = await axios.get(
          "https://proyecto-tedw.herokuapp.com/encuestas/" + this.id_encuesta
        );
        this.encuesta = encuesta.data;
        console.log(encuesta);
        this.cargado = false;
      } catch (err) {
        console.log(err);
      }
    },
    async getMedico() {
      try {
        const medico = await axios.get(
          "https://proyecto-tedw.herokuapp.com/usuario/medicos/" + this.id_usuario
        );
        this.medico = medico.data[0];
        console.log(medico);
        this.cargado = false;
      } catch (err) {
        console.log(err);
      }
    },
    submitPrueba() {
      axios
        .post("https://proyecto-tedw.herokuapp.com/prueba", {
          tipo_prueba: this.tipo_prueba,
          resultado: "Sin resultado",
          documento: "Sin documento",
          status: "abierta",
          id_medico: this.medico.id_medico,
          id_users: this.encuesta.id_users,
        })
        .then((response) => {
          console.log(response);
          this.activoo = true;
          this.encuesta.status = "cerrado";
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .put(
          "https://proyecto-tedw.herokuapp.com/encuestas/" +
            this.encuesta.id_encuesta,
          {
            modalidad: this.encuesta.modalidad,
            id_users: this.encuesta.id_users,
            fecha: this.encuesta.fecha,
            r1: this.encuesta.r1,
            r2: this.encuesta.r2,
            r3: this.encuesta.r3,
            r4: this.encuesta.r4,
            r5: this.encuesta.r5,
            r6: this.encuesta.r6,
            r7: this.encuesta.r7,
            r8: this.encuesta.r8,
            r9: this.encuesta.r9,
            r10: this.encuesta.r10,
            r11: this.encuesta.r11,
            r12: this.encuesta.r12,
            r13: this.encuesta.r13,
            r14: this.encuesta.r14,
            resultado: this.encuesta.resultado,
            status: "cerrada",
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getEncuesta();
    this.getMedico();
  },
};
</script>

<style scoped></style>
