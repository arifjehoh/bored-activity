<template>
  <div>
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
    }
  }
}
</script>

<style scoped>
</style>
