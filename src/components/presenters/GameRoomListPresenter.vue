<template>
  <div>
    <GameRoomList @enterRoom='enterRoom' @createGameRoom='goToCreateGameRoom'/>
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
