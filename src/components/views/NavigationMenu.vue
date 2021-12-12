<template>
  <header :class="{ 'scrolled-nav': scrolledPosition }">
      <nav>
            <div class="brancing">

            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link" :to="{ name: 'Home' }">Game room list</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">Sign in</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">Sign up</router-link></li>
            </ul>

            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="fa fa-bolt" :class="{'icon-active': mobileNav}"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><router-link class="link" :to="{ name: 'Home' }">Game room list</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">Sign in</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">Sign up</router-link></li>
                </ul>
            </transition>
      </nav>
  </header>
</template>

<script>
export default { name: 'navigationMenu', data () { return { scrollPosition: null, mobile: true, mobileNav: null, windowWidth: null } }, created () { window.addEventListener('resize', this.checkScreen); this.checkScreen() }, methods: { toggleMobileNav () { this.mobileNav = !this.mobileNav }, checkScreen () { this.windowWidth = window.innerWidth; if (this.windowWidth <= 750) { this.mobile = true } this.mobile = false; this.mobileNav = false } } }
</script>

<style scoped>
header {
    background-color: rgba(0,0,0,0.8);
    z-index: 99;
    width: 100%;
    /* position: fixed; */
    transition: 0.5s ease all;
    color: #fff;
}

nav {
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 12px 0;
        transition: 0.5s ease all;
        width: 90%;
        margin: 0 auto;
        @media(min-width: 1140px) {
            max-width: 1140px;
        }
}
ul, .link{
        font-weight: 500;
        color: #fff;
        list-style: none;
        text-decoration: none;
}

li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
}

.link {
    font-size: 14px;
    transition: 0.5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
}

.link:hover {
    color: #00afea;
    border-color: #00afea;
}

.branding {
    display: flex;
    align-items: center;
}

.navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
}

.icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;
}

.dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: #fff;
    top: 0;
    left: 0;
}

li,
.dropdown-nav {
    margin-left: 0;
}

/* li,.dropdown-nav, .link {
    color: #000;
} */

i {
    cursor: pointer;
    font-size: 24px;
    transition: 0.8s ease all   ;
}
</style>
