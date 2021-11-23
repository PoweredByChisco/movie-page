import {
  movies,
  loading,
  error,
  setMovieData,
  completeLoadingMovies,
  favoriteMovies,
  removeFavoriteMovies,
  searchMovies,
} from "../actions/types/moviesTypes";

const INITIAL_STATE = {
  movies: {},
  loading: false,
  error: "",
  myList: [],
  searchResult: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /* get API */
    case movies:
      return { ...state, movies: { ...state.movies, ...action.payload } };

    case completeLoadingMovies:
      return { ...state, loading: false };

    /* --- */
    case loading:
      return { ...state, loading: true };

    case error:
      return { ...state, error: action.payload, loading: false };

    case favoriteMovies:
      const exist = state.myList.find((item) => item.id === action.payload.id);
      if (exist) return { ...state };
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };

    case removeFavoriteMovies:
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };

    case searchMovies:
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

    case setMovieData:
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
};
