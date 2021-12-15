<template>
  <div>
    <LogInPresenter />
    <CreateAccountPresenter/>
    <GameRoomListPresenter/>
    <CreateGameRoomPresenter />
    <ResetPasswordPresenter />
    <UserProfilePresenter />
    <GameRoomPresenter />
    <TestUp/>
    <TestIn/>
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
import TestUp from './components/views/TestUp.vue'
import TestIn from './components/views/TestIn.vue'
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
    ResetPasswordPresenter,
    TestUp,
    TestIn
  }
}
</script>

<style>
</style>
