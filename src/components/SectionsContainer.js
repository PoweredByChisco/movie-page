import React from "react";
import "./styles/SectionsContainer.css";

function SectionsContainer({ children, title }) {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      {children}
    </React.Fragment>
  );
}

export default SectionsContainer;
