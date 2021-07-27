import React from "react";
import "./styles/Movies.css";
import FrontMovie from "../components/FrontMovie";
import GenresContainer from "../components/GenresContainer";
import SectionsContainer from "../components/SectionsContainer";

class Movies extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  render() {
    const type = "movie"

    return (
      <React.Fragment>
        <FrontMovie type={type} />
        <GenresContainer />
        <SectionsContainer type={type} section1="now_playing" section2="popular" section3="upcoming" />
      </React.Fragment>
    );
  }
}

export default Movies;
