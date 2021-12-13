<template>
  <div id='container'>
    <div id='header'>
      <h1>{{ title }} - {{ room_status }}</h1>
    </div>
    <div id='content'>
      <div id='gameBoard'>
        <div v-for='(activity, index) in activities' v-bind:key='activity.key' v-on:click='completeActivtiy(index)'>
          {{ activity.activity }}<br>{{activity.type}}<br>{{ activity.participants }}
        </div>
      </div>
      <div id='participants'>
        <h2>Participants:</h2>
        <div v-for='participant in participants' v-bind:key='participant.name'>
          {{ participant }}
          <!-- TODO {{ participant }}: {{ participant.name }}: {{ participant.score }} -->
        </div>
        <button type='button' v-if='!haveJoined' v-on:click='joinGame'>Join game room</button>
        <button type='button' v-if='isOwner' v-on:click='endGame'>End game room</button>
        <button type='button' v-if='haveJoined' v-on:click='leaveGame'>Leave game room</button>
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
  emits: ['playerJoinGame', 'playerLeaveGame', 'playerEndGame', 'completeActivtiy'],
  setup () {
    // Todo fetch player with this.gameRoom.participants
  },
  data () {
    return {
      title: 'No title',
      room_status: 'Not started',
      participants: [],
      activities: [],
      isOwner: false,
      haveJoined: false
    }
  },
  beforeMount () {
    this.title = this.gameRoom.title
    this.room_status = this.gameRoom.roomStatus
    this.participants = this.gameRoom.participants
    this.activities = this.gameRoom.activities.entries
    this.isOwner = this.gameRoom.owner === 'arif' // TODO change to current user
    this.haveJoined = this.participants.find(user => user === 'arif@arif.com') // TODO get current user email
  },
  methods: {
    joinGame: function () {
      console.log('User wants to join the game.')
      this.$emit('playerJoinGame', {})
    },
    endGame: function () {
      if (confirm('User wants to end the game.')) {
        console.log('User is ending the game.')
        this.$emit('playerEndGame', {})
      } else {
        console.log('User do not want to end the game')
      }
    },
    leaveGame: function () {
      if (confirm('User wants to leave the game.')) {
        console.log('User is leaving.')
        this.$emit('playerLeaveGame', {})
      } else {
        console.log('User do not want to leave.')
      }
    },
    completeActivtiy: function (index) {
      if (!this.haveJoined) {
        return
      }
      const playerId = '1234' // TODO add current user
      if (!this.activities[index].participants.find(id => id === playerId)) {
        this.activities[index].participants.push(playerId)
      } else {
        this.activities[index].participants.pop(playerId)
      }
      const entries = this.activities
      this.$emit('completeActivtiy', { entries })
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
