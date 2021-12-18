<template>
  <div>
    <GameRoom v-if='haveFetched' :gameRoom='gameRoom' @playerJoinGame='playerJoinGame' @playerLeaveGame='playerLeaveGame' @playerEndGame='playerEndGame' @completeActivtiy='completeActivtiy'/>
  </div>
</template>

<script>
import GameRoom from '../views/GameRoomView.vue'
import GameRoomModel from '../models/GameRoomModel.js'
import { doc, onSnapshot } from 'firebase/firestore'
import { db, joinGame, leaveGame, endGame, completeTask } from '../utils/FirebaseService.js'

export default {
  name: 'GameRoomPresenter',
  components: {
    GameRoom
  },
  data () {
    return {
      gameRoom: new GameRoomModel()
    }
  },
  beforeCreate () {
    try {
      this.haveFetched = false
      const q = doc(db, 'rooms', this.$route.params.roomId)
      const gameRoom = new GameRoomModel()
      onSnapshot(q, (snapshot) => {
        console.log(snapshot)
        gameRoom.setTitle(snapshot.data().title)
        gameRoom.setStatus(snapshot.data().status)
        gameRoom.setParticipants(snapshot.data().participants)
        gameRoom.setActivities(snapshot.data().activities)
        gameRoom.setOwner(snapshot.data().owner)
        this.haveFetched = true
        this.$store.commit('setGame', gameRoom)
        this.gameRoom = this.$store.state.game
        this.$forceUpdate()
      },
      (error) => console.log(error))
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    playerJoinGame: function () {
      joinGame(this.$route.params.roomId, { uid: this.$store.state.user.uid, displayName: this.$store.state.user.displayName }) // TODO change to more dynamically variable
      console.log(this.$route.params.roomId)
      this.$router.push({ name: 'game', params: { roomId: this.$route.params.roomId } })
    },
    playerLeaveGame: function () {
      leaveGame(this.$route.params.roomId, { uid: this.$store.state.user.uid, displayName: this.$store.state.user.displayName }) // TODO change to more dynamically variable
      this.$router.push({ name: 'rooms' })
    },
    playerEndGame: function (roomStatus) {
      endGame(this.$route.params.roomId, roomStatus)
      this.$router.push({ name: 'rooms' })
    },
    completeActivtiy: function (activities) {
      completeTask(this.$route.params.roomId, activities) // TODO change to more dynamically variable
    }
  }
}
</script>

<style scoped>
</style>
