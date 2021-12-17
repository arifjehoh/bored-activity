<template>
  <nav class="navbar navbar-dark bg-primary ">
    <a id='rightContent' class="navbar-brand btn-link" href="#" v-on:click='toHomepage'>Bingo when you are bored</a>
      <ul class="navbar-nav">
        <!-- TODO LINKS SHOULD BE TO THE LEFT -->
        <li class="nav-item active">
          <router-link  id='leftContent' class="nav-item active" to='/rooms'>Game room list</router-link>
        </li>
        <li class="nav-item">
          <router-link  id='leftContent1' class="nav-item" v-if='this.$store.state.user' to='/profile'>Profile</router-link>
        </li>
        <li id='leftContent' class="nav-item">
          <router-link id='leftContent1' class="nav-item" v-if='!this.$store.state.user' to='/sign-in'>Sign in</router-link>
        </li>
      </ul>
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

<style scoped>
#leftContent{
  color: black;
  align-content: left;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-decoration-color: rgba(0,0,0.9);
  text-decoration-line: none;
  text-decoration-style: solid;
  text-decoration-thickness: 100%;
  text-align: center;
  position: left;
  color: white;
}
#leftContent1{
  color: black;
  align-content: left;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-decoration-color: rgba(0,0,0.9);
  text-decoration-line: none;
  text-decoration-style: solid;
  text-decoration-thickness: 100%;
  text-align: center;
  margin-left: 20px;
  color: white;
}#rightContent{
  margin-right:60%
}

</style>
