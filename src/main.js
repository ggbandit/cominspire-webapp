// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'
import jQuery from 'jquery'
global.jQuery = jQuery
let Bootstrap = require('bootstrap')
Vue.use(BootstrapVue);

Vue.config.productionTip = false
// Initialize Firebase
let app;
var config = {
  apiKey: "AIzaSyBWa7jts9z1tBrzfpuxzYb3_qLNQEdogyU",
    authDomain: "cominspire-3a2e8.firebaseapp.com",
    databaseURL: "https://cominspire-3a2e8.firebaseio.com",
    projectId: "cominspire-3a2e8",
    storageBucket: "cominspire-3a2e8.appspot.com",
    messagingSenderId: "374766365380"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user){
  if (!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})