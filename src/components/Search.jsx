import React from "react";
import { connect } from "react-redux";
import * as moviesActions from "../actions/moviesActions";
import { getSearch } from "../actions";
import "./styles/Search.css";

const Search = (props) => {
  const handleInput = (e) => {
    console.log(e.target.value);
    props.getSearch(e.target.value);
  };

  return (
    <section className="search">
      <h2 className="search__title">What do we see today?</h2>
      <input
        className="search__input"
        type="text"
        placeholder="Search..."
        onChange={handleInput}
      />
    </section>
  );
};

export default connect(null, moviesActions)(Search);
