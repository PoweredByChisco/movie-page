import React from "react";
import "./styles/Sections.css";
import PageLoading from "./PageLoading";
import apiData from "../apiData";
import Movie from "./Movie";

function Section() {
  const url = "https://image.tmdb.org/t/p/w500/";
  const movies = this.state.data;

  return (
    <React.Fragment>
      <div className="section">
        {movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              title={movie.title}
              duration={movie.runtime}
              img={url + movie.poster_path}
              backdrop={url + movie.backdrop_path}
              overview={movie.overview}
              homepage={movie.homepage}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Section;
