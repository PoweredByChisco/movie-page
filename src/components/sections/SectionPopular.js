import React from "react";
import "./styles/SectionsGlobal.css";
import PageLoading from "../PageLoading";
import apiData from "../../apiData";
import Movie from "../Movie";

class SectionPopular extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
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
      const ids = await apiData.movies.getNPopularMoviesIds(10);
      const data = await apiData.movies.getNMovies(ids);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    const url = "https://image.tmdb.org/t/p/w342";
    const movies = this.state.data;

    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return "Error";
    }

    return (
      <div className="section-popular--container">
        {movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              title={movie.title}
              duration={movie.runtime}
              img={url + movie.poster_path}
            />
          );
        })}
      </div>
    );
  }
}

export default SectionPopular;
