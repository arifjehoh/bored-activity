<template>
  <div>
    <ActivityList />
    <LogIn />
    <SignUp/>
    <UserProfile/>
    <CreateGameRoomPresenter />
    <GameRoomPresenter />
  </div>
</template>
<script>
import ActivityList from './components/views/ActivityList.vue'
import LogIn from './components/views/LogIn.vue'
import SignUp from './components/views/SignUp.vue'
import UserProfile from './components/views/UserProfile.vue'
import CreateGameRoomPresenter from './components/presenters/CreateGameRoomPresenter.vue'
import GameRoomPresenter from './components/presenters/GameRoomPresenter.vue'
import '@/style.css'

export default {
  name: 'App',
  components: {
    ActivityList,
    LogIn,
    SignUp,
    UserProfile,
    CreateGameRoomPresenter,
    GameRoomPresenter
  }
}
</script>

<style>
</style>
