<template>
  <div>
    <h1>CreateGameRoomPresenter</h1>
    <CreateGameRoomView @test = 'test'/>
  </div>
</template>

<script>
import CreateGameRoomView from '../views/CreateGameRoomView.vue'
export default {
  name: 'CreateGameRoomPresenter',
  components: {
    CreateGameRoomView
  },
  methods: {
    test: function () {
      console.log('test')
    }
  }
}
</script>

<style scoped>
</style>
