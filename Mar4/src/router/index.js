import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router



// import home from './components/home.vue';
// import shows from './components/shows.vue';
// import music from './components/music.vue';
// import merch from './components/merch.vue';
// import info from './components/info.vue';
// import p404 from './components/p404.vue';

// export default [
//   { path: '/', component: home},
//   { path: '/shows', component: shows},
//   { path: '/music', component: music },
//   { path: '/merch', component: merch },
//   { path: '/info', component: info },
//   { path: '*', component: p404 }
// ]