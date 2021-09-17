import {
  movies,
  loading,
  error,
  setFavorite,
  removeFavorite,
  getSearch,
  setMovieData,
  popularMovies,
  nowPlayingMovies,
  upcomingMovies,
  horrorMovies,
  actionMovies,
  adventureMovies,
  animationMovies,
  fantasyMovies,
} from "../actions/types/moviesTypes";

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
    /* get API */
    case movies:
      return { ...state, movies: action.payload, loading: false };

    case popularMovies:
      return {
        ...state,
        movies: { ...state.movies, popularMovies: action.payload },
        loading: false,
      };

    case nowPlayingMovies:
      return {
        ...state,
        movies: { ...state.movies, nowPlayingMovies: action.payload },
        loading: false,
      };

    case upcomingMovies:
      return {
        ...state,
        movies: { ...state.movies, upcomingMovies: action.payload },
        loading: false,
      };

    case horrorMovies:
      return {
        ...state,
        movies: { ...state.movies, horrorMovies: action.payload },
        loading: false,
      };

    case actionMovies:
      return {
        ...state,
        movies: { ...state.movies, actionMovies: action.payload },
        loading: false,
      };

    case adventureMovies:
      return {
        ...state,
        movies: { ...state.movies, adventureMovies: action.payload },
        loading: false,
      };

    case animationMovies:
      return {
        ...state,
        movies: { ...state.movies, animationMovies: action.payload },
        loading: false,
      };

    case fantasyMovies:
      return {
        ...state,
        movies: { ...state.movies, fantasyMovies: action.payload },
        loading: false,
      };

    /* --- */
    case loading:
      return { ...state, loading: true };

    case error:
      return { ...state, error: action.payload, loading: false };

    case setFavorite:
      const exist = state.myList.find((item) => item.id === action.payload.id);
      if (exist) return { ...state };
      return {
        myList: [...state.myList, action.payload],
      };

    case removeFavorite:
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };

    case getSearch:
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
