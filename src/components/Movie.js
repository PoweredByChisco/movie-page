import React from "react";
import "./styles/Movie.css";

class Movie extends React.Component {
  render() {
    return (
      <div className="movie-container ">
        <img src={this.props.img} alt="" />
        <div className="info-container animate__animated animate__fadeIn">
          <h1>{this.props.title}</h1>
          <h3>{this.props.duration} min</h3>
        </div>
      </div>
    );
  }
}

export default Movie;
