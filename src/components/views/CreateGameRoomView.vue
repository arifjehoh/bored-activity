<template>
  <div class="container">
    <div class="card content">
      <h1 class="card-header bg-primary text-white">Create Game Room</h1>
      <form class="form-content">
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
.content {
  height: 600px;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
}

.form-content {
  margin: 16px;
  margin-top: auto;
  margin-bottom: auto;
  padding-top: 16px;
  padding-bottom: 16px;
}
</style>
