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
  completeLoadingMovies,
} from "./types/moviesTypes";
import apiData from "../apiData";

/* Get API */

export const getAllMovies = () => async (dispatch) => {
  const miniState = []

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
    console.log("Se cargo popular")
    dispatch({
      type: movies,
      payload: {popular, mostPopular},
    });

    const nowPlaying = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.getList("movie", "now_playing", 1)
    );
    dispatch({
      type: movies,
      payload: {nowPlaying},
    });

    const upcoming = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.getList("movie", "upcoming", 1)
    );
    dispatch({
      type: movies,
      payload: {upcoming},
    });

    const horror = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 27)
    );
    dispatch({
      type: movies,
      payload: {horror},
    });

    const adventure = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 12)
    );
    dispatch({
      type: movies,
      payload: {adventure},
    });

    const action = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 28)
    );
    dispatch({
      type: movies,
      payload: {action},
    });

    const animation = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 16)
    );
    dispatch({
      type: movies,
      payload: {animation},
    });

    const fantasy = await apiData.imdb.getDataArray(
      10,
      "movie",
      apiData.imdb.genres.getList("movie", "popularity.desc", 1, 14)
    );
    dispatch({
      type: movies,
      payload: {fantasy},
    });

    dispatch({
      type: completeLoadingMovies
    })
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
