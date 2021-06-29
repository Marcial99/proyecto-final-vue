<template>
  <div>
    <div id="app" class="container border shadow mb-4">
      <h3 class="mt-3">Add survey</h3>
      <hr />
      <div class="row mb-3">
        <div class="col">
          <label>Id encuesta</label>
          <input type="text" />
        </div>
        <div class="col">
          <label>modalidad</label>
          <input type="text" class="form-control" />
        </div>
        <div class="col">
          <label>Id usuario</label>
          <input type="text" class="form-control" />
        </div>
        <div class="col">
          <label>fecha</label>
          <input type="text" class="form-control" />
        </div>
        <div class="col">
          <label>preguntas</label>
          <input type="text" class="form-control" placeholder="r" />
          <input type="text" class="form-control" placeholder="r" />
          <input type="text" class="form-control" placeholder="r" />
          <input type="text" class="form-control" placeholder="r" />
          <input type="text" class="form-control" placeholder="r" />
          <input type="text" class="form-control" placeholder="r" />
          <input type="text" class="form-control" placeholder="r" />
          <input type="text" class="form-control" placeholder="r" />
          <input type="text" class="form-control" placeholder="r" />
          <input type="text" class="form-control" placeholder="r" />
          <input type="text" class="form-control" placeholder="r" />
          <input type="text" class="form-control" placeholder="r" />
          <input type="text" class="form-control" placeholder="r" />
          <input type="text" class="form-control" placeholder="r" />
        </div>
        <div class="col">
          <label>Resultado</label>
          <input type="text" class="form-control" placeholder="resultado" />
        </div>
      </div>
      <button class="btn btn-info mr-3" @click="submitForm">Add survey</button>
      <button class="btn btn-warning mr-3" @click="updateForm">
        Update survey
      </button>
      <button class="btn btn-danger mr-3" @click="deleteForm">
        Delete survey
      </button>
      <hr />

      <div class="row mb-5">
        <div class="col overflow-auto">
          <table
            id="user-table"
            class="table display table-hover nowrap"
            cellspacing="0"
            width="50%"
          >
            <thead class="thead-dark">
              <tr>
                <th>Id encuesta</th>
                <th>Modalidad</th>
                <th>Id usuario</th>
                <th>Fecha</th>
                <th>pregunta 1</th>
                <th>pregunta 2</th>
                <th>pregunta 3</th>
                <th>pregunta 4</th>
                <th>pregunta 5</th>
                <th>pregunta 6</th>
                <th>pregunta 7</th>
                <th>pregunta 8</th>
                <th>pregunta 9</th>
                <th>pregunta 10</th>
                <th>pregunta 11</th>
                <th>pregunta 12</th>
                <th>pregunta 13</th>
                <th>pregunta 14</th>
                <th>resultado</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from 'vue';
export default {
  name: "Encuesta",
  data() {
    return {
      id_encuesta: "",
      modalidad: "",
      id_users: "",
      fecha: "",
      r1: "",
      r2: "",
      r3: "",
      r4: "",
      r5: "",
      r6: "",
      r7: "",
      r8: "",
      r9: "",
      r10: "",
      r11: "",
      r12: "",
      r13: "",
      r14: "",
      resultado: "",
      dataTable: null,
    };
  },
  methods: {
    submitForm() {
      axios
        .post("https://proyecto-tedw.herokuapp.com/encuestas", {
          modalidad: this.modalidad,
          id_users: this.id_users,
          fecha: this.fecha,
          r1: this.r1,
          r2: this.r2,
          r3: this.r3,
          r4: this.r4,
          r5: this.r5,
          r6: this.r6,
          r7: this.r7,
          r8: this.r8,
          r9: this.r9,
          r10: this.r10,
          r11: this.r11,
          r12: this.r12,
          r13: this.r13,
          r14: this.r14,
          resultado: this.resultado,
        })
        .then(function(response) {
          console.log(response);
          Vue.$toast.open({
        message: "registro existoso recarga la pagina",
        type: "success",
        duration: 5000,
        dismissible: true,
      });
        })
        .catch(function(error) {
          console.log(error);
           Vue.$toast.open({
        message: "algo succedio",
        type: "error",
        duration: 5000,
        dismissible: true,
      });

        });
       
setTimeout(function(){location.reload()},5000); 
    },
    deleteForm() {
      axios({
        method: "delete",
        url:
          "https://proyecto-tedw.herokuapp.com/encuestas/" + this.id_encuesta,
        data: {
          modalidad: this.modalidad,
          id_users: this.id_users,
          fecha: this.fecha,
          r1: this.r1,
          r2: this.r2,
          r3: this.r3,
          r4: this.r4,
          r5: this.r5,
          r6: this.r6,
          r7: this.r7,
          r8: this.r8,
          r9: this.r9,
          r10: this.r10,
          r11: this.r11,
          r12: this.r12,
          r13: this.r13,
          r14: this.r14,
          resultado: this.resultado,
        },
      })
        .then(function(response) {
          console.log(response);
   
 Vue.$toast.open({
        message: "borrado existoso recarga la pagina",
        type: "error",
        duration: 5000,
        dismissible: true,
      });

        })
        .catch(function(error) {
          console.log(error);
        Vue.$toast.open({
        message: "algo succedio",
        type: "error",
        duration: 5000,
        dismissible: true,
      });
        });
setTimeout(function(){location.reload()},5000);
    },
    updateForm() {
      axios
        .put(
          "https://proyecto-tedw.herokuapp.com/encuestas/" + this.id_encuesta,
          {
            modalidad: this.modalidad,
            id_users: this.id_users,
            fecha: this.fecha,
            r1: this.r1,
            r2: this.r2,
            r3: this.r3,
            r4: this.r4,
            r5: this.r5,
            r6: this.r6,
            r7: this.r7,
            r8: this.r8,
            r9: this.r9,
            r10: this.r10,
            r11: this.r11,
            r12: this.r12,
            r13: this.r13,
            r14: this.r14,
            resultado: this.resultado,
          }
        )
        .then(function(response) {
          console.log(response);
             Vue.$toast.open({
        message: "actualizacion existosa, recarga la pagina",
        type: "warning",
        duration: 5000,
        dismissible: true,
      });
        })
        .catch(function(error) {
          console.log(error);
           Vue.$toast.open({
        message: "algo succedio",
        type: "error",
        duration: 5000,
        dismissible: true,
      });
        });
        setTimeout(function(){location.reload()},5000);
    },
  },
  mounted() {
    let encuestas = [];

    this.dataTable = $("#user-table").DataTable({});
    const url = "https://proyecto-tedw.herokuapp.com/encuestas";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          encuestas.push(item);
        });
        encuestas.forEach((encuesta) => {
          this.dataTable.row
            .add([
              encuesta.id_encuesta,
              encuesta.modalidad,
              encuesta.id_users,
              encuesta.fecha,
              encuesta.r1,
              encuesta.r2,
              encuesta.r3,
              encuesta.r4,
              encuesta.r5,
              encuesta.r6,
              encuesta.r7,
              encuesta.r8,
              encuesta.r9,
              encuesta.r10,
              encuesta.r11,
              encuesta.r12,
              encuesta.r13,
              encuesta.r14,
              encuesta.resultado,
            ])
            .draw(false);
        });
      });
  },
};
</script>

<style scoped></style>
