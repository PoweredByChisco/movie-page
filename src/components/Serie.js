import React, { useState } from "react";
import "./styles/Movie.css";
import Modal from "./Modal";
import ModalMovie from "./ModalMovie";
import { CSSTransition } from "react-transition-group";

const Serie = ({
  poster_path,
  name,
  episode_run_time,
  overview,
  backdrop_path,
  homepage,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  const imgUrlOriginal = "https://image.tmdb.org/t/p/original/";

  const handleOpenModal = () => {
    setModalIsOpen(true); /* Ojo al selectedData */
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <React.Fragment>
      <div className="movie-container" onClick={handleOpenModal}>
        <img src={imgUrl + poster_path} alt="" />
        <div className="info-container">
          <h1>{name}</h1>
          <h3>{episode_run_time} min</h3>
        </div>
      </div>
      <CSSTransition
        timeout={300}
        in={modalIsOpen}
        classNames="show"
        unmountOnExit
      >
        <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
          <ModalMovie
            poster_path={imgUrl + poster_path}
            title={name}
            overview={overview}
            backdrop_path={imgUrlOriginal + backdrop_path}
            homepage={homepage}
          />
        </Modal>
      </CSSTransition>
    </React.Fragment>
  );
};

export default Serie;
