import React from "react";
import "./styles/GenreBadge.css";

function GenreBadge(props) {
  return (
    <div className="genre-badge--container">
      <h1>{props.title}</h1>
      <img src={props.src} alt="" />
    </div>
  );
}

export default GenreBadge;
