import React from "react";
import { connect } from "react-redux";
import { setFavorite, removeFavorite } from "../actions";
import "./styles/ModalMovie.css";

function ModalMovie(props) {
  const {
    title,
    backdrop_path,
    overview,
    homepage,
    poster_path,
    runtime,
    id,
    isList,
  } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      ...props,
    });
  };
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  const imgUrlOriginal = "https://image.tmdb.org/t/p/original/";

  const handleDeleteFavorite = (id) => {
    props.removeFavorite(id);
  };

  return (
    <div className="modal-movie--container">
      <img src={imgUrl + props.poster_path} alt="" className="poster" />
      <div className="backdrop-container">
        <img src={imgUrlOriginal + props.backdrop_path} alt="" className="backdrop" />
      </div>
      <div className="modal-movie--info">
        <h1>{props.title}</h1>
        <p>{props.overview}</p>
        <div className="frontMovie__buttons">
          <button className="btn btn-primary">
            <a href={props.homepage}>
              <p>+ Info</p>
            </a>
          </button>
          {isList ? (
            <button
              className="btn btn-secondary"
              onClick={() => handleDeleteFavorite(id)}
            >
              <p>Remove Watch List</p>
            </button>
          ) : (
            <button className="btn btn-secondary" onClick={handleSetFavorite}>
              <p>Watch List</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = {
  setFavorite,
  removeFavorite,
};

export default connect(null, mapStateToProps)(ModalMovie);
