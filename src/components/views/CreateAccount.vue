<template>
  <div class='card text-center container-sm'>
    <div class='card-body'>
      <h1 class='card-title'>Sign up</h1>
      <span class='card-title'>Full Name</span>
      <input
        type='text'
        placeholder="Enter name"
        v-model="name"
        class='form-control'/>
      <span class='card-title'>Email Address</span>
      <input
        type='email'
        placeholder='Enter email'
        v-model='email'
        required
        class='form-control'/>
      <span class='card-title'>Password</span>
      <input
        type='password'
        placeholder='Enter password'
        v-model='password'
        required
        class='form-control'/>
      <button type='button' class='btn btn-primary' v-on:click='SignUp'>Sign up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateAccount',
  emits: ['signUp'],
  data () {
    return {
      name: null,
      email: null,
      password: null
    }
  },
  methods: {
    SignUp: function () {
      this.$emit('signUp', this.name, this.email, this.password)
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
#InputBox {
  font-size: 25px;
  width: 350px;
  height: 50px;
  border: none;
  border: 3px solid #555;
  border-radius: 3px;
}
#textBoxTitle {
  margin-bottom: 0px;
  padding-bottom: 0px;
  font-size: 20px;
}
#pageTitle {
  margin-top: 50px;
}
#btnSignUp {
  font-size: 25px;
  padding: 5px;
  margin-top: 50px;
  border-radius: 3px;
  width: 150px;
}
</style>
