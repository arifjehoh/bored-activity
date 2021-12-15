<template>
  <div>
    <div>
      <h1>Game Instructions</h1>
      <div id='content'>
        <span> Our project is a bingo game it is called bored/activity.
          It can be play alone or with friends. It is built on random activity. Whoever completes the five activity first in the bingo pattern gets Bingo and you are the winner.
          <br>
          <br>
          The activitys on the board could be anything from "Learn a new recipe","Take a bubble bath" to "Learn a new programming language".
       </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstructionsHelp',
  data () {
    return {
      name: null,
      email: null
    }
  },
  methods: {
  }
}
</script>
<style scoped>
span{
  width:  40%;
  font-size: 120%;
  font-weight: bold;
  border: groove;
  align-content: center;
  align-items: center;
}#content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
}
</style>
