<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<template>
    <footer class="footer">
        <div class="footer__container">
            <img class="footer__logo" src="./../../public/src/img/logo.svg" alt="logo">
            <p class="footer__copyright">© HOTFLIX, 2022 <br>Natalia Krupienikova</p>
        </div>
        <div class="footer__networks">
            <a href="https://www.instagram.com" class="footer__link">
                <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>
            <a href="https://www.facebook.com" class="footer__link">
                <font-awesome-icon icon="fa-brands fa-facebook" />
            </a>
            <a href="https://twitter.com" class="footer__link">
                <font-awesome-icon icon="fa-brands fa-twitter" />
            </a>
        </div>
    </footer>
</template>

<style>
    @import './../../public/src/css/footer.min.css';
</style>