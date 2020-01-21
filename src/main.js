// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'

Vue.use(resource)

export const EventBus = new Vue();

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id = "app">
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <router-link to = "/users" class="navbar-brand">Users Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
  <div class="posts container">
    <h1 class="page-header"> Posts </h1>
  </div>

      <router-view></router-view>
    </div>
    
  `
}).$mount('#app')
