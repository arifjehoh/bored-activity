<template>
  <div>
    <h1>List of open games:</h1>
    <div id = 'content'>
      <table>
        <tr>
          <th>Game title</th>
          <th>Game status</th>
          <th> Join game</th>
        </tr>
        <tr  v-for='(room, index) in rooms' v-bind:key='room.id' v-on:click='enterGameRoom(index)'>
          <td id = 'table1'>{{ room.content.title }}</td>
          <td id= 'table1'> {{ room.content.status }}</td>
          <td id = 'table1'>Enter</td>
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
<style scoped>
#content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
#table1 {
  border-style: groove
}
</style>
