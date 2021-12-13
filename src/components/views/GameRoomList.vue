<template>
  <div>
    <h1>List of open games:</h1>
    <div>
      <table id='table'>
        <tr>
          <th>Game title</th>
          <th>Game status</th>
          <th></th>
        </tr>
        <tr v-for='(room, index) in rooms' v-bind:key='room.id' v-on:click='enterGameRoom(index)'>
          <td>{{ room.content.title }}</td>
          <td>{{ room.content.status }}</td>
          <td>Enter</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { getGameList } from '../utils/FirebaseService.js'

export default {
  name: 'GameRoomList',
  data () {
    return {
      rooms: []
    }
  },
  beforeCreate () {
    getGameList().then((data) => {
      this.rooms = data
    }).catch(console.error)
  },
  methods: {
    enterGameRoom: function (index) {
      console.log(this.rooms[index].id) // TODO SEND THIS TO SHOW GAME ROOM
    }
  }
}
</script>
