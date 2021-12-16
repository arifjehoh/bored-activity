<template>
  <div>
    <router-link to='/rooms' class="button">Go to Home  </router-link>
    <router-link v-if='this.$store.state.user' to='/profile' class="button">Profile</router-link>
    <router-link v-if='!this.$store.state.user' to='/sign-in' class="button1">Sign in</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavigationPresenter'
}
</script>

<style>
.button {
  color: black;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  margin: 8px ;
}
.button:hover {background-color: #e7e7e7;}

.button1 {
  color: black;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  margin: 8px ;
}
.button1:hover {background-color: #e7e7e7;}
</style>
