import React from "react";
import "./styles/FrontMovie.css";
import apiData from "../apiData";
import PageLoading from "../components/PageLoading";
import { Link } from "react-router-dom";

class FrontMovie extends React.Component {
  state = {
    data: this.props.data,
  };

/*   componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    console.log(this.props.data)
    const data = apiData.imdb.getDataList(1, "movie", this.props.data);
    console.log(data)

    this.setState({data: data });
  }
 */
  render() {
    /*     if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return "error";
    } */

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
                <a href={data.homepage}>
                  <p>+ Info</p>
                </a>
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
