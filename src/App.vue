<template>
  <div>
    <LogInPresenter />
    <CreateAccountPresenter/>
    <GameRoomListPresenter/>
    <CreateGameRoomPresenter />
    <ResetPasswordPresenter />
    <UserProfilePresenter />
  </div>
</template>
<script>
import UserProfilePresenter from './components/presenters/UserProfilePresenter.vue'
import CreateGameRoomPresenter from './components/presenters/CreateGameRoomPresenter.vue'
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
    GameRoomListPresenter,
    ResetPasswordPresenter
  }
}
</script>

<style>
</style>
