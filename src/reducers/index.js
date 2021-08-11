import { actions } from "../actions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setMovieData:
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
