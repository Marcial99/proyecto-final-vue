<template>
  <div>
    <div id="app" class="container">
      <h3 class="mt-3">Add User</h3>
      <hr />
      <div class="row">
        <div class="col">
          <label>User ID</label>
          <input type="number" class="form-control" v-model="id" />
        </div>
        <div class="col">
          <label>User name</label>
          <input type="text" class="form-control" v-model="name" />
        </div>
        <div class="col">
          <label>User Email</label>
          <input type="text" class="form-control" v-model="email" />
        </div>
      </div>
      <button class="btn btn-info mt-2" @click="addUser">Add User</button>
      <hr />

      <div class="row">
        <div class="col">
          <table
            id="user-table"
            class="display table-bordered nowrap"
            cellspacing="0"
            width="100%"
          >
            <thead>
              <tr>
                <th>User ID</th>
                <th>User Name</th>
                <th>User Email</th>
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
export default {
  name:'DataTable',
  data() {
    
    return {
      id: "",
      name: "",
      email: "",
      dataTable: null,
    };
  },methods:{
    
    addUser(){

      this.dataTable.row.add([
          this.id,
          '<a href="#">'+this.name+'</a>',
          this.email
        ]).draw(false)
        this.id='';
          this.name='';
          this.email='';
    }
  },mounted() {
    let users = [];

    this.dataTable = $('#user-table').DataTable({
        responsive: "true",
      dom: "Bfrtilp",
      buttons: [
        {
          extend: "excelHtml5",
          text: '<i class="fas fa-file-excel"></i> ',
          titleAttr: "Exportar a Excel",
          className: "btn btn-success",
        },
        {
          extend: "pdfHtml5",
          text: '<i class="fas fa-file-pdf"></i> ',
          titleAttr: "Exportar a PDF",
          className: "btn btn-danger",
        },
        {
          extend: "print",
          text: '<i class="fa fa-print"></i> ',
          titleAttr: "Imprimir",
          className: "btn btn-info",
        },
      ],
    });
const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
          users.push(item);
      });
          users.forEach(user=>{
        this.dataTable.row.add([
          user.id,
          '<a href="#">'+user.name+'</a>',
          user.email
        ]).draw(false) 
        })
        })
  },
};
</script>

<style scoped>
</style>