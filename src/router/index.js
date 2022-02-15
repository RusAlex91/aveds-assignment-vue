import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Contacts.vue')
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Personal.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
