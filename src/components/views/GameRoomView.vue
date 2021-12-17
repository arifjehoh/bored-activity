<template>
  <div class='container'>
    <div class="row">
      <h1 class='col-sm'>{{ title }} - {{ room_status }}</h1>
    </div>
    <div class="row">
      <div class="row card-group">
        <div class="col" v-for='(activity, index) in activities.slice(0,5)' v-bind:key='activity.key' v-on:click='complete(index)'>
          <div class="card col">
            <p class="card-text">{{ activity.activity }}</p>
            <p class="card-text">{{ activity.type }}</p>
            <p v-for='participant in activity.participants' v-bind:key='participant'>
              {{ participant.displayName }}
            </p>
          </div>
        </div>
        <div class='row card-group'>
        <div class="col" v-for='(activity, index) in activities.slice(5,10)' v-bind:key='activity.key' v-on:click='complete(index+5)'>
          <div class="card col">
            <p class="card-text">{{ activity.activity }}</p>
            <p class="card-text">{{ activity.type }}</p>
            <p v-for='participant in activity.participants' v-bind:key='participant'>
              {{ participant.displayName }}
            </p>
          </div>
        </div>
        </div>
        <div class='row card-group'>
        <div class="col" v-for='(activity, index) in activities.slice(10,15)' v-bind:key='activity.key' v-on:click='complete(index+10)'>
          <div class="card col">
            <p class="card-text">{{ activity.activity }}</p>
            <p class="card-text">{{ activity.type }}</p>
            <p v-for='participant in activity.participants' v-bind:key='participant'>
              {{ participant.displayName }}
            </p>
          </div>
        </div>
        </div>
        <div class='row card-group'>
        <div class="col" v-for='(activity, index) in activities.slice(15,20)' v-bind:key='activity.key' v-on:click='complete(index+15)'>
          <div class="card col">
            <p class="card-text">{{ activity.activity }}</p>
            <p class="card-text">{{ activity.type }}</p>
            <p v-for='participant in activity.participants' v-bind:key='participant'>
              {{ participant.displayName }}
            </p>
          </div>
        </div>
        </div>
        <div class='row card-group'>
        <div class="col" v-for='(activity, index) in activities.slice(20,25)' v-bind:key='activity.key' v-on:click='complete(index+20)'>
          <div class="card col">
            <p class="card-text">{{ activity.activity }}</p>
            <p class="card-text">{{ activity.type }}</p>
            <p v-for='participant in activity.participants' v-bind:key='participant'>
              {{ participant.displayName }}
            </p>
          </div>
        </div>
        </div>
      </div>
      <div class="col card container-sm">
        <h2>Participants:</h2>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for='participant in participants' v-bind:key='participant.uid'>{{ participant.displayName }}</li>
        </ul>
        <div class="btn-group-vertical">
          <button type='button' class="btn btn-primary" v-if='!haveJoined && this.$store.state.user' v-on:click='joinGame'>Join game room</button>
          <button type='button' class="btn btn-danger" v-if='isOwner' v-on:click='endGame'>End game room</button>
          <button type='button' class="btn btn-primary" v-if='haveJoined' v-on:click='leaveGame'>Leave game room</button>
        </div>
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
          console.log(user)
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
</style>
