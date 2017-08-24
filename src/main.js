import './firebase';

import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VeeValidate from 'vee-validate'

Vue.use(VueFire)
Vue.use(VueRouter);
Vue.use(VeeValidate);

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
