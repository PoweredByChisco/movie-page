import { actions } from "../actions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setMovieData:
      return {
        ...state,
        movies: action.payload,
      };

    case actions.setFavorite:
      const exist = state.myList.find((item) => item.id === action.payload.id);
      if (exist) return { ...state };
      return {
        myList: [...state.myList, action.payload]
      };

    default:
      return state;
  }
};

export default reducer;
