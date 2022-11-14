<script>
  import { RouterView } from 'vue-router';
  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue';

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style>
  @import './../public/src/css/base.css';
</style>
