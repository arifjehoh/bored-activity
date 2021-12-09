<template>
  <div>
    <img alt='Vue logo' src='./assets/logo.png' />
    <HelloWorld msg='Welcome to Your Vue.js App' />
    <ActivityList />
    <LogIn />
    <CreateGameRoomPresenter />
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import ActivityList from './components/views/ActivityList.vue'
import LogIn from './components/views/LogIn.vue'
import CreateGameRoomPresenter from './components/presenters/CreateGameRoomPresenter.vue'
import '@/style.css'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ActivityList,
    LogIn,
    CreateGameRoomPresenter
  }
}
</script>

<style>
</style>
