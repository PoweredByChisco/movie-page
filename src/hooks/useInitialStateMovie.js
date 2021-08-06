import { useState, useEffect } from "react";
import apiData from "../apiData";

function useInitialStateMovie() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const popular = await apiData.imdb.getDataList(
          10,
          "movie",
          "popular",
          1
        );
        const nowPlaying = await apiData.imdb.getDataList(
          10,
          "movie",
          "now_playing",
          1
        );
        const upcoming = await apiData.imdb.getDataList(
          10,
          "movie",
          "upcoming",
          1
        );
        return setData({ popular, nowPlaying, upcoming });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return data;
}

export default useInitialStateMovie;
