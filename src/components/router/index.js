import { createRouter, createWebHistory } from 'vue-router'
import GameRoomListPresenter from '../presenters/GameRoomListPresenter.vue'
import GameRoomPresenter from '../presenters/GameRoomPresenter.vue'
import UserProfilePresenter from '../presenters/UserProfilePresenter.vue'
import LogInPresenter from '../presenters/LogInPresenter.vue'
import CreateAccountPresenter from '../presenters/CreateAccountPresenter.vue'
import ResetPasswordPresenter from '../presenters/ResetPasswordPresenter.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: GameRoomListPresenter
  },
  {
    name: 'rooms',
    path: '/rooms',
    component: GameRoomListPresenter
  },
  {
    name: 'game',
    path: '/rooms/:roomId',
    component: GameRoomPresenter
  },
  {
    name: 'profile',
    path: '/profile',
    component: UserProfilePresenter
  },
  {
    name: 'sign-in',
    path: '/sign-in',
    component: LogInPresenter
  },
  {
    name: 'sign-up',
    path: '/sign-up',
    component: CreateAccountPresenter
  },
  {
    name: 'reset-password',
    path: '/reset-password',
    component: ResetPasswordPresenter
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
