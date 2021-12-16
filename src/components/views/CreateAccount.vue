<template>
  <div id='content'>
    <div id='header'>
      <h1 >Bored Bingo</h1>
      <h2>Sign up</h2>
    </div>

    <div>
        <div id = 'labelDiv'><label >Full Name</label></div>
      <input type='text' placeholder="Enter name" v-model="name" id='InputBox' />
     <div id = 'labelDiv'> <label >Email Adress</label></div>
      <input type='email' placeholder="Enter email" v-model="email" id='InputBox' />
    <div id = 'labelDiv'>  <label >Password</label></div>
      <input type='password' placeholder="Enter password" v-model="password" id='InputBox' />
    </div>
    <div >
      <button id='buttonDiv' v-on:click='SignUp'>Sign up</button>
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
  margin-bottom: 5px;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
}
#labelDiv{
  margin  : 10px;
  margin-bottom: 5px;
}
#buttonDiv{
  margin-top: 50px;
}
</style>
