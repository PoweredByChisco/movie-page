import {
  getMovies,
  loading,
  error,
  setMovieData,
  getPopularMovies,
  getNowPlayingMovies,
} from "./types/moviesTypes";
import apiData from "../apiData";

export const getAll = () => async (dispatch) => {
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
      type: getMovies,
      payload: [response],
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: err.message,
    });
  }
};

export const getPopular = () => async (dispatch) => {
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
      type: getPopularMovies,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: err.message,
    });
  }
};

export const getNowPlaying = () => async (dispatch) => {
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
      type: getNowPlayingMovies,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: err.message,
    });
  }
};

export const setData = (payload) => async (dispatch) => {
  dispatch({
    type: setMovieData,
    payload: payload,
  });
};
