import React from "react";
import "./styles/SectionsContainer.css";
import Section from "./Section";

function SectionsContainer({ children, title }) {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      {children}
    </React.Fragment>
  );
}

export default SectionsContainer;
