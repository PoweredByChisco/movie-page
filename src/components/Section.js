import React from "react";
import "./styles/Sections.css";
import Movie from "./Movie";

function Section({children}) {


  return (
    <React.Fragment>
      <div className="section">{children}</div>
    </React.Fragment>
  );
}

export default Section;
