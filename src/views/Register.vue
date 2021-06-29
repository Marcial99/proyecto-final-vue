<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <form name="form" @submit.prevent="handleRegister">
        <div v-if="!successful">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              v-model="user.username"
              v-validate="'required|min:3|max:20'"
              type="text"
              class="form-control"
              name="username"
            />
            <div
              v-if="submitted && errors.has('username')"
              class="alert-danger"
            >{{errors.first('username')}}</div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="user.email"
              v-validate="'required|email|max:50'"
              type="email"
              class="form-control"
              name="email"
            />
            <div
              v-if="submitted && errors.has('email')"
              class="alert-danger"
            >{{errors.first('email')}}</div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="user.password"
              v-validate="'required|min:6|max:40'"
              type="password"
              class="form-control"
              name="password"
            />
            <div
              v-if="submitted && errors.has('password')"
              class="alert-danger"
            >{{errors.first('password')}}</div>
          </div>
           <div class="form-group">
            <label>No control.</label>
            <input
              v-model="alumno.no_control"
              type="text"
              class="form-control"
              name="no_control"
              maxlength="8"
              required
            />
            <label>Nombre.</label>
            <input
              v-model="alumno.nombre"
              type="text"
              class="form-control"
              name="nombre"
              required
            />
            <label for="password">Apellido paterno.</label>
            <input
              v-model="alumno.a_paterno"
              type="text"
              class="form-control"
              name="a_paterno"
              required
            />
            <label for="password">Apellido materno.</label>
            <input
              v-model="alumno.a_materno"
              type="text"
              class="form-control"
              name="a_materno"
              required
            />
            <label for="password">Semestre.</label>
            <input
              v-model="alumno.semestre"
              type="number"
              class="form-control"
              name="semestre"
              min="1"
              max="12"
              step="1"
              required
            />
            <label for="password">Carrera.</label>
            <select v-model="carrera.id" class="form-select" required>
<option v-for="c in carreras" v-bind:value="c">{{carrera.nombre_carrera[c-1]}}</option>
</select>
<p>{{carrera.id}}</p>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block">Sign Up</button>
          </div>
        </div>
      </form>

      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >{{message}}</div>
    </div>
  </div>
</template>

<script>
import User from '../models/user';
import axios from 'axios';
export default {
  name: 'Register',
  data() {
    return {
      user: new User('', '', ''),
      submitted: false,
      successful: false,
      message: '',
      alumno:{
        no_control:"",
        nombre: "",
        a_paterno: "",
        a_materno:"",
        semestre: "",
        id_carrera: "",
        id_users: "",
        email: "",
      },
      
      carreras:[],
      names:[],
      carrera:{
        id:"",
        nombre_carrera:""
      }
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
    fetch("https://proyecto-tedw.herokuapp.com/carreras")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          this.carreras.push(item.id_carrera);
          this.names.push(item.carrera);
        });
this.carrera.id=this.carreras;
 this.carrera.nombre_carrera=this.names;
      });
  },
  methods: {
     submitForm(){
     console.log("mensaje enviado")
      axios.post("https://proyecto-tedw.herokuapp.com/alumnos",{
        no_control: this.alumno.no_control,
        nombre: this.alumno.nombre,
        a_paterno: this.alumno.a_paterno,
        a_materno: this.alumno.a_materno,
        semestre: this.alumno.semestre,
        id_carrera: this.carrera.id,
        email:this.user.email
      })
      .then(res => {
        console.log(res)
          this.$toast.open({
        message:"usuario registrado",
        type: "success",
        duration: 5000,
        dismissible: true,
      });
      })
      .catch(err => {
        console.error(err); 
      })
      
    },
    handleRegister() {
      this.message = '';
      this.submitted = true;
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch('auth/register', this.user).then(
            data => {
              this.message = data.message;
              this.successful = true;
              this.submitForm();
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
        }
      });
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 500px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>