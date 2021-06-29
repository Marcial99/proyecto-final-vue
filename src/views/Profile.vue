<template>
  <div class="container text-center">
    <header class="jumbotron">
      
    </header>
    <div class="card">
  <div class="card-header bg-info text-end">
    <div class="text-start"><i class="far fa-address-card fa-3x"></i></div>
    <h3>
        <strong class="text-uppercase">{{currentUser.username}}</strong>
      </h3>
  </div>
  <div class="card-body text-start">
    <h5 class="card-title">Credenciales:</h5>
       <p class="card-text">
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p>
    <p class="card-text">
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p class="card-text">
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
  </div>
  <strong>Roles asignados:</strong>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
  </ul>
</div>
<a class="btn btn-danger" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>