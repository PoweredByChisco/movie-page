import useInitialStateMovie from "../hooks/useInitialStateMovie";
import { getMovies, loading, error, setMovieData } from "./types/moviesTypes";
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

export const setData = (payload) => async (dispatch) => {
  dispatch({
    type: setMovieData,
    payload: payload
  })
}