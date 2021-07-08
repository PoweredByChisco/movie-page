import React from "react";
import "./styles/Movie.css";
import Modal from "./Modal";
import ModalMovie from "./ModalMovie";

class Movie extends React.Component {
  state = {
    data: this.props,
  }
  

  render() {
    return (
      <React.Fragment>
        <div className="movie-container" onClick={this.props.onOpenModal}>
          <img src={this.props.img} alt="" />
          <div className="info-container">
            <h1>{this.props.title}</h1>
            <h3>{this.props.duration} min</h3>
          </div>
        </div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onClose={this.props.onCloseModal}
        >
          <ModalMovie src={this.state.data.img} title={this.state.data.title} />
        </Modal>
      </React.Fragment>
    );
  }
}

export default Movie;
