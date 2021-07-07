import React from "react";
import "./styles/Home.css";
import FrontMovie from "../components/FrontMovie";
import Genres from "../components/Genders";
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
        <Genres />
        <SectionsContainer />
      </React.Fragment>
    );
  }
}

export default Home;
