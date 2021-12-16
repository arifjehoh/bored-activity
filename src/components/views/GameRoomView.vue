<template>
  <div id='container'>
    <div id='header'>
      <h1>{{ title }} - {{ room_status }}</h1>
    </div>
    <div id='content'>
      <div id ='test'>
      <div id='gameBoard'>
        <div id= 'gameContent' v-for='(activity, index) in activities' v-bind:key='activity.key' v-on:click='complete(index)'>
          {{ activity.activity }}<br>{{activity.type}}<br>
          <div v-for='participant in activity.participants' v-bind:key='participant'>
            {{ participant.displayName }}
          </div>
        </div>
      </div>
      </div>
      <div id='participants'>
        <h2>Participants:</h2>
        <div id='players' v-for='participant in participants' v-bind:key='participant.uid'>
          {{ participant.displayName }}
           <!--TODO {{ participant }}: {{ participant.name }}: {{ participant.score }}-->
        </div>
        <button type='button' v-if='!haveJoined && this.$store.state.user' v-on:click='joinGame'>Join game room</button>
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
    console.log(this.gameRoom)
    return {
      title: this.gameRoom.title,
      room_status: this.gameRoom.roomStatus,
      participants: this.gameRoom.participants,
      activities: this.gameRoom.activities,
      isOwner: this.$store.state.user !== null && this.$store.state.user.uid === this.gameRoom.owner ? this.gameRoom.owner === this.$store.state.user.uid : false,
      haveJoined: this.gameRoom.participants.find(user => {
        if (this.$store.state.user !== null) {
          return user.uid.match(this.$store.state.user.uid)
        }
        return false
      })
    }
  },
  methods: {
    joinGame: function () {
      console.log('User wants to join the game.')
      this.$emit('playerJoinGame', {})
    },
    endGame: function () {
      if (confirm('User wants to end the game.')) {
        console.log('User is ending the game.')
        this.$emit('playerEndGame', 'Done')
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
    complete: function (index) {
      if (!this.haveJoined) {
        return
      }
      const player = this.$store.state.user
      console.log(this.activities[index].participants)
      if (!this.activities[index].participants.find(id => id.uid === player.uid)) {
        this.activities[index].participants.push({ uid: player.uid, displayName: player.displayName })
      } else {
        this.activities[index].participants.pop({ uid: player.uid, displayName: player.displayName })
      }
      const entries = this.activities
      console.log(entries)
      this.$emit('completeActivtiy', entries)
    }
  }
}
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
}

#content {
  display: flex;
  flex-direction: row;
  flex: 40%;
}

#participants {
  display: flex;
  flex-direction: column;
  text-align: center;
  border: groove;
  text-size-adjust: 20%;
  width: 25%;
  height: flex;
}

#gameBoard {
  display: grid;
  grid-template-columns:auto auto auto auto auto;
  grid-gap: 15px;
  width: 60%;
  padding-left: 27%;
  padding-top: 0%;
  padding-bottom: 0%;
  font-size: 105%;
}
#gameContent{
  border: groove;
  align-items: center;
  size: 60px;
}
#test{
  align-items: center;
  align-content: center;
}
#players{
  border: groove;
  font-size: large;
  margin: 5px;
}
button{
  margin: 4px;
  text-align: center;
  align-self: center;
  width: 98%;
  height: 5%;
  font-size: large;
  border-radius: 12px;

}
button:active {
  background-color: #d8d8d8;
  box-shadow: 0 2px #666;
  transform: translateY(0.5px);
}
#test{
  align-content: center;
  align-items: center;
  text-align: center;
}

</style>
