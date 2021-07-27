import React from "react";
import "./styles/Movies.css";
import FrontMovie from "../components/FrontMovie";
import GenresContainer from "../components/GenresContainer";
import SectionsContainer from "../components/SectionsContainer";

class Tv extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  render() {
    const type = "tv"

    return (
      <React.Fragment>
        <FrontMovie type={type} />
      {/*   <GenresContainer /> */}
        <SectionsContainer type={type} section1="on_the_air" section2="popular" section3="airing_today" />
      </React.Fragment>
    );
  }
}

export default Tv;
