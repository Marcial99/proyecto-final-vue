<template>
  <div class="view">
    <Navbar />

    <div class="vista">
      <Topbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar.vue";
export default {
  components: {
    Navbar,
    Topbar,
  },
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.vista {
  width: 88%;
  margin-left: 12%;
}
.view {
  width: 100%;
}
</style>
