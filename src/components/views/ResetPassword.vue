<template>
  <div id='content'>
    <div id='header'>
      <h1>Bored Bingo</h1>
      <h2>Reset password</h2>
    </div>

    <div>
      <h4>Email Adress</h4>
      <input
        type='email'
        placeholder='Enter email'
        v-model='email'
        id='place'
      />
    </div>
    <div id='resetPassword'>
      <button id='btnSignin' v-on:click='ResetPassword'>Reset Passwrod</button>
    </div>
  </div>
</template>

<script>
import { requestResetPassword } from '../utils/FirebaseService.js'
export default {
  name: 'ResetPassword',
  data () {
    return {
      email: null
    }
  },
  methods: {
    ResetPassword: function () {
      requestResetPassword(this.email).then(() => {
        this.email = ''
      })
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
#midContent {
  text-align: center;
  position: relative;
  bottom: 80px;
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
