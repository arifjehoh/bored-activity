<template>
  <div>
    <div>
      <h1>Profile</h1>
      <div>
        <h4>{{ this.name }}</h4>
        <h5>{{ this.email }}</h5>
        <button id='btnLogOut' v-on:click='tester1'>Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  emits: ['test'],
  data () {
    return {
      name: null,
      email: null
    }
  },
  methods: {
    tester1: function () {
      this.$emit('LogOut')
    }
  }
}
</script>
