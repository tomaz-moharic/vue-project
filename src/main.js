import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import Routes from './routes'



Vue.prototype.$http = axios;
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})
//custom directives



new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
