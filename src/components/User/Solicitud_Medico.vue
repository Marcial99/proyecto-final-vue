<template>
    <div class="container-fluid">
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Sintomas</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">Describa los sintomas aqui</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Evidencias (foto o video)</label>
    <input type="file" class="form-control" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
    </div>
</template>

<script>
    export default {
        name:'Solicitud_Medico'
    }
</script>

<style scoped>

</style>