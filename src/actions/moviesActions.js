import {
  movies,
  loading,
  error,
  setMovieData,
  popularMovies,
  nowPlayingMovies,
  upcomingMovies,
  horrorMovies,
  actionMovies,
  adventureMovies,
  animationMovies,
  fantasyMovies,
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
    const mostPopular = popular[0]

    dispatch({
      type: movies,
      payload: {mostPopular},
    });

    const nowPlaying = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.getList("movie", "now_playing", 1)
    );

    const upcoming = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.getList("movie", "upcoming", 1)
    );

    const horror = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 27)
    );

    const adventure = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 12)
    );

    const action = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 28)
    );

    const animation = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 16)
    );

    const fantasy = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 14)
    );

    dispatch({
      type: movies,
      payload: { popular, nowPlaying, upcoming, horror, adventure, action, animation, fantasy },
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: err.message,
    });
  }
};

export const getPopularMovies = () => async (dispatch) => {
  dispatch({
    type: loading,
  });
  try {
    const response = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.getList("movie", "popular", 1)
    );
    dispatch({
      type: popularMovies,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: err.message,
    });
  }
};

export const getNowPlayingMovies = () => async (dispatch) => {
  dispatch({
    type: loading,
  });
  try {
    const response = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.getList("movie", "now_playing", 1)
    );
    dispatch({
      type: nowPlayingMovies,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: err.message,
    });
  }
};

export const getUpcomingMovies = () => async (dispatch) => {
  dispatch({
    type: loading,
  });
  try {
    const response = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.getList("movie", "upcoming", 1)
    );
    dispatch({
      type: upcomingMovies,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: err.message,
    });
  }
};

export const getHorrorMovies = () => async (dispatch) => {
  dispatch({
    type: loading,
  });
  try {
    const response = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 27)
    );
    dispatch({
      type: horrorMovies,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: err.message,
    });
  }
};

export const getAdventureMovies = () => async (dispatch) => {
  dispatch({
    type: loading,
  });
  try {
    const response = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 12)
    );
    dispatch({
      type: adventureMovies,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: err.message,
    });
  }
};

export const getActionMovies = () => async (dispatch) => {
  dispatch({
    type: loading,
  });
  try {
    const response = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 28)
    );
    dispatch({
      type: actionMovies,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: err.message,
    });
  }
};

export const getAnimationMovies = () => async (dispatch) => {
  dispatch({
    type: loading,
  });
  try {
    const response = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 16)
    );
    dispatch({
      type: animationMovies,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: err.message,
    });
  }
};

export const getFantasyMovies = () => async (dispatch) => {
  dispatch({
    type: loading,
  });
  try {
    const response = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 14)
    );
    dispatch({
      type: fantasyMovies,
      payload: response,
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
