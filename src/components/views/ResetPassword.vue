<template>
  <div id='main' class='card text-center container-sm '>
    <div class='card-body'>
      <h1 id='maincontent' class='card-title bg-primary'>Reset password</h1>
      <span class='card-title'>Email Address</span>
      <input
        type='email'
        placeholder='Enter email'
        v-model='email'
        required
        class='form-control'
      />
      <button id='btnDiv' type='button' class='btn btn-primary' v-on:click='ResetPassword'>Reset Password</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResetPassword',
  emits: ['resetPassword'],

  data () {
    return {
      email: null
    }
  },
  methods: {
    tester: function () {
      this.$emit('test')
    },
    ResetPassword: function () {
      this.$emit('resetPassword', this.email)
    }
  }
}
</script>

<style scoped>
#main{
  height: 600px;
  max-width: 540px;
  margin-top: 80px;
  background-color: _;
}#maincontent{
  margin-bottom: 80px;
  color: white;
}
#btnDiv{
  margin-top: 30px;
}
#haederText{
  color: white;
}
</style>
