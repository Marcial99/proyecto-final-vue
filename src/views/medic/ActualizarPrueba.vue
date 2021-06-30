<template>
  <div class="container border rounded mt-5 p-5">
    <div>
      <h1 class="text-center">Actualizar prueba</h1>
      <h6>Id prueba: {{ id_prueba }}</h6>
      <h6>Tipo de prueba: {{ tipo_prueba }}</h6>
      <h6>Id medico: {{ id_medico }}</h6>
      <h6>Id usuario: {{ id_users }}</h6>
      <label for="resultado">Resultado:</label>
      <div class="mb-3">
        <select
          class="form-control"
          v-model="resultado"
          type="text"
          name=""
          id=""
        >
          <option value="positivo">Positivo</option>
          <option value="negativo">Negativo</option>
        </select>
      </div>
    </div>
    <div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Documento</label>
        <input
          type="file"
          class="form-control"
          id="exampleInputPassword1"
          @change="onFileSelected"
          accept="image/jpeg,image/png,application/pdf"
        />
      </div>
      <div class="container-fluid">
        <iframe
          :src="picture"
          style="width:100%; height:100%;"
          frameborder="0"
        ></iframe>
      </div>
      <div></div>
      <button type="submit" class="btn btn-primary" @click="onUpload">
        Enviar
      </button>
    </div>
  </div>
</template>

<script setup>
import firebase from "firebase";
import axios from "axios";
export default {
  name: "correo",
  components: {},
  data() {
    return {
      id_prueba: this.$route.query.id_prueba,
      tipo_prueba: this.$route.query.tipo_prueba,
      resultado: this.$route.query.resultado,
      documento: this.$route.query.documento,
      id_medico: this.$route.query.id_medico,
      id_users: this.$route.query.id_users,
      status: this.$route.query.status,
      response: null,
      picture: null,
    };
  },
  methods: {
    onUpload1() {
      axios
        .put("https://proyecto-tedw.herokuapp.com/prueba/" + this.id_prueba, {
          id_prueba: this.id_prueba,
          tipo_prueba: this.tipo_prueba,
          resultado: this.resultado,
          documento: document.getElementById("exampleInputPassword1").files[0]
            .name,
          id_medico: this.id_medico,
          id_users: this.id_users,
          status: this.status,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      this.$toast.open({
        message: "Registro existoso",
        type: "success",
        duration: 5000,
        dismissible: true,
      });
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
      var str = this.selectedFile.type;
      var inicio = str.search("/");
      var final = str.length;
      this.extension = str.slice(inicio + 1, final);
    },
    onUpload() {
      var n = Date.now();
      var storageRef = firebase
        .storage()
        .ref(`/imagenes/${n}_${this.email}.${this.extension}`);
      if (this.selectedFile.type == "application/pdf") {
        storageRef = firebase
          .storage()
          .ref(`/documentos/${n}_${this.email}.${this.extension}`);
      }

      const task = storageRef.put(this.selectedFile);
      task.on(
        `state_changed`,
        (snapshot) => {
          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.uploadValue = percentage;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          //downloadUrl
          task.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
            console.log(this.picture);
          });
        }
      );
      this.resultado == "positivo"
        ? (this.status = "resultado")
        : (this.status = "cerrado");
      this.onUpload1();
    },
  },
};
</script>

<style lang="scss" scoped></style>
