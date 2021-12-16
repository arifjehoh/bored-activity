<template>
  <div id='navbar'>
   <router-link id= 'routerLink' to='/rooms'> <span>Game list</span></router-link>
    <router-link id= 'routerLink' v-if='this.$store.state.user' to='/profile'><span>Profile</span></router-link>
     <router-link id= 'routerLink' v-if='!this.$store.state.user' to='/sign-in'><span>Sign in</span></router-link>
  </div>
</template>

<script>
export default {
  name: 'NavigationPresenter'
}
</script>

<style scoped>
#routerLink {
       text-decoration: none;
       color: black;
       font-size: 20px;
       margin  : 20px;
       align-items: right;
       margin-bottom: 50px;

}
#routerLink :hover{
  color: rgb(33, 209, 248);
}
#navbar{
  position: fixed;
  position: right;
}
template{
  position: relative;
}
</style>
