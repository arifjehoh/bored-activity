<template>
  <div>
    <h1>Game Room Presenter</h1>
    <GameRoom v-if='haveFetched' :gameRoom='gameRoom' @playerJoinGame='playerJoinGame' @playerLeaveGame='playerLeaveGame' @playerEndGame='playerEndGame' @completeActivtiy='completeActivtiy'/>
  </div>
</template>

<script>
import GameRoom from '../views/GameRoomView.vue'
import GameRoomModel from '../models/GameRoomModel.js'
import { getGameRoom, joinGame, leaveGame, endGame, completeTask } from '../utils/FirebaseService.js'

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
    getGameRoom(this.$route.params.roomId).then(data => {
      this.gameRoom.setTitle(data.title)
      this.gameRoom.setStatus(data.status)
      this.gameRoom.setParticipants(data.participants)
      this.gameRoom.setActivities(data.activities)
      this.gameRoom.setOwner(data.owner)
      this.haveFetched = true
    }).catch(console.error)
  },
  methods: {
    playerJoinGame: function () {
      joinGame('LpaNnbRc28U9ZX6XQZml', 'arif1236') // TODO change to more dynamically variable
    },
    playerLeaveGame: function () {
      leaveGame('LpaNnbRc28U9ZX6XQZml', 'arif1236') // TODO change to more dynamically variable
    },
    playerEndGame: function () {
      endGame('LpaNnbRc28U9ZX6XQZml', this.gameRoom.roomStatus) // TODO change to more dynamically variable
    },
    completeActivtiy: function (activities) {
      completeTask('LpaNnbRc28U9ZX6XQZml', activities) // TODO change to more dynamically variable
    }
  }
}
</script>

<style scoped>
</style>
