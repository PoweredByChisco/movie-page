import { types } from "../actions/types/moviesTypes";

const INITIAL_STATE = {
  movies: [],
  loading: false,
  error: "",
  myList: [],
  searchResult: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.getMovies:
      return { ...state, movies: action.payload, loading: false };

    case types.loading: {
      return { ...state, loading: true };
    }

    case types.error: {
      return { ...state, error: action.payload, loading: false };
    }

    case types.setFavorite:
      const exist = state.myList.find((item) => item.id === action.payload.id);
      if (exist) return { ...state };
      return {
        myList: [...state.myList, action.payload],
      };

    case types.removeFavorite:
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };

    case types.getSearch:
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
