<template>
  <div class="noti">
    <h3 class="text-center">Notificaciones</h3>
    <hr>
    <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notificaciones",
};
</script>

<style>
.noti {
  height: 100%;
  position: sticky;
  background: rgba(126, 126, 126, 0.39);
  width: 100%;
  margin-top: 0px;
  padding: 10px;
  border-radius:20px;
  color: rgb(0, 0, 0);
  z-index:99;
  box-shadow: 0px 0px 10px 0px rgb(109, 109, 109)
}
@media (max-width: 970px) {
  
  .noti {
    margin-left: 10px;
    width: 50vw
  }
}
</style>
