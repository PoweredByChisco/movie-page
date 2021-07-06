import React from "react";
import "./styles/SectionsGlobal.css";

class SectionMyList extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };

  render() {
    return "SectionMyList";
  }
}

export default SectionMyList;
