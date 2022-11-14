<script>
export default {
  data() {
    return {}
  },
}
</script>

<template>
  <section class="about-bg">
    <h1 class="about-bg__title">About Us</h1>
  </section>
  <section class="about">
    <div class="about__container">
      <h2 class="about__subtitle">HotFlix – Best Place for Movies</h2>
      <p class="about__text">It is a long established fact that a reader will be distracted by 
        the readable content of a page when looking at its layout. The point of using Lorem Ipsum 
        is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
      <p class="about__text">'Content here, content here', making it look like readable English. 
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 
        'lorem ipsum' will uncover many web sites still in their infancy. 
        Various versions have evolved over the years, sometimes by accident, 
        sometimes on purpose (injected humour and the like).</p>
    </div>
    <div class="about__benefits">
      <div class="about__benefits-item">
        <font-awesome-icon icon="fa-solid fa-tv" class="about__benefits-icon"/>
        <div class="about__benefits-container">
          <h3 class="about__benefits-title">Ultra HD</h3>
          <p class="about__benefits-text">If you are going to use a passage of Lorem Ipsum,
          you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
        </div>
      </div>
      <div class="about__benefits-item">
        <font-awesome-icon icon="fa-solid fa-bell" class="about__benefits-icon"/>
        <div class="about__benefits-container">
          <h3 class="about__benefits-title">Notifications</h3>
          <p class="about__benefits-text">Various versions have evolved over the years, sometimes by accident, 
          sometimes on purpose.</p>
        </div>
      </div>
      <div class="about__benefits-item">
        <font-awesome-icon icon="fa-solid fa-film" class="about__benefits-icon"/>
        <div class="about__benefits-container">
          <h3 class="about__benefits-title">Film</h3>
          <p class="about__benefits-text">All the Lorem Ipsum generators on the Internet tend to repeat predefined 
          chunks as necessary, making this the first.</p>
        </div>
      </div>
      <div class="about__benefits-item">
        <font-awesome-icon icon="fa-solid fa-rocket" class="about__benefits-icon"/>
        <div class="about__benefits-container">
          <h3 class="about__benefits-title">Rocket</h3>
          <p class="about__benefits-text">It to make a type specimen book. It has survived not only five centuries, 
          but also the leap into electronic typesetting.</p>
        </div>
      </div>
      <div class="about__benefits-item">
        <font-awesome-icon icon="fa-solid fa-trophy" class="about__benefits-icon"/>
        <div class="about__benefits-container">
          <h3 class="about__benefits-title">Awards</h3>
          <p class="about__benefits-text">It to make a type specimen book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, remaining.</p>
        </div>
      </div>
      <div class="about__benefits-item">
        <font-awesome-icon icon="fa-solid fa-globe" class="about__benefits-icon"/>
        <div class="about__benefits-container">
          <h3 class="about__benefits-title">Multi Language Subtitles</h3>
          <p class="about__benefits-text">Various versions have evolved over the years, 
          sometimes by accident, sometimes on purpose.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
    @import './../../public/src/css/about.min.css';
</style>
