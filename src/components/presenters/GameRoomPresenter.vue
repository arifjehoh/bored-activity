<template>
  <div>
    <h1>Game Room Presenter</h1>
    <GameRoom v-if='haveFetched' :gameRoom='gameRoom' @playerJoinGame='playerJoinGame' @playerLeaveGame='playerLeaveGame' @playerEndGame='playerEndGame' />
  </div>
</template>

<script>
import GameRoom from '../views/GameRoomView.vue'
import GameRoomModel from '../models/GameRoomModel.js'
import { getGameRoom, joinGame, leaveGame, endGame } from '../utils/FirebaseService.js'

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
  },
  methods: {
    playerJoinGame: function () {
      joinGame('xXezGh7zCKNXaDvihtyr', 'arif1236') // TODO change to more dynamically variable
    },
    playerLeaveGame: function () {
      leaveGame('xXezGh7zCKNXaDvihtyr', 'arif1236') // TODO change to more dynamically variable
    },
    playerEndGame: function () {
      endGame('xXezGh7zCKNXaDvihtyr') // TODO change to more dynamically variable
    }
  }
}
</script>

<style scoped>
</style>
