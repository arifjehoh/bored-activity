<template>
  <div id='content'>
    <div id='header'>
      <h1>Bored Bingo</h1>
      <h2>Sign in</h2>
    </div>

    <div>
      <h4>Email Adress</h4>
      <input type='email' placeholder='Enter email' v-model = 'email' id='place' />
      <h4>Password</h4>
      <input type='password' placeholder='Enter password' v-model = 'password' id='place' />
    </div>
    <div id='SignIn'>
      <button id='btnSignin' v-on:click='SignIn'>Sign in</button>
    </div>
    <div id='SignUp'>
      <button id='btnSignin' v-on:click='SignUp'>Sign up</button>
    </div>
    <div id='resetPassword'>
      <button id='btnSignin' v-on:click='ResetPassword'>Reset password</button>
    </div>
  </div>
</template>

<script>
import { signInFromForm } from '../utils/FirebaseService.js'

export default {
  name: 'LogIn',
  data () {
    return {
      email: null,
      password: null,
      user: 'No user'
    }
  },
  methods: {
    SignIn: function () {
      signInFromForm(this.email, this.password).then(user => console.log(user)).catch(console.error)
    },
    SignUp: function () {
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
#btnSignin {
  font-size: 20px;
}
#place {
  font-size: 20px;
}
</style>
