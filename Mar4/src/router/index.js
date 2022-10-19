import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shows',
      name: 'shows',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Shows.vue')
    },
    {
      path: '/music',
      name: 'music',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Music.vue')
    },
    {
      path: '/merch',
      name: 'merch',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Merch.vue')
    },
    {
      path: '/info',
      name: 'info',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Info.vue')
    },
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