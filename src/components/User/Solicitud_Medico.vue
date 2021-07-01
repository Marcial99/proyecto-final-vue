<template>
    <div class="container-fluid">
<form onsubmit="return false">
  <!-- TODO: enlazar los datos a la tabla correspondiente y falta guardar las direcciones de las fotos-->
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Sintomas</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="sintomas">
    <div id="emailHelp" class="form-text">Describa los sintomas aqui</div>
    <select v-model="tipo_de_consulta" class="form-select" aria-label="Default select example">
  <option disabled value="">Seleccione un elemento</option>
  <option>virtual</option>
  <option>presencial</option>
</select>
<span>Seleccionado: {{ tipo_de_consulta }}</span>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Evidencias (fotos)</label>
    <input type="file" class="form-control" id="exampleInputPassword1" @change="onFileSelected" accept="image/jpeg,image/png,application/pdf">
  </div>
  <div class="mb-3">
    <progress :value="uploadValue" class="progress-bar progress-bar-striped" role="progressbar" style="width: 100%" 
 v-bind:aria-valuenow="uploadValue" aria-valuemin="0" aria-valuemax="100" progressbar> % </progress>
  </div>
   <div class="container-fluid">
<iframe :src="picture" style="width:100%; height:100%;" frameborder="0"></iframe>
    </div>
  <button type="submit" class="btn btn-primary" @click="onUpload">Enviar</button>
  </form>
    </div>
</template>

<script>
// @ is an alias to /src

import firebase from 'firebase'
import axios from 'axios'
import vue from 'vue';
export default {
  name: 'Solicitud_Medico',
  data() {
    return {
    selectedFile : null,
    uploadValue:0,
    picture:null,
    email:this.$store.state.auth.user.email,
    id_users:this.$store.state.auth.user.id,
    status:"abierta",
    id_medico:"",
    sintomas:"",
    foto:"",
    tipo_de_consulta:"",
    extension:""
    }
  },
  methods: {
    uploadForm(){
axios.post("https://proyecto-tedw.herokuapp.com/consultas",{
  sintomas:this.sintomas,
  id_medico:"",
  id_users: this.id_users,
  status: this.status,
  fotos:this.foto,
  tipo_de_consulta:this.tipo_de_consulta,
})
.then(res => {
  console.log(res)
   vue.$toast.open({
        message: "solicitud enviada",
        type: "success",
        duration: 5000,
        dismissible: true,
      });
})
.catch(err => {
  console.error(err); 
});
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile)
      var str = this.selectedFile.type;
      var inicio = str.search("/");
      var final = str.length;
      this.extension = str.slice(inicio+1,final)
    },
    onUpload(){
      // this.uploadForm();
      var n = Date.now();
      var storageRef = firebase.storage().ref(`/imagenes/${n}_${this.email}.${this.extension}`);;
      if(this.selectedFile.type=="application/pdf"){
       storageRef = firebase.storage().ref(`/documentos/${n}_${this.email}.${this.extension}`);
      }

const task = storageRef.put(this.selectedFile);
task.on(`state_changed`,snapshot=>{
  let percentage =(snapshot.bytesTransferred/snapshot.totalBytes)*100;
  this.uploadValue=percentage;
},error=>{console.log(error.message)},
  ()=>{this.uploadValue=100;
  //downloadUrl
  task.snapshot.ref.getDownloadURL().then((url)=>{
    this.picture=url;
    this.foto=url;
    this.uploadForm();
    console.log(this.picture)
  });
  });
}
    }
}
</script>

<style scoped>

</style>