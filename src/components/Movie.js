import React from "react";
import "./styles/Movie.css";

class Movie extends React.Component {
  render() {
    return <div className="movie-container">
      <img src={this.props.img} alt="" />
      <h1>{this.props.title}</h1>
      <h3>{this.props.duration}</h3>
    </div>
  }
}

export default Movie;
