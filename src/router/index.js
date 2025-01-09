import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/musor',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/cleaning',
      name: 'Cleaning',
      component: () => import('../views/CleaningView.vue'),
    },
    {
      path: '/ccleaning',
      name: 'Ccleaning',
    
      component: () => import('../views/CommCleaningView.vue'),
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/MapView.vue'),
    }
    
  ],
})

export default router
