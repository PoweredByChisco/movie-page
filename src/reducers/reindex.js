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
        myList: [...state.myList, action.payload],
      };

    case actions.removeFavorite:
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };

    case actions.getSearch:
      if (action.payload === "") {
        return {
          ...state,
          searchResult: [],
        };
      }

      return {
        ...state,
        searchResult: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
