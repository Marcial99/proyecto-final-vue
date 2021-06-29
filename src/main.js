import Vue from 'vue'
import App from './App.vue'
 import { router } from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueToast from 'vue-toast-notification';
// Import one of the available themes
import 'vue-toast-notification/dist/theme-default.css';
//import 'vue-toast-notification/dist/theme-sugar.css';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

import firebase from 'firebase'

  firebase.initializeApp({  
    apiKey: "AIzaSyCr0ZCKaU6mfbfA4LKkmu78TPe5_5nFBZs",
  authDomain: "tedw-2021.firebaseapp.com",
  projectId: "tedw-2021",
  storageBucket: "tedw-2021.appspot.com",
  messagingSenderId: "377990299575",
  appId: "1:377990299575:web:0f14fab1008315bddc7232"
});

Vue.config.productionTip = false
Vue.use(VueToast);
Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
