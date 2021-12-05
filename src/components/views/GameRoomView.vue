<template>
  <div id='container'>
    <div id='header'>
      <h1>{{ title }} - {{ room_status }}</h1>
    </div>
    <div id='content'>
      <div id='gameBoard'>
        <div v-for='activity in activities' v-bind:key='activity.name'>{{ activity.name }}</div>
      </div>
      <div id='participants'>
        <h2>Participants:</h2>
        <div v-for='participant in participants' v-bind:key='participant.name'>
          {{ participant.name }}: {{ participant.score }}
        </div>
        <Button type='button'>Join game room</button>
        <Button type='button'>End game room</button>
        <Button type='button'>Leave game room</button>
      </div>
    </div>
  </div>

</template>

<script>
import MockGameRoom from '../models/MockGameRoom.js'

export default {
  name: 'GameRoom',
  data () {
    return {
      title: MockGameRoom.title,
      room_status: MockGameRoom.room_status,
      participants: MockGameRoom.participants,
      activities: MockGameRoom.activities
    }
  }
}
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

#content {
  display: flex;
  flex-direction: row;
  flex: 40%;
}

#participants {
  display: flex;
  flex-direction: column;
  text-align: left;
}

#gameBoard {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 10px;
  flex: 60%;
}
</style>
