<template>
  <div>
    <h1>CreateGameRoomView</h1>
    <label for='roomName'>Game room name:</label>
    <input type='text' id='roomName' name='roomName' v-model='roomName' />
    <label for='typeActivites'>Type of activities:</label>
    <select id='typeActivites' name='typeActivites' v-model='type'>
      <option value=''>Everything</option>
      <option value='education'>Education</option>
      <option value='recreational'>Recreational</option>
      <option value='social'>Social</option>
      <option value='diy'>Diy</option>
      <option value='charity'>Charity</option>
      <option value='cooking'>Cooking</option>
      <option value='relaxation'>Relaxation</option>
      <option value='music'>Music</option>
      <option value='busywork'>Busywork</option>
    </select>
    <button v-on:click='createGame'>Create game room</button>
  </div>
</template>

<script>
import GameRoomModel from '../models/GameRoomModel.js'
import activtiy from '../utils/ApiService.js'
import { gameRoomToFirebase, currentUser } from '../utils/FirebaseService.js'

export default {
  name: 'CreateGameRoomView',
  data () {
    return {
      roomName: 'Enter room name',
      type: '',
      room: new GameRoomModel(),
      user: currentUser()
    }
  },
  methods: {
    createGame: async function () {
      try {
        const promise = Promise.all([
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type),
          activtiy(this.type)
        ])
        const value = await promise
        const activities = value.map(({ data }) => {
          data.participants = []
          return data
        })
        activities.participants = []
        this.room.setName(this.roomName)
        this.room.setActivties(activities)
        this.room.addParticipant(currentUser().email)
        this.room.setOwner(currentUser().uid)
        gameRoomToFirebase(this.room)
      } catch (error) {
        throw new TypeError('Could not get Activity')
      }
    }
  }
}
</script>

<style scoped>
</style>
