import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './../public/src/css/normalize.min.css';
import './../public/src/css/base.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faSquareCaretLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faTv);
library.add(faBell);
library.add(faFilm);
library.add(faRocket);
library.add(faTrophy);
library.add(faGlobe);
library.add(faMagnifyingGlass);
library.add(faTwitter);
library.add(faFacebook);
library.add(faInstagram);
library.add(faSquareCaretRight);
library.add(faSquareCaretLeft);

const app = createApp(App);

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
