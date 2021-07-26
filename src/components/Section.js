import React from "react";
import "./styles/Sections.css";
import PageLoading from "./PageLoading";
import apiData from "../apiData";
import Movie from "./Movie";

class Section extends React.Component {
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
      const type = this.props.type
      const list = this.props.list
      const data = await apiData.movies.getData(10, type, list);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    const url = "https://image.tmdb.org/t/p/original/";
    const movies = this.state.data;
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return "Error";
    }

    return (
      <React.Fragment>
        <h1>{this.props.title}</h1>
        <div className="section section-nowplaying--container">
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                title={movie.title}
                duration={movie.runtime}
                img={url + movie.poster_path}
                backdrop={url + movie.backdrop_path}
                overview={movie.overview}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Section;
