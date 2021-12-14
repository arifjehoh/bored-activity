<template>
 <div>
  <div id="userNav" v-show="r">
    <router-link to="/">Home</router-link> |
    <router-link to="/UserProfile">Profile</router-link> |
    <router-link to="/GameList">Game List</router-link> |
    <router-link to="/GameRoom">Game Room</router-link> |
    <!-- <router-link to="/LogIn">Sign in</router-link> -->
    <router-view/>
  </div>
<!-- //TO DO -->
  <div id="guestNav" v-show="!r">
    <router-link to="/">Home</router-link> |
    <router-link to="SignUp">Sign Up</router-link> |
    <router-link to="/LogIn">Sign in</router-link>
    <router-view/>
  </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>
#app {
  font-family: Averia, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#userNav {
  padding: 30px;
}

#guestNav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
