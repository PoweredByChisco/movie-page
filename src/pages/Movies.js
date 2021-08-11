import React, { useState, useEffect } from "react";
import "./styles/Movies.css";
import FrontMovie from "../components/FrontMovie";
import GenresContainer from "../components/GenresContainer";
import SectionsContainer from "../components/SectionsContainer";
import useInitialStateMovie from "../hooks/useInitialStateMovie";
import Section from "../components/Section";
import Movie from "../components/Movie";

function Movies() {
  const initialStateMovie = useInitialStateMovie();
  const initialState = initialStateMovie.data
  const section = initialStateMovie.section

  return (
    <React.Fragment>
      {initialState.length === 0 ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <FrontMovie {...initialState.popular[0]} />
          <GenresContainer />
          {/* Sections */}
          <SectionsContainer title="In theathers now">
            <Section>
              {initialState.nowPlaying.map((item) => (
                <Movie key={item.id} {...item} />
              ))}
            </Section>
          </SectionsContainer>

          <SectionsContainer title="Popular">
            <Section>
              {initialState.popular.map((item) => (
                <Movie key={item.id} {...item} />
              ))}
            </Section>
          </SectionsContainer>

          <SectionsContainer title="Upcoming">
            <Section>
              {initialState.upcoming.map((item) => (
                <Movie key={item.id} {...item} />
              ))}
            </Section>
          </SectionsContainer>
        </>
      )}

      {section.length === 0 ? (
        <h1>Loading Genres...</h1>
      ) : (
        <>
          <SectionsContainer title="Horror">
            <Section>
              {section.horror.map((item) => (
                <Movie key={item.id} {...item} />
              ))}
            </Section>
          </SectionsContainer>

          <SectionsContainer title="Action">
            <Section>
              {section.action.map((item) => (
                <Movie key={item.id} {...item} />
              ))}
            </Section>
          </SectionsContainer>

          <SectionsContainer title="Animation">
            <Section>
              {section.animation.map((item) => (
                <Movie key={item.id} {...item} />
              ))}
            </Section>
          </SectionsContainer>

          <SectionsContainer title="Fantasy">
            <Section>
              {section.fantasy.map((item) => (
                <Movie key={item.id} {...item} />
              ))}
            </Section>
          </SectionsContainer>

          <SectionsContainer title="Adventure">
            <Section>
              {section.adventure.map((item) => (
                <Movie key={item.id} {...item} />
              ))}
            </Section>
          </SectionsContainer>
        </>
      )}
    </React.Fragment>
  );
}

export default Movies;
