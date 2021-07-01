<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
          <div class="card text-white bg-danger mt-4">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="https://picsum.photos/500?grayscale"
                  class="card-img-top m-0"
                  alt="image"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-capitalize font-weight-bold">
                    Carreras
                  </h5>
                  <p class="card-text text-capitalize">
                    en esta seccion se controlan las carreras
                  </p>
                  <router-link to="/carrera">
                    <button
                      type="button"
                      class="btn btn-primary rounded font-weight-bold"
                    >
                      Administrar
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card text-white bg-danger mt-4 ">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="https://picsum.photos/500?grayscale"
                  class="card-img-top m-0"
                  alt="image"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-capitalize font-weight-bold">
                    Alumnos
                  </h5>
                  <p class="card-text text-capitalize">
                    en esta seccion se controlan los Alumnos
                  </p>
                  <router-link to="/alumno">
                    <button
                      type="button"
                      class="btn btn-primary font-weight-bold"
                    >
                      Administrar
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Force next columns to break to new line -->
        <div class="w-100"></div>

        <div class="col-6 ">
          <div class="card text-white bg-success mt-4">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="https://picsum.photos/500?grayscale"
                  class="card-img-top m-0"
                  alt="image"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">Medicos</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <router-link to="/medico">
                    <button
                      type="button"
                      class="btn btn-primary font-weight-bold"
                    >
                      Administrar
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card text-white bg-success mt-4">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="https://picsum.photos/500?grayscale"
                  class="card-img-top m-0"
                  alt="image"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">Roles</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <router-link to="/rol">
                    <button
                      type="button"
                      class="btn btn-primary font-weight-bold"
                    >
                      Administrar
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card text-white bg-success mt-4">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="https://picsum.photos/500?grayscale"
                  class="card-img-top m-0"
                  alt="image"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">Usuarios</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <router-link to="/usuario">
                    <button
                      type="button"
                      class="btn btn-primary font-weight-bold"
                    >
                      Administrar
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card text-white bg-success mt-4">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="https://picsum.photos/500?grayscale"
                  class="card-img-top m-0"
                  alt="image"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">Alertas</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <router-link to="/alerta">
                    <button
                      type="button"
                      class="btn btn-primary font-weight-bold"
                    >
                      Administrar
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card text-white bg-success mt-4">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="https://picsum.photos/500?grayscale"
                  class="card-img-top m-0"
                  alt="image"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">Encuestas</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <router-link to="/encuesta">
                    <button
                      type="button"
                      class="btn btn-primary font-weight-bold"
                    >
                      Administrar
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card text-white bg-success mt-4">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="https://picsum.photos/500?grayscale"
                  class="card-img-top m-0"
                  alt="image"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">Personal</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <router-link to="/personal">
                    <button
                      type="button"
                      class="btn btn-primary font-weight-bold"
                    >
                      Administrar
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card text-white bg-success mt-4 mb-5">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="https://picsum.photos/500?grayscale"
                  class="card-img-top m-0"
                  alt="image"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">Prueba</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <router-link to="/prueba">
                    <button
                      type="button"
                      class="btn btn-primary font-weight-bold"
                    >
                      Administrar
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 ">
          <div class="card text-white bg-success mt-4 mb-5">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="https://picsum.photos/500?grayscale"
                  class="card-img-top m-0"
                  alt="image"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">Trazabilidad</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <router-link to="/trazabilidad">
                    <button
                      type="button"
                      class="btn btn-primary font-weight-bold"
                    >
                      Administrar
                    </button>
                  </router-link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div class="col-6 ">
          <div class="card text-white bg-success mt-4 mb-5">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="https://picsum.photos/500?grayscale"
                  class="card-img-top m-0"
                  alt="image"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">Consulta</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <router-link to="/consulta">
                    <button
                      type="button"
                      class="btn btn-primary font-weight-bold"
                    >
                      Administrar
                    </button>
                  </router-link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div class="col-6 ">
          <div class="card text-white bg-success mt-4 mb-5">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="https://picsum.photos/500?grayscale"
                  class="card-img-top m-0"
                  alt="image"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">Receta</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <router-link to="/receta">
                    <button
                      type="button"
                      class="btn btn-primary font-weight-bold"
                    >
                      Administrar
                    </button>
                  </router-link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "Admin",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    UserService.getAdminBoard().then(
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
