<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ room_status }}</h2>
    <h3>{{ participants }}</h3>
    {{ activities }}
    <Button type='button'>End game room</button>
    <Button type='button'>Leave game room</button>
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
</style>
