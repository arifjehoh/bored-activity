<template>
<div class="container" style="overflow: auto;">
  <div class="row">
    <h1 class='col'>{{ title }} <span class="badge badge-success">{{ room_status }}</span></h1>
  </div>
  <div class="row">
    <div class='col'>
      <div class="row">
        <div class="card-group">
          <div class="col col-space" v-for='(activity, index) in activities.slice(0,5)' v-bind:key='activity.key' v-on:click='complete(index)'>
            <div class="card card-size bg-light">
              <span class="card-header bg-primary text-white" style="text-transform: capitalize;">{{ activity.type }}</span>
              <span class="card-body text-dark"><b>{{ activity.activity }}</b></span>
              <p class='text-primary' v-for='participant in activity.participants' v-bind:key='participant'>
                {{ participant.displayName }}
              </p>
            </div>
          </div>
        </div>
        <div class="card-group">
          <div class="col col-space" v-for='(activity, index) in activities.slice(5,10)' v-bind:key='activity.key' v-on:click='complete(index+5)'>
            <div class="card card-size bg-light">
              <span class="card-header bg-primary text-white" style="text-transform: capitalize;">{{ activity.type }}</span>
              <span class="card-body text-dark"><b>{{ activity.activity }}</b></span>
              <p class='text-primary' v-for='participant in activity.participants' v-bind:key='participant'>
                {{ participant.displayName }}
              </p>
            </div>
          </div>
        </div>
        <div class="card-group">
          <div class="col col-space" v-for='(activity, index) in activities.slice(10,15)' v-bind:key='activity.key' v-on:click='complete(index+10)'>
            <div class="card card-size bg-light">
              <span class="card-header bg-primary text-white" style="text-transform: capitalize;">{{ activity.type }}</span>
              <span class="card-body text-dark"><b>{{ activity.activity }}</b></span>
              <p class='text-primary' v-for='participant in activity.participants' v-bind:key='participant'>
                {{ participant.displayName }}
              </p>
            </div>
          </div>
        </div>
        <div class="card-group">
          <div class="col col-space" v-for='(activity, index) in activities.slice(15,20)' v-bind:key='activity.key' v-on:click='complete(index+15)'>
            <div class="card card-size bg-light">
              <span class="card-header bg-primary text-white" style="text-transform: capitalize;">{{ activity.type }}</span>
              <span class="card-body text-dark"><b>{{ activity.activity }}</b></span>
              <p class='text-primary' v-for='participant in activity.participants' v-bind:key='participant'>
                {{ participant.displayName }}
              </p>
            </div>
          </div>
        </div>
        <div class="card-group">
          <div class="col col-space" v-for='(activity, index) in activities.slice(20,25)' v-bind:key='activity.key' v-on:click='complete(index+20)'>
            <div class="card card-size bg-light">
              <span class="card-header bg-primary text-white" style="text-transform: capitalize;">{{ activity.type }}</span>
              <span class="card-body text-dark"><b>{{ activity.activity }}</b></span>
              <p class='text-primary' v-for='participant in activity.participants' v-bind:key='participant'>
                {{ participant.displayName }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-1">
    </div>
    <div class="container col-3" style="padding-top: 15px">
      <div class="card">
        <h2 class="card-header bg-primary text-white">Participants:</h2>
        <ul class='list-group list-group-flush'>
          <li class="list-group-item" v-for='participant in participants' v-bind:key='participant.uid'>{{ participant.displayName }}</li>
        </ul>
        <div class="card-body btn-group-vertical">
          <div class="form-group w-100">
            <button type='button' class="btn btn-primary btn-block" v-if='!haveJoined && this.$store.state.user' v-on:click='joinGame'>Join game room</button>
          </div>
          <div class="form-group w-100">
            <button type='button' class="btn btn-danger btn-block" v-if='isOwner' v-on:click='endGame'>End game room</button>
          </div>
          <div class="form-group w-100">
            <button type='button' class="btn btn-primary btn-block" v-if='haveJoined' v-on:click='leaveGame'>Leave game room</button>
          </div>
          <div class="form-group w-100">
            <router-link to='/gif-test' id='BINGO' type='button' class="btn btn-block"  v-if='haveJoined' v-on:click='test'>BINGO</router-link>
          </div>
        </div>
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
  mounted () {
    console.log(this.gameRoom)
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
    },
    test: function () {
      console.log('test')
    }
  }
}
</script>

<style scoped>
.card-size {
  max-width: 120px;
  min-height: 200px;
}

.col-space {
  margin-top: 15px;
  margin-bottom: 15px;
}

#BINGO{
  background-color: rgb(0, 0, 0);
  color: gold;
}
</style>
