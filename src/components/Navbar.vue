<template>
  <div class="sidebar">
    <div class="title text-center">
      <img class="image " src="img/logo.png" alt="" />
      <span class="titulo">TecNM Celaya</span>
    </div>
    <div class="menu-items">
      <router-link
        active-class="active"
        tag="button"
        exact
        class="side-btn"
        to="/notificaciones"
        v-if="currentUser && comprobar"
      >
        <div class="link-container">
          <i class="fas fa-bell menu-icon"></i>
          <span class="texto-item"> Notificaciones</span>
        </div>
      </router-link>
      <router-link
        active-class="active"
        tag="button"
        exact
        class="side-btn"
        to="/historialPruebas"
        v-if="currentUser && comprobar"
      >
        <div class="link-container">
          <i class="fas fa-vials menu-icon"></i>

          <span class="texto-item"> Historial de pruebas</span>
        </div>
      </router-link>
      <router-link
        active-class="active"
        tag="button"
        exact
        class="side-btn"
        to="/historialEncuestas"
        v-if="currentUser && comprobar"
      >
        <div class="link-container">
          <i class="fas fa-history menu-icon"></i>
          <span class="texto-item"> Historial de encuestas</span>
        </div>
      </router-link>

      <router-link
        active-class="active"
        tag="button"
        exact
        class="side-btn"
        to="/user"
        v-if="currentUser && !comprobar"
      >
        <div class="link-container">
          <i class="fas fa-home menu-icon"></i>
          <span class="texto-item"> Estudiante/Personal</span>
        </div>
      </router-link>

      <router-link
        active-class="active"
        tag="button"
        exact
        class="side-btn"
        to="/verPruebas"
        v-if="showMedicBoard || showAdminBoard"
      >
        <div class="link-container">
          <i class="fas fa-vials menu-icon"></i>
          <span class="texto-item">Actualizar resultado de pruebas</span>
        </div>
      </router-link>

      <router-link
        to="/manager"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
        v-if="showManagerBoard || showAdminBoard"
      >
        <div class="link-container">
          <i class="fas fa-street-view menu-icon"></i>
          <span class="texto-item"> Directivos</span>
        </div>
      </router-link>
      <router-link
        to="/modprueba"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
        v-if="showModeratorBoard || showAdminBoard"
      >
        <div class="link-container">
          <i class="far fa-search menu-icon"></i>
          <span class="texto-item"> Monitoreo</span>
        </div>
      </router-link>

      <router-link
        to="/historial_correos"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
        v-if="showModeratorBoard || showAdminBoard"
      >
        <div class="link-container">
          <i class="fas fa-history menu-icon"></i>
          <span class="texto-item"> Hisotiral de correos cerrados</span>
        </div>
      </router-link>

      <router-link
        to="/medic"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
        v-if="showMedicBoard || showAdminBoard"
      >
        <div class="link-container">
          <i class="fas fa-user-md menu-icon"></i>
          <span class="texto-item"> Medicos</span>
        </div>
      </router-link>
      <router-link
        to="/admin"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
        v-if="showAdminBoard"
      >
        <div class="link-container">
          <i class="fas fa-users-cog menu-icon"></i>
          <span class="texto-item"> Administrador</span>
        </div>
      </router-link>
      <router-link
        to="/report"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
        v-if="showManagerBoard || showAdminBoard"
      >
        <div class="link-container">
          <i class="fas fa-clipboard menu-icon"></i>
          <span class="texto-item"> Reportes</span>
        </div>
      </router-link>
      <router-link
        to="/login"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
        v-if="!currentUser"
      >
        <div class="link-container">
          <i class="fas fa-sign-in-alt menu-icon"></i>
          <span class="texto-item"> Login</span>
        </div>
      </router-link>
      <router-link
        to="/register"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
        v-if="!currentUser"
      >
        <div class="link-container">
          <i class="fas fa-sign-in-alt menu-icon"></i>
          <span class="texto-item"> Sing up</span>
        </div>
      </router-link>
      <router-link
        to="/profile"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
        v-if="currentUser"
      >
        <div class="link-container">
          <i class="fas fa-user-circle menu-icon"></i>
          <span class="texto-item"> {{ currentUser.username }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_ADMINISTRADOR");
      }

      return false;
    },
    showMedicBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_MEDICO");
      }

      return false;
    },
    showManagerBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_DIRECTIVO");
      }

      return false;
    },
    comprobar() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_MONITOREO");
      }

      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.title {
  color: white;
  font-size: 24px;
  margin-top: 10px;
  width: 100%;
  text-align: center;
  margin-left: 0;
  border-bottom: 1px solid rgb(14, 124, 143);
  font-weight: bold;
}
.image {
  width: 15%;
}
.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 5px;
}
.menu-items > * {
  margin-top: 15px;
}
.side-btn {
  border: none;
  padding: 0.1rem 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: transparent;
  text-decoration: none;
  height: 3rem;
  vertical-align: middle;
  padding-left: 15%;
  text-align: left;
}
.side-btn:hover {
  color: rgb(255, 255, 255);
  text-decoration: none;
  background-color: rgb(45, 96, 126);
}
.side-btn:focus {
  outline: none;
}
.side-btn.active {
  position: relative;
  background-color: var(--color-background);
  color: rgb(24, 24, 24);
  font-weight: 600;
  margin-left: 5px;
  border-radius: 30px 0 0 30px;
}
.side-btn.active::before {
  top: -10px;
}
.side-btn.active::after {
  bottom: -10px;
}
.side-btn.active::before,
.side-btn.active::after {
  position: absolute;
  content: "";
  right: 0;
  height: 15px;
  width: 10px;
  background-color: var(--color-background);
  text-decoration: none;
}
.side-btn.active .link-container::before {
  top: -15px;
  text-decoration: none;
}
.side-btn.active .link-container::after {
  bottom: -15px;
  z-index: 99;
  text-decoration: none;
}
.side-btn.active .link-container::before,
.side-btn.active .link-container::after {
  text-decoration: none;
  position: absolute;
  content: "";
  right: 0px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: var(--color-primario);
}

.sidebar {
  background: var(--color-primario);
  width: 12%;
  height: 100%;
  position: fixed;
  overflow: auto;
  text-align: left;
  z-index: 98;
}
.menu-icon {
  font-weight: bold;
  font-size: 1.3rem;
}

.custom-class {
  display: none;
}
@media (max-width: 1100px) {
  .sidebar {
    height: 100vh;
    position: fixed;
  }
  .texto-item {
    display: none;
  }
  .menu-icon {
    font-size: 2.3rem;
  }
  .menu-icon:hover {
    font-size: 2.4rem;
  }
  .side-btn {
    height: 4.9rem;
    text-align: center;
  }
  .titulo {
    display: none;
  }
  .image {
    width: 55%;
  }
}
@media (max-width: 720px) {
  .sidebar {
    height: 100vh;
    position: fixed;
  }
  .texto-item {
    display: none;
  }
  .menu-icon {
    font-size: 1.8rem;
  }
  .menu-icon:hover {
    font-size: 1.9rem;
  }
}
</style>
