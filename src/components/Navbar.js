import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container ">
      <Link to="">
        <p>Movies</p>
      </Link>
      <Link to="">
        <p>Series</p>
      </Link>
    </div>
  );
}

export default Navbar;
