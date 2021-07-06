import React from "react";
import "./styles/Home.css";
import apiData from "../apiData";
import FrontMovie from "../components/FrontMovie";
import Genres from "../components/Genders"
import SectionsContainer from "../components/SectionsContainer";

class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  /*   componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = 0;
    } catch (error) {}
  };
 */
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
