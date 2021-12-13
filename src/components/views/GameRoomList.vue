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
        <tr v-for='room in rooms' v-bind:key='room.title'>
          <td>{{ room.title }}</td>
          <td>{{ room.status }}</td>
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
  }
}
</script>
