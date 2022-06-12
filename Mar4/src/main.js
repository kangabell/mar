import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')



// import './firebase';

// import Vue from 'vue'
// import VueFire from 'vuefire'
// import App from './App.vue'
// import VueRouter from 'vue-router'
// import Routes from './routes'

// Vue.use(VueFire)
// Vue.use(VueRouter);

// const router = new VueRouter({
// 	routes: Routes,
// 	mode: 'history',
// 	scrollBehavior (to, from, savedPosition) {
// 		return { x: 0, y: 0 }
// 	}
// });

// export const bus = new Vue();

// new Vue({
//   el: '#app',
//   render: h => h(App),
//   router: router
// })
