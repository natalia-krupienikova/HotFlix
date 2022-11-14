<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      errors: []
    }
  },
  methods: {
    validateForm() {
      let emailRegexp = /^\S+@\S+\.\S+$/;
      let shortName = 'Name is too short';
      let validEmail = 'Not valid email';

      if (this.name.length < 4) {
        if (this.errors.indexOf(shortName) === -1) {
          this.errors.push(shortName);
        }
      } else {
        let index = this.errors.indexOf(shortName);
        if (index > -1) {
          this.errors.splice(index, 1);
        }
      }

      if (!emailRegexp.test(this.email)) {
        if (this.errors.indexOf(validEmail) === -1) {
          this.errors.push(validEmail);
        }
      } else {
        let index = this.errors.indexOf(validEmail);
        if (index > -1) {
          this.errors.splice(index, 1);
        }
      }
    }
  }
}
</script>

<template>
  <section class="contacts-bg">
    <h1 class="contacts-bg__title">Contacts</h1>
  </section>
  <section class="contacts">
    <div class="contacts__container-left">
      <h2 class="contacts__subtitle">Contact Form</h2>
      <form class="contacts__form" v-on:submit="validateForm" action="javascript:void(0);">
        <div class="contacts__form-user">
          <input class="contacts__form-input" type="text" name="" v-model="name" placeholder="Name" required>
          <input class="contacts__form-input" type="text" name="" v-model="email" placeholder="Email" required>
        </div>
        <input class="contacts__form-input" type="text" name="" placeholder="Subject" required>
        <textarea class="contacts__form-textarea" type="text" name="" placeholder="Type your message..." required></textarea>
        <div class="contacts__form-errors" v-if="errors.length">
            <p v-for="error in errors">{{error}}</p>
        </div>
        <div class="contacts__form-center">
          <button class="contacts__form-btn">SEND</button>
        </div>
      </form>
    </div>
    <div class="contacts__container-right">
      <h2 class="contacts__subtitle">Info</h2>
      <p class="contacts__text">
        It is a long fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.
      </p>
      <p class="contacts__text">+1 234 567 890</p>
      <p class="contacts__text">support@hotflix.template</p>
      <div class="contacts__networks">
        <a href="https://www.instagram.com" class="contacts__link">
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
        <a href="https://www.facebook.com" class="contacts__link">
          <font-awesome-icon icon="fa-brands fa-facebook" />
        </a>
        <a href="https://twitter.com" class="contacts__link">
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </a>
      </div>
    </div>
  </section>
</template>

<style>
    @import './../../public/src/css/contacts.min.css';
</style>