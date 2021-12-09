<template>
  <div>
    <ActivityList />
    <LogIn />
    <UserProfile/>
  </div>
</template>
<script>
import ActivityList from './components/views/ActivityList.vue'
import LogIn from './components/views/LogIn.vue'
import UserProfile from './components/views/UserProfile.vue'
import '@/style.css'

export default {
  name: 'App',
  components: {
    ActivityList,
    LogIn,
    UserProfile
  }
}
</script>

<style>
</style>
