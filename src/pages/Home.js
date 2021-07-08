import React from "react";
import "./styles/Home.css";
import FrontMovie from "../components/FrontMovie";
import GenresContainer from "../components/GenresContainer";
import SectionsContainer from "../components/SectionsContainer";

class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  render() {
    return (
      <React.Fragment>
        <FrontMovie />
        <GenresContainer />
        <SectionsContainer />
      </React.Fragment>
    );
  }
}

export default Home;
