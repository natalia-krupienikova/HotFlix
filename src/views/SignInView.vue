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
    <section class="sign-in">
        <form class="sign-in__form" v-on:submit="validateForm" action="javascript:void(0);">
        <h2 class="sign-in__form-subtitle">Sign in</h2>
        <div class="sign-in__form-user">
          <input class="sign-in__form-input" type="text" name="" placeholder="Name"  v-model="name" required>
          <input class="sign-in__form-input" type="text" name="" placeholder="Email"  v-model="email" required>
        </div>
        <div class="sign-in__form-errors" v-if="errors.length">
            <p v-for="error in errors">{{error}}</p>
        </div>
        <button class="sign-in__form-btn">SIGN IN</button>
      </form>
    </section>
</template>

<style>
    @import './../../public/src/css/signin.min.css';
</style>