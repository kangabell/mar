import './firebase';

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueFire from 'vuefire'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueAxios, axios)
Vue.use(VueFire)
Vue.use(VueRouter);

const router = new VueRouter({
	routes: Routes,
	mode: 'history'
});

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
