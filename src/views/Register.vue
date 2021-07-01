<template>
  <div class="container-fluid">
    <div class="row">
  <div class="col-sm-6">
     <router-link
        to="register/alumno"
        v-if="$route.fullPath !== '/register/personal' && $route.fullPath !== '/register/alumno'"
      >
       <div class="card">
      <div class="card-body">
        <h5 class="card-title">Registro para estudiante</h5>
        <p class="card-text">En esta seccion se pueden registrar los alumnos con correo institucional</p>
        <a type="button" class="btn btn-outline-primary mt-2 mb-2">
          soy alumno
        </a>
      </div>
    </div>
       
      </router-link>
  </div>
  <div class="col-sm-6">
    <router-link
        to="register/personal"
        v-if="$route.fullPath !== '/register/alumno' && $route.fullPath !== '/register/personal'"
      >
       <div class="card">
      <div class="card-body">
        <h5 class="card-title">Registro para personal</h5>
        <p class="card-text">En esta seccion se pueden registrar personal de la institucion</p>
        <a type="button" class="btn btn-outline-primary mt-2 mb-2">
          soy personal
        </a>
      </div>
    </div>
      </router-link>
  </div>
</div>
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>