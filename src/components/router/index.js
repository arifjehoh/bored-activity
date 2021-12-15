import { createRouter, createWebHistory } from 'vue-router'
import GameRoomListPresenter from '../presenters/GameRoomListPresenter.vue'
import GameRoomPresenter from '../presenters/GameRoomPresenter.vue'
import UserProfilePresenter from '../presenters/UserProfilePresenter.vue'
import LogInPresenter from '../presenters/LogInPresenter.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
