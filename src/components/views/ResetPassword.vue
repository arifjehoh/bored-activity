<template>
  <div class='container'>
    <div class="card text-center content">
      <div>
        <h1 class='card-header bg-primary text-white'>Reset password</h1>
      </div>
      <form class="form-content">
        <div class="form-group">
          <label>Email Address</label>
          <input
            type='email'
            placeholder='Enter email'
            v-model='email'
            required
            class='form-control'
          />
        </div>
        <div class="btn-group-vertical">
          <div class="form-group w-100">
            <button type='button' class='btn btn-primary' v-on:click='ResetPassword'>Reset Password</button>
          </div>
        </div>
      </form>
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
.content {
  height: 600px;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
}

.form-content {
  margin: 16px;
  margin-top: auto;
  margin-bottom: auto;
  padding-top: 16px;
  padding-bottom: 16px;
}
</style>
