<script>
  import { RouterLink } from 'vue-router';

export default {
  el: '#sidemenu',
  data() {
    return {
      navOpen: false,
    }
  },
  methods: {
    navigateToHome() {
      this.$router.push("/");
      this.navOpen = false;
    },
    navigateToCatalog() {
      this.$router.push("/catalog");
      this.navOpen = false;
    },
    navigateToAbout() {
      this.$router.push("/about");
      this.navOpen = false;
    },
    navigateToContacts() {
      this.$router.push("/contacts");
      this.navOpen = false;
    }
  }
}
</script>

<template>
    <header class="header">
        <RouterLink to="/">
          <img class="header__logo" src="./../../public/src/img/logo.svg" alt="logo">
        </RouterLink>
        <nav class="header__navigation">
            <RouterLink class="header__navigation-link" to="/">Home</RouterLink>
            <RouterLink class="header__navigation-link" to="/catalog">Catalog</RouterLink>
            <RouterLink class="header__navigation-link" to="/about">About</RouterLink>
            <RouterLink class="header__navigation-link" to="/contacts">Contacts</RouterLink>
        </nav>
        <div id="sidemenu">
          <button class="sidemenu__btn" v-on:click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
              <span class="top"></span>
              <span class="mid"></span>
              <span class="bottom"></span>
            </button>
          <transition name="translateX">
            <nav v-show="navOpen">
              <div class="sidemenu__wrapper">
                <ul class="sidemenu__list">
                  <li class="sidemenu__item"><span class="choice" v-on:click="navigateToHome()" to="/">Home</span></li>
                  <li class="sidemenu__item"><span class="choice" v-on:click="navigateToCatalog()" to="/catalog">Catalog</span></li>
                  <li class="sidemenu__item"><span class="choice" v-on:click="navigateToAbout()" to="/about">About</span></li>
                  <li class="sidemenu__item"><span class="choice" v-on:click="navigateToContacts()" to="/contacts">Contacts</span></li>
                </ul>
              </div>
            </nav>
          </transition>
        </div>
        <RouterLink to="/signin">
          <button class="header__button">SIGN IN</button>
        </RouterLink>
    </header>
</template>

<style>
    @import './../../public/src/css/header.min.css';
</style>