<template>
    <div class="container-fluid">
<form onsubmit="return false">
  <!-- TODO: enlazar los datos a la tabla correspondiente y hacer el envio por axios -->
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Sintomas</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">Describa los sintomas aqui</div>
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
export default {
  name: 'Solicitud_Medico',
  data() {
    return {
    selectedFile : null,
    uploadValue:0,
    picture:null,
    email:this.$store.state.auth.user.email,
    extension:""
    }
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile)
      var str = this.selectedFile.type;
      var inicio = str.search("/");
      var final = str.length;
      this.extension = str.slice(inicio+1,final)
    },
    onUpload(){
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
    console.log(this.picture)
  });
  });
}
    }
}
</script>

<style scoped>

</style>