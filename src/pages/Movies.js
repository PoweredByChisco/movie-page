import React, { useState, useEffect } from "react";
import "./styles/Movies.css";
import FrontMovie from "../components/FrontMovie";
import GenresContainer from "../components/GenresContainer";
import SectionsContainer from "../components/SectionsContainer";
import apiData from "../apiData";
import Section from "../components/Section"
import Movie from "../components/Movie";

function Movies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const popular = await apiData.imdb.getDataListMax(
          10,
          "movie",
          "popular",
          1
        );
        const nowPlaying = await apiData.imdb.getDataListMax(
          10,
          "movie",
          "now_playing",
          1
        );
        const upcoming = await apiData.imdb.getDataListMax(
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

  console.log(data)

  return data.length === 0 ? (
    <h1>Loading ...</h1>
  ) : (
    <React.Fragment>
      <FrontMovie {...data.popular[0]} />
      <GenresContainer />
      <SectionsContainer title="In theathers now">
        <Section>
          {data.nowPlaying.map((item) => (<Movie key={item.id} {...item} />))}
        </Section>
      </SectionsContainer>
    </React.Fragment>
  );
}

export default Movies;
