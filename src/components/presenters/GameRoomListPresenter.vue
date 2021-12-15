<template>
  <div>
    <button type='button' v-on:click='goToCreateGameRoom'>Create Game Room</button>
    <GameRoomList @enterRoom='enterRoom'/>
  </div>
</template>

<script>
import GameRoomList from '../views/GameRoomList.vue'
export default {
  name: 'GameRoomListPresenter',
  components: {
    GameRoomList
  },
  methods: {
    enterRoom: function (roomId) {
      console.log(roomId)
      this.$router.push({ name: 'game', params: { roomId: roomId } })
    },
    goToCreateGameRoom: function () {
      this.$router.push({ name: 'create-game' })
    }
  }
}
</script>

<style scoped>
</style>
