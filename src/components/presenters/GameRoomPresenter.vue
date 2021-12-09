<template>
  <div>
    <h1>Game Room Presenter</h1>
    <GameRoom :gameRoom='gameRoom' v-if='haveFetched'/>
  </div>
</template>

<script>
import GameRoom from '../views/GameRoomView.vue'
import GameRoomModel from '../models/GameRoomModel.js'
import getGameRoom from '../utils/FirebaseService.js'

export default {
  name: 'GameRoomPresenter',
  components: {
    GameRoom
  },
  data () {
    return {
      gameRoom: new GameRoomModel(),
      haveFetched: false
    }
  },
  beforeCreate () {
    this.haveFetched = false
    getGameRoom().then(data => {
      this.gameRoom.setTitle(data.title)
      this.gameRoom.setStatus(data.status)
      this.gameRoom.setParticipants(data.participants)
      this.gameRoom.setActivities(data.activities)
      this.haveFetched = true
    }).catch(console.error)
  }
}
</script>

<style scoped>
</style>
