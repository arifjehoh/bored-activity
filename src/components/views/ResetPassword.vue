<template>
  <div class='card text-center container-sm'>
    <div class='card-body'>
      <h1 class='card-title'>Reset password</h1>
      <span class='card-title'>Email Address</span>
      <input
        type='email'
        placeholder='Enter email'
        v-model='email'
        required
        class='form-control'
      />
      <button type='button' class='btn btn-primary' v-on:click='ResetPassword'>Reset Password</button>
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
