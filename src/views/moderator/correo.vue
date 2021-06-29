<template>
    <div class="container">

        <div class="card mt-5 shadow" >
         <div class="card-header p-3 text-center">
             <h2>Correos capturados para la prueba {{id_prueba}}</h2>
            </div>
         <ul class="list-group list-group-flush"  v-for="(prueba,id) in pruebas":key="id">
            <li class="list-group-item">{{prueba.correo}}</li>
         </ul>
         <div class="text-center">
            <form  method="post"> 
                <input class="btn btn-primary m-3 text-center rounded" type="button" value="Enviar correos" v-on:click="enviarCorreo" :disabled='verificar'></input> 
            </form>
         </div>
         
        </div>
        


    </div>
</template>

<script>
// import { reactive, toRefs } from '@vue/composition-api'
import axios from 'axios';
export default {
    name: "correo",
    components: {

    },
    data() {
        return {
            id_prueba:this.$route.query.id_prueba,
            tipo_prueba:this.$route.query.tipo_prueba,
            resultado: this.$route.query.resultado,
            documento: this.$route.query.documento,
             id_medico: this.$route.query.id_medico,
            id_users: this.$route.query.id_users,
            status:this.$route.query.status,
            correos:[],
            pruebas:[],
            mensaje:  "",
            estatus:true

        }
    },
    computed: {
      verificar(){
        return !this.estatus;
      }
    },

    methods: {
        enviarCorreo: function(){
             Email.send({
                SecureToken: 'a2700456-889d-422f-baa8-53bf8715811c',
                To : this.correos,
                From : "control-covid@gmail.com",
                Subject : "Trazabilidad por contagio de covid",
                Body : this.mensaje
            }).then(
            message =>  Swal.fire({
  icon: 'success',
  title: message,
  text: 'Los correos y las alertas fueron enviadas correctamente',
 
}),
              this.updateForm(),
              this.estatus=false,
           
            
            );
            
        },
        updateForm(){
axios.put('https://proyecto-tedw.herokuapp.com/prueba/'+this.id_prueba, {
       tipo_prueba: this.tipo_prueba,
      resultado: this.resultado,
      documento: this.documento,
      id_medico: this.id_medico,
      id_users: this.id_users,
      status:"cerrado"
  })
  .then(function (response) {
    console.log(response);
  
  })
  .catch(function (error) {
    console.log(error);
  });
  this.$toast.open({
        message: "actualizacion existosa recarga la pagina",
        type: "warning",
        duration: 5000,
        dismissible: true
      })
    }
  
        ,
        async getCorreos() {
      try {
        const pruebas = await axios.get(
          "https://proyecto-tedw.herokuapp.com/traz/correo/"+this.id_prueba
        );
        this.pruebas = pruebas.data;
        console.log(pruebas);
        this.cargado = false;
        for (var a=0;a<this.pruebas.length;a++){
            this.correos[a]=this.pruebas[a].correo;
        }
        console.log(this.correos);
        this.mensaje="<h1>Aviso imporante</h1><br> <p>Has estado en contacto recientemente con una persona que ha sido positiva en una prueba de tipo "+this.tipo_prueba+" de COVID, te pedimos que para evitar la propagación de esta enfermedad tomes las medidas necesarias que se presentan a continuacion y visites de inmediato a tu medico</p> <br><br> <img src='https://pbs.twimg.com/media/EU8DHsZWsAAGAyZ.jpg' style='width=50%'> ";
        console.log(this.mensaje);
      } catch (err) {
        console.log(err);
      }
    },
    },
    created() {
    this.getCorreos();
  },
}
</script>

<style scoped>

</style>