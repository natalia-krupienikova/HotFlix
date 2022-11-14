<script>
import axios from 'axios';
import { env } from './../../env.js';

export default {
  data() {
    return {
      allMovies: [],
      genres: [],
      ratings: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      years: [],
      filter: {
        page: 1,
        year: '',
        with_genres: '',
        'vote_average.gte': 0
      },
    }
  },
  mounted() {
    let startYear = 1930;
    let counter = new Date().getFullYear();;
    while (counter > startYear) {
      this.years.push(counter);
      counter--;
    }
    this.getAllMovies();
    this.getGenre();
  },
  methods: {
    getAllMovies() {
      axios
      .get(
        `${env.baseUrl}/3/discover/movie`,
        {
          params: {
            api_key: env.apiKey,
            ...this.filter
          }
        }
      )
      .then((res) =>{
        this.allMovies = res.data.results;
      });
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

    applyFilters() {
      this.getAllMovies();
    },

    prevPage() {
      if (this.filter.page > 0) {
        this.filter.page = this.filter.page - 1;
      }

      window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });

      this.getAllMovies();
    },

    nextPage() {
      this.filter.page = this.filter.page + 1;
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
      this.getAllMovies();
    },
    navigateTo(movie) {
      this.$router.push(`/movie/${movie.id}`);
    }
  }
}
</script>

<template>
  <section class="catalog">
    <div class="catalog__container">
      <select v-model="filter.with_genres" class="catalog__filter">
        <option value="">All genres</option>
        <option v-bind:value="genre.id" v-for="genre in genres">{{genre.name}}</option>
      </select>
      <select v-model="filter['vote_average.gte']" class="catalog__filter">
        <option value="0">All ratings</option>
        <option v-bind:value="rating" v-for="rating in ratings">{{rating}}+</option>
      </select>
      <select v-model="filter.year" class="catalog__filter">
        <option value="">All years</option>
        <option v-bind:value="year" v-for="year in years">{{year}}</option>
      </select>
      <button v-on:click="applyFilters" class="catalog__filter apply">Apply</button>
    </div>
    <div class="catalog__wrapper">
      <div class="catalog__card" v-for="movie in allMovies" v-on:click="navigateTo(movie)">
        <div class="catalog__card-rating"
             :class="{ red: movie.vote_average <5, yellow: movie.vote_average > 5, green: movie.vote_average > 7 }">
             {{movie.vote_average}}
        </div>
        <img class="catalog__card-img" 
          v-if="movie.poster_path"
          v-bind:src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="poster">
          <img class="catalog__card-img"
          v-if="!movie.poster_path"
          v-bind:src="`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`" alt="poster">
        <h3 class="catalog__card-title">{{movie.title}}</h3>
        <p class="catalog__card-genre">{{this.genres.length && filterGenre(movie.genre_ids)}}</p>
      </div>
    </div>
    <div class="catalog__pagination">
      <button v-on:click="prevPage" class="catalog__arrow"><font-awesome-icon icon="fa-solid fa-square-caret-left" /></button>
      <div class="catalog__page">{{filter.page}}</div>
      <button v-on:click="nextPage" class="catalog__arrow"><font-awesome-icon icon="fa-solid fa-square-caret-right" /></button>
    </div>
  </section>
</template>

<style>
  @import './../../public/src/css/catalog.min.css';
</style>