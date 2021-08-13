import React from "react";
import { connect } from "react-redux";
import "./styles/FrontMovie.css";
import { setFavorite } from "../actions";

const FrontMovie = (props) => {
  const { title, backdrop_path, overview, homepage, poster_path, runtime, id } =
    props;
  const handleSetFavorite = () => {
    props.setFavorite({
      poster_path,
      title,
      runtime,
      overview,
      backdrop_path,
      homepage,
      id
    });
  };
  const url = "https://image.tmdb.org/t/p/original";

  return (
    <React.Fragment>
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
            <button className="btn btn-secondary" onClick={handleSetFavorite}>
              <p>Watch List</p>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  setFavorite,
};

export default connect(null, mapDispatchToProps)(FrontMovie);
