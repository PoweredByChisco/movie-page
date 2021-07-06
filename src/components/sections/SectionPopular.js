import React from "react";
import "./styles/SectionsGlobal.css";
import PageLoading from "../PageLoading";
import apiData from "../../apiData";

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
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return "Error";
    }

    const data = this.state.data;

    return (
      <div className="section-popular--container">
        {data.map((movie) => {
          return (
            <div key={movie.id} className="section-popular__movie">
              <h1>{movie.title}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SectionPopular;
