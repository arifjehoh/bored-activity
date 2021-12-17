<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand btn-link" href="#" v-on:click='toHomepage'>Bingo when you are bored</a>
    <div class="">
      <ul class="navbar-nav">
        <!-- TODO LINKS SHOULD BE TO THE LEFT -->
        <li class="nav-item active">
          <router-link class="nav-item active" to='/rooms'>Game room list</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item" v-if='this.$store.state.user' to='/profile'>Profile</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item" v-if='!this.$store.state.user' to='/sign-in'>Sign in</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationPresenter',
  methods: {
    toHomepage: function () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
