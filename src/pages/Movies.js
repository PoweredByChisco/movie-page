import React, { useState, useEffect, useLayoutEffect } from "react";
import "./styles/Movies.css";
import FrontMovie from "../components/FrontMovie";
import GenresContainer from "../components/GenresContainer";
import SectionsContainer from "../components/SectionsContainer";
/* import useInitialStateMovie from "../hooks/useInitialStateMovie"; */
import Section from "../components/Section";
import Movie from "../components/Movie";
import { connect } from "react-redux";
import * as moviesActions from "../actions/moviesActions";

function Movies(props) {
  const { myList, loading, movies } = props;

  useEffect(() => {
    props.getAllMovies();
    console.log("useEffect it happens");
  }, []);
  console.log("Props ", props);

  return (
    <React.Fragment>
      {!movies.hasOwnProperty("popular")  ? (
        <FrontMovie title="Loading" />
      ) : (
        <FrontMovie {...movies.popular[0]} />
      )}
      <GenresContainer />

      {myList.length > 0 && (
        <SectionsContainer title="Watch List">
          <Section>
            {myList.map((item) => (
              <Movie key={item.id} {...item} isList />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {!movies.hasOwnProperty("nowPlaying")  ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="In theathers now">
          <Section>
            {movies.nowPlaying.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {!movies.hasOwnProperty("popular")  ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Popular">
          <Section>
            {movies.popular.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {!movies.hasOwnProperty("upcoming")  ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Upcoming">
          <Section>
            {movies.upcoming.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {!movies.hasOwnProperty("horror")  ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Horror">
          <Section>
            {movies.horror.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {!movies.hasOwnProperty("action")  ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Action">
          <Section>
            {movies.action.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {!movies.hasOwnProperty("animation")  ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Animation">
          <Section>
            {movies.animation.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {!movies.hasOwnProperty("fantasy")  ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Fantasy">
          <Section>
            {movies.fantasy.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {!movies.hasOwnProperty("adventure")  ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Adventure">
          <Section>
            {movies.adventure.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return state.moviesReducer;
};

export default connect(mapStateToProps, moviesActions)(Movies);
