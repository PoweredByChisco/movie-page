import React from "react";
import "./styles/SectionsContainer.css";
import Section from "./Section";


class SectionsContainer extends React.Component {
  render() {
/*     if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return "Error";
    } */

    return (
      <React.Fragment>
        <Section title="In theaters" type="movie" list="now_playing" />
        <Section title="Popular" type="movie" list="popular" />
        <Section title="Upcoming" type="movie" list="upcoming" />
        
      </React.Fragment>
    );
  }
}

export default SectionsContainer;
