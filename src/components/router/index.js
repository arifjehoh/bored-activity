import { createRouter, createWebHistory } from 'vue-router'
import GameRoomListPresenter from '../presenters/GameRoomListPresenter.vue'
import GameRoomPresenter from '../presenters/GameRoomPresenter.vue'
import UserProfilePresenter from '../presenters/UserProfilePresenter.vue'
import LogInPresenter from '../presenters/LogInPresenter.vue'
import CreateAccountPresenter from '../presenters/CreateAccountPresenter.vue'
import ResetPasswordPresenter from '../presenters/ResetPasswordPresenter.vue'
import CreateGameRoomPresenter from '../presenters/CreateGameRoomPresenter.vue'
import GifTest from '../views/GifTest.vue'

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
    name: 'create-game',
    path: '/create-room',
    component: CreateGameRoomPresenter
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
  },
  {
    name: 'gif-test',
    path: '/gif-test',
    component: GifTest
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
