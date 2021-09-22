import React from "react";
import "./styles/Sections.css";
function Section({children}) {


  return (
    <React.Fragment>
      <div className="section">{children}</div>
    </React.Fragment>
  );
}

export default Section;
