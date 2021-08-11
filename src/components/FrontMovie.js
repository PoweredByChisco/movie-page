import React from "react";
import "./styles/FrontMovie.css";

const FrontMovie = ({ title, backdrop_path, overview, homepage }) => {
  const url = "https://image.tmdb.org/t/p/original";

  return (
    <React.Fragment>
      {
        <div className="frontMovie--container">
          <div className="frontMovie__post">
            <img src={url + backdrop_path} alt="" />
            <div className="info">
              <h1>{title}</h1>
              <p className="description">{overview}</p>
            </div>
            <div className="frontMovie__buttons">
              <button className="btn btn-primary">
                <a href={homepage}>
                  <p>+ Info</p>
                </a>
              </button>
              <button className="btn btn-secondary">
                <p>Watch List</p>
              </button>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  );
};

export default FrontMovie;
