import React from "react";
import { connect } from "react-redux";
import { setFavorite } from "../actions";
import "./styles/ModalMovie.css";

function ModalMovie(props) {
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
      id,
    });
  };

  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  const imgUrlOriginal = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="modal-movie--container">
      <img src={imgUrl + poster_path} alt="" className="poster" />
      <div className="backdrop-container">
        <img src={imgUrlOriginal + backdrop_path} alt="" className="backdrop" />
      </div>
      <div className="modal-movie--info">
        <h1>{title}</h1>
        <p>{overview}</p>
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
  );
}

const mapStateToProps = {
  setFavorite,
};

export default connect(null, mapStateToProps)(ModalMovie);
