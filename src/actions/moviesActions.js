import useInitialStateMovie from "../hooks/useInitialStateMovie";
import { getMovies, loading, error } from "./types/moviesTypes";

export const getAll = () => async (dispatch) => {
  dispatch({
    type: loading,
  });
  try {
    const response = "Hola";
    console.log(response)
    dispatch({
      type: getMovies,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: err.message,
    });
  }
};
