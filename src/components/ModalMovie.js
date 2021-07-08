import React from "react";
import "./styles/ModalMovie.css";

function ModalMovie(props) {
  return <div className="modal-movie--container">
      <h1>{props.title}</h1>
      <img src={props.src} alt="" />
  </div>
}

export default ModalMovie;
