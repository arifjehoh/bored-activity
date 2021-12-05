<template>
  <div>
    <h1>Game Room Presenter</h1>
    <GameRoom />
  </div>
</template>

<script>
import GameRoom from '../views/GameRoomView.vue'

export default {
  name: 'GameRoomPresenter',
  components: {
    GameRoom
  }
}
</script>

<style scoped>
</style>
