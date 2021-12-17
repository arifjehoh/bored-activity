<template>
  <div id = "main" class='card text-center container-sm'>
    <div class='card-body'>
      <h1 id='haederText' class='card-title bg-primary'>Sign up</h1>
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
        <div id='btnDiv' class='btn-group-vertical'>
      <button type='button' class='btn btn-primary' v-on:click='SignUp'>Sign up</button>
        </div>
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
#main {
  height: 600px;
  max-width: 540px;
  margin-top: 80px;
  background-color: _;
  }
#btnDiv{
  margin-top: 30px;
}
.button.btn{
  min-width: 141.21;
}
#haederText{
  color: white;
}
</style>
