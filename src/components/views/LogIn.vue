<template>

  <div id="content">
    <div id="header">
      <h1>Bored Bingo</h1>
      <h2>Sign in</h2>
    </div>

    <div>
      <h4>Email Adress</h4>
      <input type="email" placeholder  id= 'place'/>
      <h4>Password</h4>
      <input type="password"> placeholder id= 'place' />
    </div>
    <div id="profileButton">
      <button id="btnSignin" v-on:click="SignIn">Sign in</button>
    </div>
    <div id="loginButton">
      <button id="btnSignin" v-on:click="createProfile">Create Profile</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data () {
  },
  mounted () {},
  methods: {
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
#content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
#siteName {
  text-align: left;
  text-align: top;
  position: relative;
  bottom: 50px;
}
#rightMenu {
  text-align: end;
  text-align: top;
  text-size-adjust: 50%;
  position: relative;
  bottom: 95px;
}
#midContent {
  text-align: center;
  position: relative;
  bottom: 80px;
}
#profileButton {
  position: relative;
  top: 10px;
}
#loginButton {
  position: relative;
  top: 10px;
}
#btnSignin{
  font-size: 20px;
}
#place{
  font-size: 20px;
}
</style>
