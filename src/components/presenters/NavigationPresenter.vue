<template>
  <nav class="navbar navbar-dark bg-primary">
    <div class='left nav-content' >
      <router-link class="navbar-brand btn-link text-white" to='/rooms'><b>Bingo when you are bored</b></router-link>
    </div>
    <div class='right nav-content'>
      <div class="row">
        <span class="nav-item col">
          <router-link class='text-white' to="/rooms">Game room list</router-link>
        </span>
        <span class="nav-item col" v-if="this.$store.state.user">
          <router-link class='text-white' to="/profile">Profile</router-link>
        </span>
        <span class="nav-item col" v-if="!this.$store.state.user">
          <router-link class='text-white' to='/sign-in'>Sign in</router-link>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationPresenter'
}
</script>

<style scoped>
.left {
  align-content: left;
}

.right {
  align-content: right;
}

.nav-content {
  overflow: hidden;
  white-space: nowrap;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-decoration-color: rgba(0,0,0.9);
  text-decoration-line: none;
  text-decoration-style: solid;
  text-decoration-thickness: 100%;
}

</style>
