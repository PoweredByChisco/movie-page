import { useState, useEffect } from "react";
import apiData from "../apiData";

function useInitialStateMovie() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Fetching by playlists
        const popular = await apiData.imdb.getDataArray(
          10,
          "movie",
          apiData.imdb.getList("movie", "popular", 1)
        );
        const nowPlaying = await apiData.imdb.getDataArray(
          10,
          "movie",
          apiData.imdb.getList("movie", "now_playing", 1)
        );
        const upcoming = await apiData.imdb.getDataArray(
          10,
          "movie",
          apiData.imdb.getList("movie", "upcoming", 1)
        );
        //Fetching by genres
        const horror = await apiData.imdb.getDataArray(
          10,
          "movie",
          apiData.imdb.genres.getList("movie", "popularity.desc", 1, 27)
        );
        const action = await apiData.imdb.getDataArray(
          10,
          "movie",
          apiData.imdb.genres.getList("movie", "popularity.desc", 1, 28)
        );
        const adventure = await apiData.imdb.getDataArray(
          10,
          "movie",
          apiData.imdb.genres.getList("movie", "popularity.desc", 1, 12)
        );
        const animation = await apiData.imdb.getDataArray(
          10,
          "movie",
          apiData.imdb.genres.getList("movie", "popularity.desc", 1, 16)
        );
        const fantasy = await apiData.imdb.getDataArray(
          10,
          "movie",
          apiData.imdb.genres.getList("movie", "popularity.desc", 1, 14)
        );
        console.log(animation);

        return setData({
          popular,
          nowPlaying,
          upcoming,
          horror,
          action,
          adventure,
          animation,
          fantasy,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.table(data);
  return data;
}

export default useInitialStateMovie;
