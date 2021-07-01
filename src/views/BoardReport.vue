<template>
  <div class="container overflow-auto mt-5 shadow-lg border p-5">
    <hr />
    <h1 class="text-center mt-2">Reportes</h1>
    <hr />
    <div class="card">
      <h5 class="card-header">Estudiantes de la institución</h5>
      <div class="card-body">
        <p class="card-text">
          Listado de los casos detectados dentro de la institución
        </p>
        <router-link to="/casosEstudiante">
          <button
            type="button"
            class="btn btn-primary rounded font-weight-bold"
          >
            Detalles
          </button>
        </router-link>
      </div>
    </div>
    <br />
    <div class="card">
      <h5 class="card-header">Personal de la institución</h5>
      <div class="card-body">
        <p class="card-text">
          Listado de los casos detectados dentro de la institución
        </p>
        <router-link to="/casosPersonal">
          <button
            type="button"
            class="btn btn-primary rounded font-weight-bold"
          >
            Detalles
          </button>
        </router-link>
      </div>
    </div>

    <br />

    <div class="card">
      <h5 class="card-header">Carreras</h5>
      <div class="card-body">
        <p class="card-text">Listado de casos positivos por carrera</p>
        <router-link to="/casosCarrera">
          <button
            type="button"
            class="btn btn-primary rounded font-weight-bold"
          >
            Detalles
          </button>
        </router-link>
      </div>
    </div>
    <br />
    <div class="card">
      <h5 class="card-header">Departamentos</h5>
      <div class="card-body">
        <p class="card-text">Listado de casos positivos por departamento</p>
        <router-link to="/casosDepartamento">
          <button
            type="button"
            class="btn btn-primary rounded font-weight-bold"
          >
            Detalles
          </button>
        </router-link>
      </div>
    </div>
    <br />
    <hr />
    <h1 class="text-center mt-2">Gráficas</h1>
    <hr />
    <div class="card">
      <h5 class="card-header">Carrera y departamento</h5>
      <div class="card-body">
        <p class="card-text">
          Gráfica de casos positivos por carrera y departamento
        </p>

        <router-link to="/graCasosCarrera">
          <button
            type="button"
            class="btn btn-primary rounded font-weight-bold"
          >
            Ver
          </button>
        </router-link>
      </div>
    </div>
    <br />
    <div class="card">
      <h5 class="card-header">Carrera y departamento</h5>
      <div class="card-body">
        <p class="card-text">
          Gráfica de encuestas aplicadas por carrera y departamento
        </p>

        <router-link to="/graCasosEncuesta">
          <button
            type="button"
            class="btn btn-primary rounded font-weight-bold"
          >
            Ver
          </button>
        </router-link>
      </div>
    </div>
    <br />
    <div class="card">
      <h5 class="card-header">Medicos</h5>
      <div class="card-body">
        <p class="card-text">Gráfica de consultas atendidas por médicos</p>

        <router-link to="/graCasosMedico">
          <button
            type="button"
            class="btn btn-primary rounded font-weight-bold"
          >
            Ver
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "Report",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    UserService.getReportBoard().then(
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
