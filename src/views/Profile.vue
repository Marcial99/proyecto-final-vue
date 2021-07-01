<template>
  <div class="container text-center">
    <!-- <header class="jumbotron">
      
    </header> -->
    <br />
    <br />
    <br />
    <br />
    <div class="card">
      <div class="card-header bg-info text-end">
        <div class="text-start"><i class="far fa-address-card fa-3x"></i></div>
        <h3>
          <strong class="text-uppercase">{{ currentUser.username }}</strong>
        </h3>
      </div>
      <div class="card-body text-start">
        <h5 class="card-title">Credenciales:</h5>
        <p class="card-text">
          <strong>Token:</strong>
          {{ currentUser.accessToken.substring(0, 20) }} ...
          {{
            currentUser.accessToken.substr(currentUser.accessToken.length - 20)
          }}
        </p>
        <p class="card-text">
          <strong>Id:</strong>
          {{ currentUser.id }}
        </p>
        <p class="card-text">
          <strong>Email:</strong>
          {{ currentUser.email }}
        </p>
      </div>
      <strong>Roles asignados:</strong>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item"
          v-for="(role, index) in currentUser.roles"
          :key="index"
        >
          {{ role }}
        </li>
      </ul>
    </div>
    <div class="form-group">
      <label
        >Si es la primera vez que se registra presione: completar
        registro</label
      >
      <br />
      <input type="hidden" class="form-control" v-model="id" disabled />
      <button type="submit" class="btn btn-warning" @click="updateAlumno">
        completar registro
      </button>
    </div>
    <a class="btn btn-danger" href @click.prevent="logOut">
      <font-awesome-icon icon="sign-out-alt" />LogOut
    </a>
  </div>
</template>

<script>
import axios from "axios";
import vue from "vue";
export default {
  name: "Profile",
  data() {
    return {
      id: this.$store.state.auth.user.id,
      email: this.$store.state.auth.user.email,
      bandera: false,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
      location.reload();
    },

    //TODO: CREAR EL METODO QUE ACTUALIZA AL ALUMNO CUANDO ENCUENTRA SU EMAIL(MODIFICAR LA TABLA ALUMNO PARA ELLO)
    updateAlumno() {
      if (this.bandera == true) {
        axios
          .put(
            "https://proyecto-tedw.herokuapp.com/alumnos/updateid/" +
              this.email,
            {
              id_users: this.id,
            }
          )
          .then((res) => {
            console.log(res);
            vue.$toast.open({
              message: "ha completado su registro",
              type: "success",
              duration: 5000,
              dismissible: true,
            });
          })
          .catch((err) => {
            console.error(err);
            vue.$toast.open({
              message: "ha ocurrido algo, revise su registro",
              type: "error",
              duration: 5000,
              dismissible: true,
            });
          });
      } else {
        axios
          .put(
            "https://proyecto-tedw.herokuapp.com/personal/updateid/" +
              this.email,
            {
              id_users: this.id,
            }
          )
          .then((res) => {
            console.log(res);
            vue.$toast.open({
              message: "ha completado su registro",
              type: "success",
              duration: 5000,
              dismissible: true,
            });
          })
          .catch((err) => {
            console.error(err);
            vue.$toast.open({
              message: "ha ocurrido algo, revise su registro",
              type: "error",
              duration: 5000,
              dismissible: true,
            });
          });
      }
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
    const pattern = /[0-9]{8}@itcelaya.edu.mx/i;
    console.log(pattern.test(this.email));
    this.bandera = pattern.test(this.email);
    console.log(this.bandera);
  },
};
</script>
