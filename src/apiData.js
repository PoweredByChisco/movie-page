const apiKey = "b89fc45c2067cbd33560270639722eae";
const imageUrl = "https://image.tmdb.org/t/p/w500/";
const language = "en-US"
const region = "US"

/* GetAPI */

const apiData = {
  imdb: {
    async getDetails(type, id) {
      const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=${language}`;
      const response = await fetch(url);
      const rawData = await response.json();
      return rawData;
    },

    async getMovieDetails(id) {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=${language}`;
      const response = await fetch(url);
      const rawData = await response.json();
      return rawData;
    },

    async getList(type, list, page) {
      const url = `https://api.themoviedb.org/3/${type}/${list}?api_key=${apiKey}&language=${language}&page=${page}&region=${region}`;
      const response = await fetch(url);
      const rawData = await response.json();
      return rawData;
    },

    async getDataDiscover({
      type,
      language = "es-MX",
      sort = "popularity.desc",
      page = 1,
      cast,
      people,
      companies,
      genres,
      providers,
    }) {
      const url = `https://api.themoviedb.org/3/discover/${type}/?api_key=${apiKey}&language=${language}&sort_by=${sort}&include_adult=true&include_video=true&page=${page}&with_cast=${cast}&with_people=${people}&with_companies=${companies}&with_genres=${genres}&with_watch_providers=${providers}`;
      const response = await fetch(url);
      const raw = await response.json();
      return raw;
    },

    async getDataList(n = 5, type, list, page) {
      try {
        const Movies = await this.getList(type, list, page);
        const ids = Movies.results.slice(0, n).map((movie) => movie.id);
        const movies = [];
        for (let id of ids) {
          const movie = await this.getDetails(type, id);
          movies.push(movie);
        }
        return movies;
      } catch (error) {
        console.log(error.message);
      }
    },

    async getImageForID(id) {
      const url = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}`;
      const response = await fetch(url);
      const rawData = await response.json();
      const data = rawData.backdrops;
      const imageGenreUrl = data[0].file_path;
      const image = imageUrl + imageGenreUrl;
      return image;
    },
  },
};

export default apiData;
