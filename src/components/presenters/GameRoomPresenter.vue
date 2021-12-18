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
      gameRoom: new GameRoomModel(),
      haveFetched: false
    }
  },
  beforeCreate () {
    try {
      this.haveFetched = false
      const q = doc(db, 'rooms', this.$route.params.roomId)
      const unsubscribe = onSnapshot(q, (snapshot) => {
        this.gameRoom.setTitle(snapshot.data().title)
        this.gameRoom.setStatus(snapshot.data().status)
        this.gameRoom.setParticipants(snapshot.data().participants)
        this.gameRoom.setActivities(snapshot.data().activities)
        this.gameRoom.setOwner(snapshot.data().owner)
        this.haveFetched = true
      },
      (error) => console.log(error),
      (data) => console.log(data))
      return unsubscribe
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    playerJoinGame: function () {
      joinGame(this.$route.params.roomId, { uid: this.$store.state.user.uid, displayName: this.$store.state.user.displayName }) // TODO change to more dynamically variable
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
