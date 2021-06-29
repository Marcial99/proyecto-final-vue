<template
  >
    <nav class="navbar white">
    <div class="dropdown text-right ">
      <div class="dropdown ">
        <a
          class="btn round"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fas fa-user icono"></i>
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </div>
    <i class="fas fa-bell"></i>
  </nav>
</template>

<script>
export default {
  name: "Topbar",
};
</script>

<style>
:root {
  --color-primario1: rgb(226, 239, 255);
  --color-primario: rgb(34, 76, 100);
}
.blanco {
  background: var(--color-primario);
  box-shadow: 0 1px 3px 2px rgba(170, 170, 170, 0.925);
  z-index: 1;
  color: white;
}
.round {
  border-radius: 50%;
  background: white;
  padding: 0.4rem 0.6rem;
}
.icono {
  font-size: 1.5rem;
  color: black;
}
.white {
  background: rgb(255, 255, 255);
  box-shadow: 0px 0px 20px 10px rgba(170, 170, 170, 0.925);
  margin-bottom: 10px;
}
</style>
