<template>
  <div>
    <h1>List of open games:</h1>
    <div id = 'content'>
      <table >
        <tr>
          <th>Game title</th>
          <th>Game status</th>
          <th> Join game</th>
        </tr>
        <tr v-for='(room, index) in rooms' v-bind:key='room.id' v-on:click='enterGameRoom(index)'>
          <td id= 'title'>{{ room.content.title }}</td>
          <td id='room'> {{ room.content.status }}</td>
          <td><button id ='enterButton'>Enter ></button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameRoomList',
  emits: ['enterRoom'],
  props: {
    rooms: Array
  },
  // data () {
  //   return {
  //     rooms: []
  //   }
  // },
  // beforeCreate () {
  //   try {
  //     const q = query(collection(db, 'rooms'), where('status', '!=', 'Done'))
  //     const unsubscribe = onSnapshot(q, (snapshot) => {
  //       const activities = []
  //       snapshot.forEach((doc) => {
  //         activities.push({
  //           content: doc.data(),
  //           id: doc.id
  //         })
  //       })
  //       this.rooms = activities
  //     })
  //     console.log(unsubscribe.length)
  //     return unsubscribe
  //   } catch (error) {
  //     console.log(error)
  //   }
  // },
  methods: {
    enterGameRoom: function (index) {
      console.log(this.rooms[index].id) // TODO SEND THIS TO SHOW GAME ROOM
      this.$emit('enterRoom', this.rooms[index].id)
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
table {
  width: 50%;
  border-collapse: collapse;
  border-right: 4px solid #ddd;
  border-left: 4px solid #ddd;
  align-self: center;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 4px solid #ddd;
  border-top: 4px solid #ddd;
}
th{background-color: rgb(165, 162, 162);}
button{
  border-radius: 25px;
  padding:10px 15px;
  background-color: white;
}
button:active {
  background-color: rgb(165, 162, 162);;
  box-shadow: 0 2px #666;
  transform: translateY(0.5px);
}
#room{
  font-size: large;
}
#title{
  font-size: large;
  font-weight: bold;
}
th{
  font-size: x-large;
  font-weight: bold;
}
</style>
