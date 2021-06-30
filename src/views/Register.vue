<template>
  <div class="container-fluid">
<router-link
        to="register/alumno"
        v-if="$route.fullPath !== '/register/personal' && $route.fullPath !== '/register/alumno'"
      >
        <button type="button" class="btn btn-outline-primary mt-2 mb-2">
          soy alumno
        </button>
      </router-link>
      <router-link
        to="register/personal"
        v-if="$route.fullPath !== '/register/alumno' && $route.fullPath !== '/register/personal'"
      >
        <button type="button" class="btn btn-outline-primary mt-2 mb-2">
          soy personal
        </button>
      </router-link>
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>