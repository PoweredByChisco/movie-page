import React, { useState, useEffect } from "react";
import "./styles/Movies.css";
import FrontMovie from "../components/FrontMovie";
import GenresContainer from "../components/GenresContainer";
import SectionsContainer from "../components/SectionsContainer";
import apiData from "../apiData";
import PageLoading from "../components/PageLoading";

function Movies() {
  const [data, setData] = useState({
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = [];
        data.push(
          await apiData.imdb.getList2("movie", "popular", 1),
          await apiData.imdb.getList2("movie", "now_playing", 1),
          await apiData.imdb.getList2("movie", "upcoming", 1),
          await apiData.imdb.getDataDiscover({ type: "movie" })
        );
        return setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const x = Object.keys(data);
  console.log(x);
  return (
    <React.Fragment>
      {/* <FrontMovie data={data[0].results[0]} /> */}
      {/* <GenresContainer />
      <SectionsContainer
        section1="now_playing"
        section2="popular"
        section3="upcoming"
      />} */}
    </React.Fragment>
  );
}

export default Movies;
