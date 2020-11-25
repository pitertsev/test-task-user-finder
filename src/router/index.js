import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/UsersPage.vue')
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('../views/UserPage.vue')
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
