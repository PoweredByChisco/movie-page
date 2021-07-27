import React from "react";
import "./styles/FrontMovie.css";
import apiData from "../apiData";
import PageLoading from "../components/PageLoading";
import { Link } from "react-router-dom";

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
      const data = await apiData.imdb.getData(1, "movie", "popular");
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

    const url = "https://image.tmdb.org/t/p/original";
    const data = this.state.data;
    return (
      <React.Fragment>
        <div className="frontMovie--container">
          <div className="frontMovie__post">
            <img src={url + data.backdrop_path} alt="" />
            <div className="info">
              <h1>{data.title}</h1>
              <p className="description">{data.overview}</p>
            </div>
            <div className="frontMovie__buttons">
              <button className="btn btn-primary">
                <a href={data.homepage}><p>+ Info</p></a>
              </button>
              <button className="btn btn-secondary">
                <p>Watch List</p>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FrontMovie;
