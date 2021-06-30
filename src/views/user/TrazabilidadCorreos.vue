<template>
  <div class="contenedor">
    <h1 class="text-center">
      Ingresa los correos de las personas con las que has tenido contacto los
      últimos días
    </h1>
    <br /><br />

    <form @submit.prevent="procesarFormulario">
      <!-- <div class="form-inline col-md-12">
        <label for="correo" class="col-md-4 ">Mensaje:</label>
        <textarea
          class="form-control col-md-8 my-2"
          placeholder="Mensaje"
          v-model.trim="correo.mensaje"
        />
      </div> -->
      <div
        class="form-inline col-md-12"
        v-for="(correoo, index) in numero"
        :key="index"
      >
        <label for="correo" class="col-md-4">Correo:</label>
        <input
          type="email"
          class="form-control col-md-8 my-2"
          placeholder="email"
          v-model.trim="correo.correos[index]"
        />
      </div>
      <div class="text-right">
        <button @click.prevent="agregar" class="btn btn-primary btnMas">
          +
        </button>
      </div>
      <div class="text-center">
        <button
          class="btn btn-primary mt-2 col-md-6 "
          type="submit"
          @click.prevent="procesarFormulario"
          :disabled="bloquear"
        >
          Enviar
        </button>
      </div>
      <hr />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TrazavilidadCorreos",
  components: {},
  data() {
    return {
      correo: {
        correos: [],
      },

      numero: 1,

      id_prueba: this.$route.query.id_prueba,
      tipo_prueba: this.$route.query.tipo_prueba,
      resultado: this.$route.query.resultado,
      documento: this.$route.query.documento,
      id_medico: this.$route.query.id_medico,
      id_users: this.$route.query.id_users,
      status: this.$route.query.status,
    };
  },

  methods: {
    agregar() {
      this.numero += 1;
      console.log(this.numero);
      console.log("correo: " + this.correo.correos);
    },
    procesarFormulario() {
      console.log(this.id_prueba);
      console.log(this.correo2);
      for (let i = 0; i < this.correo.correos.length; i++) {
        axios
          .post("https://proyecto-tedw.herokuapp.com/traz", {
            id_prueba: this.id_prueba,
            correo: this.correo.correos[i],
          })
          .then(function(response) {
            console.log(response);
            // location.reload();
          })
          .catch(function(error) {
            console.log(error);
          });
        this.$toast.open({
          message: "Registro existoso",
          type: "success",
          duration: 5000,
          dismissible: true,
        });
      }
      this.updateForm();
      // location.reload();
    },
    updateForm() {
      axios
        .put("https://proyecto-tedw.herokuapp.com/prueba/" + this.id_prueba, {
          tipo_prueba: this.tipo_prueba,
          resultado: this.resultado,
          documento: this.documento,
          id_medico: this.id_medico,
          id_users: this.id_users,
          status: "correos",
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  computed: {
    bloquear() {
      if (this.correo.correos[0] === "") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.contenedor {
  border: 1px solid rgb(209, 209, 209);
  width: 90%;
  margin: 40px auto;
  padding: 40px;
  text-align: left;
  background: white;
  box-shadow: 0px 0px 10px 0px rgba(95, 95, 95, 0.986);
  border-radius: 0px;
}
</style>
