<script>
import axios from 'axios';
import { env } from './../../env.js';

export default {
  data() {
    return {
      movie: {},
      video: {}
    }
  },
  mounted() {
    this.getMovie();
    this.getVideos();
  },
  methods: {
    getMovie() {
      axios
      .get(
        `${env.baseUrl}/3/movie/${this.$route.params.id}`,
        {
          params: {
            api_key: env.apiKey,
          }
        }
      )
      .then((res) => {
        this.movie = res.data;
      })
    },
    getVideos() {
      axios
      .get(
        `${env.baseUrl}/3/movie/${this.$route.params.id}/videos`,
        {
          params: {
            api_key: env.apiKey,
          }
        }
      )
      .then((res) => {
        this.video = res.data.results[0];
      })
    }
  }
}
</script>

<template>
  <section class="movie">
    <div class="movie__wrapper">
      <h2 class="movie__title">{{movie.title}}</h2>
      <div class="movie__container">
        <div class="movie__card">
          <div class="movie__card-rating"
            :class="{ red: movie.vote_average <5, yellow: movie.vote_average > 5, green: movie.vote_average > 7 }">
            {{movie.vote_average && movie.vote_average.toFixed(1)}}
          </div>
            <img class="movie__card-img"
              v-if="movie.poster_path"
              v-bind:src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              alt="poster">
        </div>
        <div class="movie__info">
          <p class="movie__info-date"><span class="info-yellow">Release date: </span>{{movie.release_date}}</p>
          <p class="movie__info-country"><span class="info-yellow">Country: </span>
            <span v-for="(country, index) in movie.production_countries">{{country.name}}<span v-if="index < movie.production_countries.length - 1">, </span>
            </span>
          </p>
          <p class="movie__info-company"><span class="info-yellow">Production: </span>
            <span v-for="(company, index) in movie.production_companies">{{company.name}}<span v-if="index < movie.production_companies.length - 1">, </span>
            </span>
          </p>
          <p class="movie__info-genre"><span class="info-yellow">Genres: </span>
            <span v-for="(genre, index) in movie.genres">{{genre.name}}<span v-if="index < movie.genres.length - 1">, </span>
            </span>
          </p>
          <p class="movie__info-time"><span class="info-yellow">Running time: </span>{{movie.runtime}} min</p>
          <p class="movie__info-overview">{{movie.overview}}</p>
        </div>
      </div>
      <div class="movie__trailer" v-if="video.key">
          <iframe v-bind:src="`https://www.youtube.com/embed/${video.key}`"></iframe>
      </div>
    </div>
  </section>
</template>

<style>
    @import './../../public/src/css/movie.min.css';
</style>