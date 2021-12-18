<template>
  <div>
    <GameRoomList :rooms='rooms' @enterRoom='enterRoom' @createGameRoom='goToCreateGameRoom'/>
  </div>
</template>

<script>
import GameRoomList from '../views/GameRoomList.vue'
import { db } from '../utils/FirebaseService.js'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
export default {
  name: 'GameRoomListPresenter',
  data () {
    return {
      rooms: []
    }
  },
  components: {
    GameRoomList
  },
  beforeCreate () {
    try {
      const q = query(collection(db, 'rooms'), where('status', '!=', 'Done'))
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const activities = []
        snapshot.forEach((doc) => {
          activities.push({
            content: doc.data(),
            id: doc.id
          })
        })
        this.rooms = activities
      })
      console.log(unsubscribe.length)
      return unsubscribe
    } catch (error) {
      console.log(error)
    }
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
