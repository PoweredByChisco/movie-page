import { useState, useEffect } from "react";
import apiData from "../apiData";

const useInitialStateTv = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const airingToday = await apiData.imdb.getDataList(15, "tv", "airing_today", 1);
        const popular = await apiData.imdb.getDataList(15, "tv", "popular", 1);
        const onTheAir = await apiData.imdb.getDataList(
          15,
          "tv",
          "on_the_air",
          1
        );
        return setData({ airingToday, popular, onTheAir });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return data;
};

export default useInitialStateTv;
