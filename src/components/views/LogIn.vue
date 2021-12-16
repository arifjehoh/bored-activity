<template>
  <div id="content">
    <div id="header">
      <h1 id="pageTitle">Bored Bingo</h1>
      <h2>Sign in</h2>
    </div>

    <div>
      <div id = 'labelDiv'>
      <label >Email Address</label>
      </div>
      <input
        type="email"
        placeholder="Enter email"
        v-model="email"
        required
        id="InputBox"
      />

       <div id = 'labelDiv' >
      <label >Password</label>
      </div>
      <input
        type="password"
        placeholder="Enter password"
        v-model="password"
        required
        id="InputBox"
      />
    </div>
    <div id = 'buttonDiv'>
    <div >
      <button id='SignIn' v-on:click='SignIn' >Sign in</button>
    </div>
    <div>
      <button  v-on:click='SignUp'>Sign up</button>
    </div>
    <div>
      <button id="btnResetPassword" v-on:click="restUserPassword">Reset password</button>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LogIn',
  emits: ['singInUser', 'signUpUser', 'restPassword'],

  data () {
    return {
      email: null,
      password: null,
      user: 'No user'
    }
  },
  methods: {
    SignIn: function () {
      this.$emit('singInUser', this.email, this.password)
    },
    SignUp: function () {
      this.$emit('signUpUser')
    },
    restUserPassword: function () {
      this.$emit('restPassword')
    }
  }
}
</script>

<style scoped>
#content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 60px;
}
#midContent {
  text-align: center;
  position: relative;
  bottom: 80px;
}
button {
  font-size: 25px;
  padding: 5px;
  margin-top: 20px;
  border-radius: 3px;
  width: flex;
  background-color: white;

}
input{
  font-size: 25px;
  width: flex;
  height: flex;
  border: none;
  border: 3px solid #555;
  border-radius: 3px;
}
label {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
}
#labelDiv{
  margin  : 10px;
}
#buttonDiv{
  margin-top: 50px;
}
.routerLink {
       text-decoration: none;
       color: inherit;
       font-size: 15px;

}
</style>
