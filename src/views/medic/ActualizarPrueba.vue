<template>
    <div>
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
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>