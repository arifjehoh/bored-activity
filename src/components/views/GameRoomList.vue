<template>
  <div id='main' class='container-sm'>
    <div class='card'>
      <div class='card-header bg-primary'>
        <h1 id = 'headerText'>List of open games:</h1>
        <button id='textBtn' type="button" class="btn btn-light" v-if='this.$store.state.user' v-on:click='goToCreateGameRoom'>Create Game Room</button>
      </div>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Game title</th>
            <th scope='col'>Game status</th>
            <th scope='col'>Join game</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(room, index) in rooms' v-bind:key='room.id'>
            <th scope='row'>{{ index + 1 }}</th>
            <td>{{ room.content.title }}</td>
            <td>{{ room.content.status }}</td>
            <td><button id='enterBtn' type="button" class="btn btn-link" v-on:click='enterGameRoom(index)'>Enter</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameRoomList',
  emits: ['enterRoom', 'createGameRoom'],
  data () {
    return {
      rooms: Array
    }
  },
  beforeCreate () {
    getGameList()
      .then((data) => {
        this.rooms = data
      })
      .catch(console.error)
  },
  methods: {
    enterGameRoom: function (index) {
      console.log(this.rooms[index].id)
      this.$emit('enterRoom', this.rooms[index].id)
    },
    goToCreateGameRoom: function () {
      this.$emit('createGameRoom')
    }
  }
}
</script>
<style scoped>
#main{
  background-color: _;
}
#enterBtn{
  text-decoration-color: rgba(0,0,0.9);
  text-decoration-line: none;
  text-decoration-style: solid;
}#textBtn{
  color: rgb(0, 123, 255);
}#headerText{
  color: white;
  background-color: rgb(0, 123, 255);
}
</style>
