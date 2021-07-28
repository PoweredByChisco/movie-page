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

    const type = this.props.type;

    return (
      <React.Fragment>
        <Section
          title="In theaters"
          type={type}
          list={this.props.section1}
          page={1}
        />
        <Section
          title="Popular"
          type={type}
          list={this.props.section2}
          page={1}
        />
        <Section
          title="Upcoming"
          type={type}
          list={this.props.section3}
          page={1}
        />
      </React.Fragment>
    );
  }
}

export default SectionsContainer;
