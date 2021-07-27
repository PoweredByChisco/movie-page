import React from "react";
import "./styles/ModalMovie.css";

function ModalMovie(props) {
  return (
    <div className="modal-movie--container">
      <img src={props.src} alt="" className="poster" />
      <div className="backdrop-container">
        <img src={props.backdrop} alt="" className="backdrop" />
      </div>
      <div className="modal-movie--info">
        <h1>{props.title}</h1>
        <p>{props.overview}</p>
        <div className="frontMovie__buttons">
          <button className="btn btn-primary">
            <a href={props.homepage}><p>+ Info</p></a>
          </button>
          <button className="btn btn-secondary">
            <p>Watch List</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalMovie;
