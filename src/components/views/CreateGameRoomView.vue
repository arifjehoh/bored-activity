<template>
  <div class="container">
    <div class="card">
      <h1 class="card-header">Create Game Room</h1>
      <form>
        <div class="form-group">
          <label for='roomName'>Game room name:</label>
          <input class='form-control' type='text' id='roomName' name='roomName' v-model='roomName' placeholder="Type of activities:" aria-describedby="emailHelp"/>
        </div>
        <div class="form-group">
          <label for='typeActivites'>Type of activities:</label>
          <select class='form-control' name='typeActivites' v-model='type'>
            <option value=''>Everything</option>
            <option value='education'>Education</option>
            <option value='recreational'>Recreational</option>
            <option value='social'>Social</option>
            <option value='diy'>Diy</option>
            <option value='charity'>Charity</option>
            <option value='cooking'>Cooking</option>
            <option value='relaxation'>Relaxation</option>
            <option value='music'>Music</option>
            <option value='busywork'>Busywork</option>
          </select>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary" v-on:click='createGame'>Create game room</button>
        </div>
      </form>
    </div>
  </div>
    <!-- <div>
    <label id ='label' for='typeActivites'>Type of activities:</label>
    <div>
    <select id='typeActivites' name='typeActivites' v-model='type'>
      <option value=''>Everything</option>
      <option value='education'>Education</option>
      <option value='recreational'>Recreational</option>
      <option value='social'>Social</option>
      <option value='diy'>Diy</option>
      <option value='charity'>Charity</option>
      <option value='cooking'>Cooking</option>
      <option value='relaxation'>Relaxation</option>
      <option value='music'>Music</option>
      <option value='busywork'>Busywork</option>
    </select>
    </div>
    </div>
    <div>
    <button v-on:click='createGame'>Create game room</button>
    </div>
  </div> -->
</template>

<script>

export default {
  name: 'CreateGameRoomView',
  emits: ['createGameRoom'],
  data () {
    return {
      roomName: '',
      type: ''
    }
  },
  methods: {
    createGame: async function () {
      this.$emit('createGameRoom', this.roomName, this.type)
    }
  }
}
</script>

<style scoped>
</style>
