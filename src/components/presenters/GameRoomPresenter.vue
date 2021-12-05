<template>
  <div>
    <h1>Game Room Presenter</h1>
    <GameRoom :gameRoom='gameRoom' />
  </div>
</template>

<script>
import GameRoom from '../views/GameRoomView.vue'
import MockGameRoom from '../models/MockGameRoom.js'

export default {
  name: 'GameRoomPresenter',
  components: {
    GameRoom
  },
  data () {
    return {
      gameRoom: MockGameRoom
    }
  }
}
</script>

<style scoped>
</style>
