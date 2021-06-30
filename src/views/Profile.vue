<template>
  <div class="container text-center">
    <header class="jumbotron">
      
    </header>
    <div class="card">
  <div class="card-header bg-info text-end">
    <div class="text-start"><i class="far fa-address-card fa-3x"></i></div>
    <h3>
        <strong class="text-uppercase">{{currentUser.username}}</strong>
      </h3>
  </div>
  <div class="card-body text-start">
    <h5 class="card-title">Credenciales:</h5>
       <p class="card-text">
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p>
    <p class="card-text">
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p class="card-text">
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
  </div>
  <strong>Roles asignados:</strong>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
  </ul>
</div>
<div class="form-group">
  <label >Si es la primera vez que se registra presione: completar registro</label>
  <br>
  <input type="text" class="form-control" placeholder="introduce tu id aqui......" v-model="id" disabled>
  <button type="submit" class="btn btn-warning" @click="updateAlumno">completar registro</button>
</div>
<a class="btn btn-danger" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Profile',
   data() {
    return {
      id: this.$store.state.auth.user.id,
      email: this.$store.state.auth.user.email
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
    //TODO: CREAR EL METODO QUE ACTUALIZA AL ALUMNO CUANDO ENCUENTRA SU EMAIL(MODIFICAR LA TABLA ALUMNO PARA ELLO)
    updateAlumno(){
       axios.put("https://proyecto-tedw.herokuapp.com/alumnos/updateid/"+this.email,{
        id_users: this.id,
      })
      .then(res => {
        console.log(res)
          this.$toast.open({
        message:"ha completado su registro",
        type: "success",
        duration: 5000,
        dismissible: true,
      });
      })
      .catch(err => {
        console.error(err); 
      })
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>