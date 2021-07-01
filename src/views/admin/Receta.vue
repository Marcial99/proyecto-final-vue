<template>
  <div>
    <div id="app" class="container border shadow mb-4">
      <h3 class="mt-3">Add recipe</h3>
      <hr />
      <div class="row mb-3">
        <div class="col">
          <label>Id receta</label>
          <input
            type="number"
            class="form-control"
           step="1"
            v-model="id_receta"
          />
        </div>
        <div class="col">
          <label>Contenido</label>
          <input type="text" class="form-control" v-model="contenido" />
        </div>
      </div>
      <button class="btn btn-info mr-3" @click="submitForm">Add recipe</button>
      <button class="btn btn-warning mr-3" @click="updateForm">
        Update recipe
      </button>
      <button class="btn btn-danger mr-3" @click="deleteForm">
        Delete recipe
      </button>
      <hr />

      <div class="row mb-5">
        <div class="col overflow-auto">
          <table
            id="user-table"
            class="table display table-hover nowrap"
            cellspacing="0"
            width="100%"
          >
            <thead class="thead-dark">
              <tr>
                <th>Id receta</th>
                <th>fecha</th>
                 <th>Contenido</th>
                <th>Id consulta</th>
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
  name: "Receta",
  data() {
    return {
      id_receta: "",
      fecha: "",
      contenido:"",
      id_consulta:"",
      dataTable: null,
    };
  },
  methods: {
    submitForm() {
      axios
        .post("https://proyecto-tedw.herokuapp.com/recetas", {

      contenido:this.contenido,
      id_consulta:this.id_consulta,
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
        url: "https://proyecto-tedw.herokuapp.com/recetas/" + this.id_receta,
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
        .put("https://proyecto-tedw.herokuapp.com/recetas/" + this.id_receta, {
          contenido:this.contenido,
      id_consulta:this.id_consulta,
        })
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
    let recetas = [];

    this.dataTable = $("#user-table").DataTable({
        responsive: "true",
        dom: 'Bfrtilp',       
        buttons:[ 
			{
				extend:    'excelHtml5',
				text:      '<i class="fas fa-file-excel"></i> ',
				titleAttr: 'Exportar a Excel',
				className: 'btn btn-success'
			},
			{
				extend:    'pdfHtml5',
				text:      '<i class="fas fa-file-pdf"></i> ',
				titleAttr: 'Exportar a PDF',
				className: 'btn btn-danger'
			},
			{
				extend:    'print',
				text:      '<i class="fa fa-print"></i> ',
				titleAttr: 'Imprimir',
				className: 'btn btn-info'
			},
		]	  
    });
    const url = "https://proyecto-tedw.herokuapp.com/recetas";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          recetas.push(item);
        });
        recetas.forEach((receta) => {
          this.dataTable.row.add([
            receta.id_receta,
            receta.fecha, 
            receta.contenido,
            receta.id_consulta
            ]).draw(false);
        });
      });
  },
};
</script>

<style scoped></style>
