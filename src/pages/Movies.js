import React from "react";
import "./styles/Movies.css";
import FrontMovie from "../components/FrontMovie";
import GenresContainer from "../components/GenresContainer";
import SectionsContainer from "../components/SectionsContainer";
import apiData from "../apiData";
import PageLoading from "../components/PageLoading";

class Movies extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = [];
      data.push(
        await apiData.imdb.getList2("movie", "popular", 1),
        await apiData.imdb.getList2("movie", "now_playing", 1),
        await apiData.imdb.getList2("movie", "upcoming", 1),
        await apiData.imdb.getDataDiscover({type : "movie"})
      );
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    const url = "https://image.tmdb.org/t/p/w500/";
    const movies = this.state.data;
    if (this.state.loading === true) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return "Error";
    }
    const type = "movie";

    return (
      <React.Fragment>
        <FrontMovie data={this.state.data[0].results[0]} />
        <GenresContainer />
        <SectionsContainer
          type={type}
          section1="now_playing"
          section2="popular"
          section3="upcoming"
        />
      </React.Fragment>
    );
  }
}

export default Movies;
