export const actions = {
  setMovieData: "SET_MOVIE_DATA",
  setFavorite: "SET_FAVORITE",
};

export const setMovieData = (payload) => ({
  type: actions.setMovieData,
  payload,
});

export const setFavorite = (payload) => ({
  type: actions.setFavorite,
  payload,
});
