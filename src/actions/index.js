export const actions = {
  setMovieData: "SET_MOVIE_DATA",
};

export const setMovieData = (payload) => ({
  type: actions.setMovieData,
  payload,
});
