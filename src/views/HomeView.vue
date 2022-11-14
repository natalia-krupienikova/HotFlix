<script>
import axios from 'axios';
import { env } from './../../env.js';

export default {
  data() {
    return {
      searchInput: '',
      genres: [],
      movies: [],
      searchedMovies: []
    }
  },
  mounted() {
    this.getGenre();
    this.getMovies();
  },
  methods: {
    searchMovie() {
      axios
      .get(
        `${env.baseUrl}/3/search/movie`,
        {
          params: {
            api_key: env.apiKey,
            query: this.searchInput,
          }
        }
      ).then((res) => {
        this.searchedMovies = res.data.results;
        window.scrollTo({
          top: 900,
          left: 0,
          behavior: 'smooth'
        });
      });
    },
    preventDefault(event) {
      event.preventDefault();
      this.searchMovie();
    },
    getGenre() {
      axios
      .get(
        `${env.baseUrl}/3/genre/movie/list`,
        {
          params: {
            api_key: env.apiKey,
          }
        }
      )
      .then((res) => this.genres = res.data.genres);
    },
    getMovies() {
      axios
      .get(
        `${env.baseUrl}/3/movie/now_playing`,
        {
          params: {
            api_key: env.apiKey,
            language: 'en-US',
            page: 1
          }
        }
      )
      .then((res) => {
        this.movies = res.data.results.slice(0, 12);
      })
    },
    filterGenre(genresArray) {
      let result = '';
      for (let genre of genresArray) {
        let usedGenres = this.genres.filter(
          (el) => {
            return genre === el.id;
          }
        );
        result = result + usedGenres[0].name;
        let index = genresArray.indexOf(genre);

        if (index !== genresArray.length - 1) {
          result = result + ', ';
        }
      }
      return result;
    },
    navigateTo(movie) {
      this.$router.push(`/movie/${movie.id}`);
    }
  }
}
</script>

<template>
  <section class="home">
    <form class="home__search" v-on:submit.prevent="preventDefault($event)">
      <input class="home__search-input" v-model="searchInput" type="text" name="" placeholder="Search..." required>
      <button class="home__button" type="button" v-on:click="searchMovie">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="home__button-icon"/>
      </button>
    </form>
  </section>
  <section class="searched-movies section" v-if="searchedMovies.length">
    <div class="section__container">
      <h2 class="section__title">SEARCH</h2>
    </div>
    <div class="section__wrapper">
      <div class="section__card" v-for="movie in searchedMovies" v-on:click="navigateTo(movie)">
        <div class="section__card-rating"
            :class="{ red: movie.vote_average <5, yellow: movie.vote_average > 5, green: movie.vote_average > 7 }">
            {{movie.vote_average}}
        </div>
        <img class="section__card-img"
          v-if="movie.poster_path"
          v-bind:src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="poster">
        <img class="section__card-img"
          v-if="!movie.poster_path"
          v-bind:src="`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`" alt="poster">
        <h3 class="section__card-title">{{movie.title}}</h3>
        <p class="section__card-genre">{{this.genres.length && filterGenre(movie.genre_ids)}}</p>
      </div>
    </div>
  </section>
  <section class="now-playing section">
    <div class="section__container">
      <h2 class="section__title">NEW ITEMS <span class="light-title">OF THIS SEASON</span></h2>
    </div>
    <div class="section__wrapper">
      <div class="section__card" v-for="movie in movies" v-on:click="navigateTo(movie)">
        <div class="section__card-rating"
            :class="{ red: movie.vote_average <5, yellow: movie.vote_average > 5, green: movie.vote_average > 7 }">
            {{movie.vote_average}}
        </div>
        <img class="section__card-img"
          v-if="movie.poster_path"
          v-bind:src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="poster">
        <h3 class="section__card-title">{{movie.title}}</h3>
        <p class="section__card-genre">{{this.genres.length && filterGenre(movie.genre_ids)}}</p>
      </div>
    </div>
  </section>
</template>

<style>
    @import './../../public/src/css/home.min.css';
</style>