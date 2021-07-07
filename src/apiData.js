const apiKey = "b89fc45c2067cbd33560270639722eae";
const type = 0; /* Definir aqui para variar en la solicitud de la api entre movie o serie */

/* GetAPI */

/* async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
  const response = await fetch(url);
  const rawData = await response.json();
  return rawData.results;
} */

const apiData = {
  movies: {
    async getMovie(id) {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
      const response = await fetch(url);
      const rawData = await response.json();
      return rawData;
    },

    async getNMovies(id) {
      const ids = id;
      const movies = [];

      for (id of ids) {
        const movie = await this.getMovie(id);
        movies.push(movie);
      }
      return movies;
    },

    async getPopularMovies() {
      const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
      const response = await fetch(url);
      const rawData = await response.json();
      return rawData.results;
    },

    async getNPopularMoviesIds(n = 5) {
      try {
        const popularMovies = await this.getPopularMovies();
        const ids = popularMovies.slice(0, n).map((movie) => movie.id);
        return ids;
      } catch (error) {}
    },

    async getUpcomingMovies() {
      const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
      const response = await fetch(url);
      const rawData = await response.json();
      return rawData.results;
    },

    async getNUpcomingMoviesIds(n = 5) {
      try {
        const upcomingMovies = await this.getUpcomingMovies();
        const ids = upcomingMovies.slice(0, n).map((movie) => movie.id);
        return ids;
      } catch (error) {}
    },

    async getNowPlayingMovies() {
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
      const response = await fetch(url);
      const rawData = await response.json();
      return rawData.results;
    },

    async getNNowPlayingMoviesIds(n = 5) {
      try {
        const upcomingMovies = await this.getUpcomingMovies();
        const ids = upcomingMovies.slice(0, n).map((movie) => movie.id);
        return ids;
      } catch (error) {}
    },
  },
};

export default apiData;
/* Me estoy repitiendo mucho */