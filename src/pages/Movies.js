import React, { useState, useEffect } from "react";
import "./styles/Movies.css";
import FrontMovie from "../components/FrontMovie";
import GenresContainer from "../components/GenresContainer";
import SectionsContainer from "../components/SectionsContainer";
import apiData from "../apiData";
import PageLoading from "../components/PageLoading";

function Movies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const array = [];
        array.push(
          await apiData.imdb.getDataListMax(10, "movie", "popular", 1),
          await apiData.imdb.getDataListMax(10, "movie", "now_playing", 1),
          await apiData.imdb.getDataListMax(10, "movie", "upcoming", 1)
          /* await apiData.imdb.getDataDiscover({ type: "movie" }) */
        );
        const ids = []
        /* const data = array.map(item => ids.push(item.results.map((item) => (item.id)))) */

        return setData(array);
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
      <GenresContainer />
      <SectionsContainer title="In theathers now"></SectionsContainer>
    </React.Fragment>
  );
}

export default Movies;
