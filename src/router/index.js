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
      component: () => import('../views/Shows.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('../views/Music.vue')
    },
    {
      path: '/merch',
      name: 'merch',
      component: () => import('../views/Merch.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/Info.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/P404.vue')
    },
  ]
})

export default router