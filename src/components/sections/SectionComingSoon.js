import React from "react";
import "./styles/SectionsGlobal.css";
import PageLoading from "../PageLoading";
import apiData from "../../apiData";
import Movie from "../Movie";

class SectionComingSoon extends React.Component {
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
      const ids = await apiData.movies.getNUpcomingMoviesIds(10);
      const data = await apiData.movies.getNMovies(ids);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const url = "https://image.tmdb.org/t/p/w500/";
    const movies = this.state.data;

    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return "Error";
    }

    return (
      <React.Fragment>
        <h1>Coming Soon</h1>

        <div className="section section-upcoming--container">
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                title={movie.title}
                duration={movie.runtime}
                img={url + movie.poster_path}
                onOpenModal={this.handleOpenModal}
                onCloseModal={this.handleCloseModal}
                modalIsOpen={this.state.modalIsOpen}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default SectionComingSoon;
