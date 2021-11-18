import {
  movies,
  loading,
  error,
  setMovieData,
  completeLoadingMovies,
  favoriteMovies,
  removeFavoriteMovies,
  searchMovies
} from "./types/moviesTypes";
import apiData from "../apiData";

/* Get API */

export const getAllMovies = () => async (dispatch) => {
  dispatch({
    type: loading,
  });
  try {
    const popular = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.getList("movie", "popular", 1)
    );
    const mostPopular = popular[0];
    dispatch({
      type: movies,
      payload: { popular, mostPopular },
    });

    const nowPlaying = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.getList("movie", "now_playing", 1)
    );
    dispatch({
      type: movies,
      payload: { nowPlaying },
    });

    const upcoming = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.getList("movie", "upcoming", 1)
    );
    dispatch({
      type: movies,
      payload: { upcoming },
    });

    const horror = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 27)
    );
    dispatch({
      type: movies,
      payload: { horror },
    });

    const adventure = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 12)
    );
    dispatch({
      type: movies,
      payload: { adventure },
    });

    const action = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 28)
    );
    dispatch({
      type: movies,
      payload: { action },
    });

    const animation = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 16)
    );
    dispatch({
      type: movies,
      payload: { animation },
    });

    const fantasy = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 14)
    );
    dispatch({
      type: movies,
      payload: { fantasy },
    });

    dispatch({
      type: completeLoadingMovies,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: err.message,
    });
  }
};

/* ---- */

export const setData = (payload) => async (dispatch) => {
  dispatch({
    type: setMovieData,
    payload: payload,
  });
};

export const setFavorite = (payload) => ({
  type: favoriteMovies,
  payload,
});

export const setRemoveFavorite = (payload) => ({
  type: removeFavoriteMovies,
  payload,
});

export const getSearch = (payload) => ({
  type: searchMovies,
  payload,
})