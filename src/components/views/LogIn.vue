<template>
  <div id = 'container' >
      <h3 id = 'siteName' >Bored Bingo</h3>
      <div id = 'rightMenu'>
      <button type='button' v-on:click='goToGame'> Game </button>
      <button type='button' v-on:click='goToRoom' > Room </button>
      <button type='button' v-on:click='goToList'> List </button>
      <button type='button' v-on:click='goToSignIn'> Sign in </button>
      </div>

      <div id = 'midContent'>
        <h1> Bored Bingo</h1>
        <h4> Sign in </h4>
      </div>

      <div>
        <h4> Email Adress </h4>
        <input placeholder>
        <h4> Password</h4>
        <input placeholder >
       </div>
        <div id = 'profileButton'><button type = 'button' v-on:click='SignIn'> Sign in </button></div>
         <div id = 'loginButton'><button type='button' v-on:click='createProfile'> Create Profile </button></div>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  props: {
    LogIn: Object
  },
  data () {
    return {
      title: 'No title',
      room_status: 'Not started',
      participants: [],
      activities: []
    }
  },
  mounted () {
  },
  methods: {
    goToGame: function () {
      console.log('User wants to go to game.')
    },
    goToRoom: function () {
      console.log('User wants to go to room.')
    },
    goToList: function () {
      console.log('User wants to go to list.')
    },
    goToSignIn: function () {
      console.log('User wants to go to sign in.')
    },
    SignIn: function () {
      console.log('User wants to  sign in.')
    },
    createProfile: function () {
      console.log('User wants to go to create profile.')
    }
  }
}
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
#siteName{
  text-align: left;
  text-align: top;
  position: relative;
  bottom: 50px;;
}
#rightMenu{
  text-align: end;
  text-align: top;
  text-size-adjust: 50%;
   position: relative;
  bottom: 95px;;
}
#midContent{
  text-align: center;
  position: relative;
  bottom: 80px;;
}
#profileButton{
  position: relative;
  top: 10px;;
}
#loginButton{
  position: relative;
  top: 10px;;
}

</style>
