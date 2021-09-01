import React, { useState, useEffect } from "react";
import "./styles/Movies.css";
import FrontMovie from "../components/FrontMovie";
import GenresContainer from "../components/GenresContainer";
import SectionsContainer from "../components/SectionsContainer";
import useInitialStateMovie from "../hooks/useInitialStateMovie";
import Section from "../components/Section";
import Movie from "../components/Movie";
import { connect } from "react-redux";
import * as moviesActions from "../actions/moviesActions"

function Movies(props) {
  const { myList, movies } = props;
  const initialStateMovie = useInitialStateMovie();
  console.log(props)
  return (
    <React.Fragment>
      {initialStateMovie.popular.length === 0 ? (
        <FrontMovie title="Loading" />
      ) : (
        <FrontMovie {...initialStateMovie.popular[0]} />
      )}
      <GenresContainer />

      {/* {myList.length > 0 && (
        <SectionsContainer title="Watch List">
          <Section>
            {myList.map((item) => (
              <Movie key={item.id} {...item} isList />
            ))}
          </Section>
        </SectionsContainer>
      )} */}

      {initialStateMovie.nowPlaying.length === 0 ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="In theathers now">
          <Section>
            {initialStateMovie.nowPlaying.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {initialStateMovie.popular.length === 0 ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Popular">
          <Section>
            {initialStateMovie.popular.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {initialStateMovie.upcoming.length === 0 ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Upcoming">
          <Section>
            {initialStateMovie.upcoming.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {initialStateMovie.horror.length === 0 ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Horror">
          <Section>
            {initialStateMovie.horror.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {initialStateMovie.action.length === 0 ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Action">
          <Section>
            {initialStateMovie.action.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {initialStateMovie.animation.length === 0 ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Animation">
          <Section>
            {initialStateMovie.animation.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {initialStateMovie.fantasy.length === 0 ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Fantasy">
          <Section>
            {initialStateMovie.fantasy.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {initialStateMovie.adventure.length === 0 ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Adventure">
          <Section>
            {initialStateMovie.adventure.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return state.moviesReducer
};

export default connect(mapStateToProps, moviesActions)(Movies);
