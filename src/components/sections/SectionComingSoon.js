import React from "react";
import "./styles/SectionsGlobal.css";

class SectionComingSoon extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };

  render() {
    return "SectionCoomingSoon";
  }
}

export default SectionComingSoon;
