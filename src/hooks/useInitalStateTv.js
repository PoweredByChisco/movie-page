import { useState, useEffect } from "react";
import apiData from "../apiData";

const useInitialStateTv = () => {
  const [airingToday, setAiringToday] = useState([]);
  const [popular, setPopular] = useState([]);
  const [actionAdventure, setActionAdventure] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [documentary, setDocumentary] = useState([]);
  const [scifi, setScifi] = useState([]);
  const [comedy, setComedy] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const airingToday = await apiData.imdb.getDataArray(
          15,
          "tv",
          apiData.imdb.getList("tv", "airing_today", 1)
        );
        return setAiringToday(airingToday);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const popular = await apiData.imdb.getDataArray(
          15,
          "tv",
          apiData.imdb.getList("tv", "popular", 1)
        );
        return setPopular(popular);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const actionAdventure = await apiData.imdb.getDataArray(
          10,
          "tv",
          apiData.imdb.genres.getList("tv", "popularity.desc", 1, 10759)
        );
        return setActionAdventure(actionAdventure);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const animation = await apiData.imdb.getDataArray(
          10,
          "tv",
          apiData.imdb.genres.getList("tv", "popularity.desc", 1, 16)
        );
        return setAnimation(animation);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const documentary = await apiData.imdb.getDataArray(
          10,
          "tv",
          apiData.imdb.genres.getList("tv", "popularity.desc", 1, 99)
        );
        return setDocumentary(documentary);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  useEffect(() => {
    const fetch = async () => {
      try {
        const scifi = await apiData.imdb.getDataArray(
          10,
          "tv",
          apiData.imdb.genres.getList("tv", "popularity.desc", 1, 10765)
        );
        return setScifi(scifi);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  useEffect(() => {
    const fetch = async () => {
      try {
        const comedy = await apiData.imdb.getDataArray(
          10,
          "tv",
          apiData.imdb.genres.getList("tv", "popularity.desc", 1, 35)
        );
        return setComedy(comedy);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return {
    airingToday,
    popular,
    actionAdventure,
    animation,
    documentary,
    scifi,
    comedy,
  };
};

export default useInitialStateTv;
