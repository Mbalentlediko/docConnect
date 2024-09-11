import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/getDoctor',
    name: 'getDoctor',
    component: () => import('../views/getDoctor.vue')
  },
  {
    path: '/ReachUs',
    name: 'ReachUs',
    component: () => import('../views/ReachUs.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  // {
  //   path: '/login',
  //   name: 'login',

  //   component: () => import( '../views/LoginVue.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
