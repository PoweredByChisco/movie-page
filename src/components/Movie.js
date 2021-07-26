import React from "react";
import "./styles/Movie.css";
import Modal from "./Modal";
import ModalMovie from "./ModalMovie";
import { CSSTransition } from "react-transition-group";

class Movie extends React.Component {
  state = {
    data: this.props,
    modalIsOpen: false,
  };

  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true, selectedData: this.props }); /* Ojo al selectedData */
  };

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <div className="movie-container" onClick={this.handleOpenModal}>
          <img src={this.props.img} alt="" />
          <div className="info-container">
            <h1>{this.props.title}</h1>
            <h3>{this.props.duration} min</h3>
          </div>
        </div>
        <CSSTransition
          timeout={300}
          in={this.state.modalIsOpen}
          classNames="show"
          unmountOnExit
          onEnter={() => console.log("On enter")}
          onExiting={() => console.log("Se ejecuto on Exited")}
        >
          <Modal
            isOpen={this.state.modalIsOpen}
            onClose={this.handleCloseModal}
          >
            <ModalMovie
              src={this.state.data.img}
              title={this.state.data.title}
              overview={this.state.data.overview}
              backdrop={this.state.data.backdrop}
            />
          </Modal>
        </CSSTransition>
      </React.Fragment>
    );
  }
}

export default Movie;
