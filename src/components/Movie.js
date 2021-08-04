import React, { useState } from "react";
import "./styles/Movie.css";
import Modal from "./Modal";
import ModalMovie from "./ModalMovie";
import { CSSTransition } from "react-transition-group";

const Movie = ({ poster_path, title, runtime, overview, backdrop_path, homepage }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const url = "https://image.tmdb.org/t/p/w500/";

  const handleOpenModal = () => {
    setModalIsOpen(true); /* Ojo al selectedData */
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <React.Fragment>
      <div className="movie-container" onClick={handleOpenModal}>
        <img src={url + poster_path} alt="" />
        <div className="info-container">
          <h1>{title}</h1>
          <h3>{runtime} min</h3>
        </div>
      </div>
      <CSSTransition
        timeout={300}
        in={modalIsOpen}
        classNames="show"
        unmountOnExit
        onEnter={() => console.log("On enter")}
        onExiting={() => console.log("Se ejecuto on Exited")}
      >
        <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
          <ModalMovie
            src={url + poster_path}
            title={title}
            overview={overview}
            backdrop={backdrop_path}
            homepage={homepage}
          />
        </Modal>
      </CSSTransition>
    </React.Fragment>
  );
};

export default Movie;
