import React from "react";
import "./styles/SectionsGlobal.css";
import PageLoading from "../PageLoading";
import apiData from "../../apiData";
import Movie from "../Movie";

class SectionMyList extends React.Component {
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
      /* const data = await apiData.movies.getData(10, "movie", "now_playing"); */
      const data2 = [...this.props.data]
      /* const data = this.props.data */
      this.setState({loading: false, data:data2});
      /* console.log(data2)
      this.setState({ loading: false, data: data }); */
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
        <h1>My List</h1>
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

export default SectionMyList;
