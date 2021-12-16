<template>
  <div>
    <h1>Create Game Room</h1>
    <div>
    <label id='label' for='roomName'>Game room name:</label>
    </div>
    <input type='text' id='roomName' name='roomName' v-model='roomName' placeholder="Type of activities:" />
    <div>
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
button{
  margin  : 10px;
border-radius: 8px;
width: 15%;
height: 50px;
}
button:active {
  font-weight: bold;
  background-color: #d8d8d8;
  box-shadow: 0 2px #666;
  transform: translateY(0.5px);
}
#typeActivites{
  margin  : 10px;
  padding: 8px;
  border-radius: 8px;
  width: flex;
  font-size: 20px;
  font-weight: bold;
}
#label{
  margin  : 10px;
  font-size: 20px;
  font-weight: bold;
}
#roomName{
  margin  : 10px;
  padding: 8px;
  border-radius: 8px;
  width: flex;
  font-size: 20px;
  font-weight: bold;
}
</style>
