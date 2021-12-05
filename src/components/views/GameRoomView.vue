<template>
  <div id='container'>
    <div id='header'>
      <h1>{{ title }} - {{ room_status }}</h1>
    </div>
    <div id='content'>
      <div id='gameBoard'>
        <div v-for='activity in activities' v-bind:key='activity.key'>{{ activity.activity }}<br>{{activity.type}}</div>
      </div>
      <div id='participants'>
        <h2>Participants:</h2>
        <div v-for='participant in participants' v-bind:key='participant.name'>
          {{ participant.name }}: {{ participant.score }}
        </div>
        <button type='button' v-on:click='joinGame'>Join game room</button>
        <button type='button' v-on:click='endGame'>End game room</button>
        <button type='button' v-on:click='leaveGame'>Leave game room</button>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'GameRoom',
  props: {
    gameRoom: Object
  },
  data () {
    return {
      title: 'No title',
      room_status: 'Not started',
      participants: [],
      activities: []
    }
  },
  mounted () {
    this.title = this.gameRoom.title
    this.room_status = this.gameRoom.room_status
    this.participants = this.gameRoom.participants
    this.activities = this.gameRoom.activities
  },
  methods: {
    joinGame: function () {
      console.log('User wants to join the game.')
    },
    endGame: function () {
      console.log('User wants to end the game.')
    },
    leaveGame: function () {
      if (confirm('User wants to leave the game.')) {
        console.log('User is leaving.')
      } else {
        console.log('User do not want to leave.')
      }
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
