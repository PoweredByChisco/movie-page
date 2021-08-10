import { useState, useEffect } from "react";
import apiData from "../apiData";

const useInitialStateTv = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Fetching by playList
        const airingToday = await apiData.imdb.getDataArray(
          15,
          "tv",
          apiData.imdb.getList("tv", "airing_today", 1)
        );
        const popular = await apiData.imdb.getDataArray(
          15,
          "tv",
          apiData.imdb.getList("tv", "popular", 1)
        );
        //Fetching by genres
        const actionAdventure = await apiData.imdb.getDataArray(
          10,
          "tv",
          apiData.imdb.genres.getList("tv", "popularity.desc", 1, 10759)
        );
        const animation = await apiData.imdb.getDataArray(
          10,
          "tv",
          apiData.imdb.genres.getList("tv", "popularity.desc", 1, 16)
        );
        const documentary = await apiData.imdb.getDataArray(
          10,
          "tv",
          apiData.imdb.genres.getList("tv", "popularity.desc", 1, 99)
        );
        const scifi = await apiData.imdb.getDataArray(
          10,
          "tv",
          apiData.imdb.genres.getList("tv", "popularity.desc", 1, 10765)
        );
        const comedy = await apiData.imdb.getDataArray(
          10,
          "tv",
          apiData.imdb.genres.getList("tv", "popularity.desc", 1, 35)
        );
        console.log(popular);
        return setData({
          airingToday,
          popular,
          actionAdventure,
          animation,
          documentary,
          scifi,
          comedy,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return data;
};

export default useInitialStateTv;
