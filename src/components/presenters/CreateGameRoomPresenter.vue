<template>
  <div>
    <h1>CreateGameRoomPresenter</h1>
    <CreateGameRoomView @createGameRoom='createGameRoom'/>
  </div>
</template>

<script>
import CreateGameRoomView from '../views/CreateGameRoomView.vue'
import activtiy from '../utils/ApiService.js'
import { gameRoomToFirebase, currentUser } from '../utils/FirebaseService.js'
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
        const value = await promise
        const activities = value.map(({ data }) => {
          data.participants = []
          return data
        })
        activities.participants = []
        const room = new GameRoomModel()
        currentUser().then((user) => {
          if (user) {
            room.setTitle(title)
            room.setActivities(activities)
            room.addParticipant(user.email)
            room.setOwner(user.uid)
            gameRoomToFirebase(room).then((roomId) => {
              if (roomId) {
                this.$router.push({ name: 'game', params: { roomId: roomId } })
              }
            })
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
