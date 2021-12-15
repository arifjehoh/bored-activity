<template>
  <div>
    <router-link to="/rooms">Go to Home</router-link>
    <router-view />
    <LogInPresenter />
    <CreateAccountPresenter/>
    <GameRoomListPresenter/>
    <CreateGameRoomPresenter />
    <ResetPasswordPresenter />
    <UserProfilePresenter />
    <GameRoomPresenter />
  </div>
</template>
<script>
import UserProfilePresenter from './components/presenters/UserProfilePresenter.vue'
import CreateGameRoomPresenter from './components/presenters/CreateGameRoomPresenter.vue'
import GameRoomPresenter from './components/presenters/GameRoomPresenter.vue'
import GameRoomListPresenter from './components/presenters/GameRoomListPresenter.vue'
import LogInPresenter from './components/presenters/LogInPresenter.vue'
import ResetPasswordPresenter from './components/presenters/ResetPasswordPresenter.vue'
import CreateAccountPresenter from './components/presenters/CreateAccountPresenter.vue'
import '@/style.css'

export default {
  name: 'App',
  components: {
    LogInPresenter,
    CreateAccountPresenter,
    UserProfilePresenter,
    CreateGameRoomPresenter,
    GameRoomPresenter,
    GameRoomListPresenter,
    ResetPasswordPresenter
  }
}
</script>

<style>
</style>
