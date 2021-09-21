import {
  series,
  loading,
  error,
  setSeriesData,
  completeLoadingSeries,
  favoriteSeries,
  removeFavoriteSeries,
  searchSeries,
} from "../actions/types/tvTypes";

const INITIAL_STATE = {
  series: {},
  loading: false,
  error: "",
  myList: [],
  searchResult: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /* get API */
    case series:
      return { ...state, series: { ...state.series, ...action.payload } };

    case completeLoadingSeries:
      return { ...state, loading: false };

    /* --- */
    case loading:
      return { ...state, loading: true };

    case error:
      return { ...state, error: action.payload, loading: false };

    case favoriteSeries:
      const exist = state.myList.find((item) => item.id === action.payload.id);
      if (exist) return { ...state };
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };

    case removeFavoriteSeries:
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };

    case searchSeries:
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

    case setSeriesData:
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
};
