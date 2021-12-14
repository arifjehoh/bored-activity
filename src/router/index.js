import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../components/views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    // route level code-splitting
    // this generaIes a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/views/LogIn.vue')
  },
  {
    path: '/UserProfile',
    name: 'UserProfile',
    component: () => import('../components/views/UserProfile.vue')
  },
  {
    path: '/SignUp',
    name: 'SignUp.vue',
    component: () => import('../components/views/SignUp.vue')
  },
  {
    path: '/ResetPassword',
    name: 'ResetPassword.vue',
    component: () => import('../components/views/ResetPassword.vue')
  },
  {
    path: '/GameRoomList',
    name: 'GameRoomList.vue',
    component: () => import('../components/views/GameRoomList.vue')
  },
  {
    path: '/CreateGameRoomView',
    name: 'CreateGameRoomView.vue',
    component: () => import('../components/views/CreateGameRoomView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
