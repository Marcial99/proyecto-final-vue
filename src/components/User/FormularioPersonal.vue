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
               pattern="[a-z0-9._%+-]+@itcelaya.edu.mx"
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
            <label for="password">Cargo.</label>
            <input
              v-model="alumno.cargo"
              type="text"
              class="form-control"
             
              min="1"
              max="12"
              step="1"
              required
            />
            <select v-model="alumno.departamento" class="form-select">
<option value="Actividades Extraescolares">Actividades Extraescolares</option>
<option value="Calidad (RD SGC)">Calidad (RD SGC)</option>
<option value="Centro de Cómputo">Centro de Cómputo</option>
<option value="Centro de Información">Centro de Información</option>
<option value="Ciencias Básicas">Ciencias Básicas</option>
<option value="Comunicación y Difusión">Comunicación y Difusión</option>
<option value="Departamento de Ciencias Económico Administrativas">Departamento de Ciencias Económico Administrativas</option>
<option value="Departamento de Gestión Tecnológica y Vinculación">Departamento de Gestión Tecnológica y Vinculación</option>
<option value="Departamento de Ingeniería Bioquímica">Departamento de Ingeniería Bioquímica</option>
<option value="Departamento de Ingeniería Electrónica">Departamento de Ingeniería Electrónica</option>
<option value="Departamento de Ingeniería en Mecatrónica">Departamento de Ingeniería en Mecatrónica</option>
<option value="Departamento de Ingeniería en Sistemas Computacionales e Informática">Departamento de Ingeniería en Sistemas Computacionales e Informática</option>
<option value="Departamento de Ingeniería Industrial">Departamento de Ingeniería Industrial</option>
<option value="Departamento de Ingeniería Mecánica">Departamento de Ingeniería Mecánica</option>
<option value="Departamento de Ingeniería Química">Departamento de Ingeniería Química</option>
<option value="Desarrollo Académico">Desarrollo Académico</option>
<option value="Dirección">Dirección</option>
<option value="División de Estudios de Posgrado e Investigación">División de Estudios de Posgrado e Investigación</option>
<option value="División de Estudios Profesionales">División de Estudios Profesionales</option>
<option value="División de Estudios Profesionales / Propedéutico">División de Estudios Profesionales / Propedéutico</option>
<option value="Gestión Tecnológica y Vinculación">Gestión Tecnológica y Vinculación</option>
<option value="Ingeniería Ambiental">Ingeniería Ambiental</option>
<option value="Mantenimiento de Equipo">Mantenimiento de Equipo</option>
<option value="Planeación, Programación y Presupuestación">Planeación, Programación y Presupuestación</option>
<option value="Recursos Financieros">Recursos Financieros</option>
<option value="Recursos Humanos">Recursos Humanos</option>
<option value="Recursos Materiales y Servicios">Recursos Materiales y Servicios</option>
<option value="Servicios Escolares">Servicios Escolares</option>
<option value="Sindicato">Sindicato</option>
<option value="Subdirección Académica">Subdirección Académica</option>
<option value="Subdirección de Planeación y Vinculación">Subdirección de Planeación y Vinculación</option>
<option value="Subdirección de Servicios Administrativos">Subdirección de Servicios Administrativos</option>
</select>        
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
import User from '@/models/user';
import axios from 'axios';
export default {
  name: 'FormularioPersonal',
  data() {
    return {
      user: new User('', '', ''),
      submitted: false,
      successful: false,
      message: '',
      alumno:{
        nombre: "",
        a_paterno: "",
        a_materno:"",
        cargo: "",
        departamento: "",
        id_users: "",
        email: "",
      },

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
  },
  methods: {
     submitForm(){
     console.log("mensaje enviado")
      axios.post("https://proyecto-tedw.herokuapp.com/personal",{
        nombre: this.alumno.nombre,
        a_paterno: this.alumno.a_paterno,
        a_materno: this.alumno.a_materno,
        cargo: this.alumno.cargo,
        departamento: this.alumno.departamento,
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