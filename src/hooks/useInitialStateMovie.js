import { useState, useEffect } from "react";
import apiData from "../apiData";

/* Estoy haciendo doble uso de estado para manejar un estado de carga mas rapida, aun asi debo de mejorar esto */
function useInitialStateMovie() {
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [horror, setHorror] = useState([]);
  const [action, setAction] = useState([]);
  const [adventure, setAdventure] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [fantasy, setFantasy] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const popular = await apiData.imdb.getDataArray(
          10,
          "movie",
          apiData.imdb.getList("movie", "popular", 1)
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
        const nowPlaying = await apiData.imdb.getDataArray(
          10,
          "movie",
          apiData.imdb.getList("movie", "now_playing", 1)
        );
        return setNowPlaying(nowPlaying);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const upcoming = await apiData.imdb.getDataArray(
          10,
          "movie",
          apiData.imdb.getList("movie", "upcoming", 1)
        );
        return setUpcoming(upcoming);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const horror = await apiData.imdb.getDataArray(
          10,
          "movie",
          apiData.imdb.genres.getList("movie", "popularity.desc", 1, 27)
        );
        return setHorror(horror);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const action = await apiData.imdb.getDataArray(
          10,
          "movie",
          apiData.imdb.genres.getList("movie", "popularity.desc", 1, 28)
        );
        return setAction(action);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  useEffect(() => {
    const fetch = async () => {
      try {
        const adventure = await apiData.imdb.getDataArray(
          10,
          "movie",
          apiData.imdb.genres.getList("movie", "popularity.desc", 1, 12)
        );
        return setAdventure(adventure);
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
          "movie",
          apiData.imdb.genres.getList("movie", "popularity.desc", 1, 16)
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
        const fantasy = await apiData.imdb.getDataArray(
          10,
          "movie",
          apiData.imdb.genres.getList("movie", "popularity.desc", 1, 14)
        );
        return setFantasy(fantasy);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return {
    popular,
    nowPlaying,
    upcoming,
    horror,
    action,
    adventure,
    animation,
    fantasy,
  };
}

export default useInitialStateMovie;
