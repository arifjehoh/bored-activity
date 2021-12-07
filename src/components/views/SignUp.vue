<template>
  <div id='content'>
    <div id='header'>
      <h1>Bored Bingo</h1>
      <h2>Sign up</h2>
    </div>

    <div>
        <h4>Full Name</h4>
      <input type='text' placeholder="Enter name" v-model="name" id='place' />
      <h4>Email Adress</h4>
      <input type='email' placeholder="Enter email" v-model="email" id='place' />
      <h4>Password</h4>
      <input type='password' placeholder="Enter password" v-model="password" id='place' />
    </div>
    <div id='loginButton'>
      <button id='btnSignin' v-on:click='SignUp'>Sign up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      name: null,
      email: null,
      password: null
    }
  },
  methods: {
    SignUp: function () {
      console.log('User wants to sign up with values:', this.name, this.email, this.password)
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
