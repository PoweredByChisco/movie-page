import { useState, useEffect } from "react";
import apiData from "../apiData";

/* Estoy haciendo doble uso de estado para manejar un estado de carga mas rapida, aun asi debo de mejorar esto */
function useInitialStateMovie() {
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const [section, setSection] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
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
    fetchPopular();
  }, []);

  useEffect(() => {
    const fetchNowPlaying = async () => {
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
    fetchNowPlaying();
  }, []);

  useEffect(() => {
    const fetchUpcoming = async () => {
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
    fetchUpcoming();
  }, []);

  /* useEffect(() => {
    const fetchData = async () => {
      try {
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

        return setSection({
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
    console.log("Se ejecuto section");
  }, []); */
  return {popular, nowPlaying,upcoming};
}

export default useInitialStateMovie;
