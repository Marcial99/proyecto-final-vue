<template>
  <div>
    <div id="app" class="container border shadow mb-4">
      <h3 class="mt-3">Add role</h3>
      <hr />
      <div class="row mb-3">
        <div class="col">
          <label>Id rol</label>
          <input
            type="text"
            class="form-control"
            maxlength="7"
            v-model="id"
          />
        </div>
        <div class="col">
          <label>Rol</label>
          <input type="text" class="form-control" v-model="name" />
        </div>
      </div>
      <button class="btn btn-info mr-3" @click="submitForm">Add role</button>
      <button class="btn btn-warning mr-3" @click="updateForm">
        Update role
      </button>
      <button class="btn btn-danger mr-3" @click="deleteForm">
        Delete role
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
                <th>Id rol</th>
                <th>Rol</th>
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
export default {
  name: "Rol",
  data() {
    return {
      id: "",
      name: "",
      dataTable: null,
    };
  },
  methods: {
    submitForm() {
      axios
        .post("https://proyecto-tedw.herokuapp.com/rol", {
          name: this.name,
        })
        .then(function(response) {
          console.log(response);
          location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });
      this.$toast.open({
        message: "registro existoso recarga la pagina",
        type: "success",
        duration: 5000,
        dismissible: true,
      });
      location.reload();
    },
    deleteForm() {
      axios({
        method: "delete",
        url: "https://proyecto-tedw.herokuapp.com/rol/" + this.id,
        data: {
          name: this.name,
        },
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      this.$toast.open({
        message: "borrado existoso recarga la pagina",
        type: "error",
        duration: 5000,
        dismissible: true,
      });
      setTimeout(location.reload, 5000);
      // location.reload();
    },
    updateForm() {
      axios
        .put("https://proyecto-tedw.herokuapp.com/rol/" + this.id, {
          name: this.name,
        })
        .then(function(response) {
          console.log(response);
          location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });
      this.$toast.open({
        message: "actualizacion existosa recarga la pagina",
        type: "warning",
        duration: 5000,
        dismissible: true,
      });
    },
  },
  mounted() {
    let names = [];

    this.dataTable = $("#user-table").DataTable({});
    const url = "https://proyecto-tedw.herokuapp.com/rol";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          names.push(item);
        });
        names.forEach((name) => {
          this.dataTable.row.add([name.id, name.name]).draw(false);
        });
      });
  },
};
</script>

<style scoped></style>
