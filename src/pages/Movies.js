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
  console.log(initialStateMovie);

  return (
    <React.Fragment>
      {initialStateMovie.popular.length === 0 ? (
        <FrontMovie title="Loading"/>
      ) : (
        <FrontMovie {...initialStateMovie.popular[0]} />
      )}
      {/* <GenresContainer /> */}
      {/* Sections */}
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

      {/* {section.length === 0 ? (
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
      )} */}
    </React.Fragment>
  );
}

export default Movies;
