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
  <div>
    <ActivityList />
    <LogIn />
    <SignUp/>
    <UserProfile/>
    <GameRoomList/>
    <CreateGameRoomPresenter />
    <GameRoomPresenter />
  </div>
</template>

<script>
import ActivityList from './components/views/ActivityList.vue'
import LogIn from './components/views/LogIn.vue'
import SignUp from './components/views/SignUp.vue'
import UserProfile from './components/views/UserProfile.vue'
import CreateGameRoomPresenter from './components/presenters/CreateGameRoomPresenter.vue'
import GameRoomPresenter from './components/presenters/GameRoomPresenter.vue'
import GameRoomList from './components/views/GameRoomList.vue'
import '@/style.css'

export default {
  name: 'App',
  components: {
    ActivityList,
    LogIn,
    SignUp,
    UserProfile,
    CreateGameRoomPresenter,
    GameRoomPresenter,
    GameRoomList
  }
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
