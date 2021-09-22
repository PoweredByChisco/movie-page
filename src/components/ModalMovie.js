import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import * as moviesActions from "../actions/moviesActions";
import "./styles/ModalMovie.css";

function ModalMovie(props) {
  const { id, isList } = props;
  const [listed, setListed] = useState(false);
  const handleSetFavorite = () => {
    props.setFavorite({
      ...props,
    });
    setListed(true);
  };
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  const imgUrlOriginal = "https://image.tmdb.org/t/p/original/";

  const handleDeleteFavorite = (id) => {
    props.setRemoveFavorite(id);
  };

  console.log(props);

  return (
    <div className="modal-movie--container">
      <img src={imgUrl + props.poster_path} alt="" className="poster" />
      <div className="backdrop-container">
        <img
          src={imgUrlOriginal + props.backdrop_path}
          alt=""
          className="backdrop"
        />
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
            <>
              {!listed && (
                <button
                  className="btn btn-secondary"
                  onClick={handleSetFavorite}
                >
                  <p>Watch List</p>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default connect(null, moviesActions)(ModalMovie);
