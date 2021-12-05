<template>
  <div>
    <img alt='Vue logo' src='./assets/logo.png' />
    <HelloWorld msg='Welcome to Your Vue.js App' />
    <GameRoomPresenter />
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import GameRoomPresenter from './components/presenters/GameRoomPresenter.vue'
import '@/style.css'

export default {
  name: 'App',
  components: {
    HelloWorld,
    GameRoomPresenter
  }
}
</script>

<style>
</style>
