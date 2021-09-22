import React from "react";
import { connect } from "react-redux";
import { getSearch } from "../actions";
import "./styles/Search.css";

const Search = (props) => {
  const handleInput = (e) => {
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

const mapDispatchToProps = {
  getSearch,
};

export default connect(null, mapDispatchToProps)(Search);
