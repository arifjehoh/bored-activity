<template>
  <div>
    <h1>CreateGameRoomPresenter</h1>
    <CreateGameRoomView @createGameRoom="createGameRoom" />
  </div>
</template>

<script>
import CreateGameRoomView from '../views/CreateGameRoomView.vue'
import activtiy from '../utils/ApiService.js'
import { gameRoomToFirebase } from '../utils/FirebaseService.js'
import GameRoomModel from '../models/GameRoomModel.js'

export default {
  name: 'CreateGameRoomPresenter',
  components: {
    CreateGameRoomView
  },
  methods: {
    createGameRoom: async function (title, roomType) {
      // TODO ADD LOADER
      try {
        const promise = Promise.all([
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType),
          activtiy(roomType)
        ])
        const value = await promise.then(data => data).catch(console.error)
        const activities = value.map(({ data }) => {
          data.participants = []
          return data
        })
        const room = new GameRoomModel()
        room.setTitle(title)
        room.setActivities(activities)
        room.addParticipant({ uid: this.$store.state.user.uid, displayName: this.$store.state.user.displayName })
        gameRoomToFirebase(room).then((roomId) => {
          if (roomId) {
            console.log(roomId)
            this.$router.push({ name: 'game', params: { roomId: roomId } })
          }
        })
      } catch (error) {
        throw new TypeError(error)
      }
    }
  }
}
</script>

<style scoped>
</style>
