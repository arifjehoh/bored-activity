<template>
  <div>
<<<<<<< Updated upstream
=======
    <NaviationMenu />
    <router-view />
>>>>>>> Stashed changes
    <ActivityList />
    <LogIn />
    <SignUp/>
    <UserProfile/>
  </div>
</template>
<script>
import ActivityList from './components/views/ActivityList.vue'
import NavigationMenu from './components/views/NavigationMenu.vue'
import LogIn from './components/views/LogIn.vue'
import SignUp from './components/views/SignUp.vue'
import UserProfile from './components/views/UserProfile.vue'
import '@/style.css'
export default {
  name: 'App',
  components: {
    ActivityList,
    LogIn,
    SignUp,
<<<<<<< Updated upstream
    UserProfile
=======
    UserProfile,
    NavigationMenu
>>>>>>> Stashed changes
  }
}
</script>

<style>
</style>