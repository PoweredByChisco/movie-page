import useInitialStateMovie from "../hooks/useInitialStateMovie";
import { types } from "./types/moviesTypes";

export const getAll = () => async (dispatch) => {
  dispatch({
    type: types.loading,
  });
  try {
    const response = "Hola";
    console.log(response)
    dispatch({
      type: types.getMovies,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: types.error,
      payload: err.message,
    });
  }
};
