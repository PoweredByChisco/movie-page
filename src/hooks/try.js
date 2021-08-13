/* useEffect(() => {
  const fetchPopular = async () => {
    try {
      const popular = await apiData.imdb.getDataArray(
        10,
        "movie",
        apiData.imdb.getList("movie", "popular", 1)
      );
      return {popular}
    } catch (error) {
      console.log(error);
    }
  };
  const fetchNowPlaying = async () => {
    try {
      const nowPlaying = await apiData.imdb.getDataArray(
        10,
        "movie",
        apiData.imdb.getList("movie", "now_playing", 1)
      );
      return {nowPlaying}
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUpcoming = async () => {
    try {
      const upcoming = await apiData.imdb.getDataArray(
        10,
        "movie",
        apiData.imdb.getList("movie", "upcoming", 1)
      );
      return {upcoming}
    } catch (error) {
      console.log(error);
    }
  };
  fetchPopular();
  fetchNowPlaying();
  fetchUpcoming();
  setData(fetchPopular());
  console.log(data);
}, []); */