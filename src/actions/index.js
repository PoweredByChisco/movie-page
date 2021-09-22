export const actions = {
  setMovieData: "SET_MOVIE_DATA",
  setFavorite: "SET_FAVORITE",
  removeFavorite: "REMOVE_FAVORITE",
  getSearch: "GET_SEARCH"
};

export const setMovieData = (payload) => ({
  type: actions.setMovieData,
  payload,
});

export const setFavorite = (payload) => ({
  type: actions.setFavorite,
  payload,
});

export const removeFavorite = (payload) => ({
  type: actions.removeFavorite,
  payload,
});

export const getSearch = (payload) => ({
  type: actions.getSearch,
  payload,
})

