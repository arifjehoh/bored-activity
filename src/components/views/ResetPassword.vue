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
      <button id='btnReset' v-on:click='ResetPassword'>Reset Password</button>
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
    ResetPassword: function () {
      this.$emit('resetPassword', this.email)
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
#btnReset {
  font-size: 25px;
  padding: 5px;
  margin-top: 50px;
  border-radius: 3px;
}
#place {
  font-size: 20px;
}
</style>
