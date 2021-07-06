import React from "react";
import "./styles/FrontMovie.css";
import apiData from "../apiData";
import PageLoading from "../components/PageLoading";

class FrontMovie extends React.Component {
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
      const id = await apiData.movies.getNPopularMoviesIds(1);
      const data = await apiData.movies.getMovie(id);
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
      return "error";
    }

    const url = "https://image.tmdb.org/t/p/w342";
    const data = this.state.data;
    return (
      <React.Fragment>
        <div className="frontMovie--container">
          <div className="frontMovie__post">
            <img src={url + data.backdrop_path} alt="" />
          </div>
          <h1>{data.title}</h1>
          <div className="frontMovie__buttons">
            <button>Play now</button>
            <button>Whatch List</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FrontMovie;
