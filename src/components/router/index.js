import { createRouter, createWebHistory } from 'vue-router'
import GameRoomListPresenter from '../presenters/GameRoomListPresenter.vue'
import GameRoomPresenter from '../presenters/GameRoomPresenter.vue'

const routes = [
  {
    path: '/rooms',
    component: GameRoomListPresenter
  },
  {
    path: '/rooms/:roomId',
    component: GameRoomPresenter
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
