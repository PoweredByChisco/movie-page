import React from "react";
import "./styles/Movies.css";
import FrontMovie from "../components/FrontMovie";
import GenresContainer from "../components/GenresContainer";
import SectionsContainer from "../components/SectionsContainer";
import useInitialStateMovie from "../hooks/useInitialStateMovie";
import Section from "../components/Section";
import Movie from "../components/Movie";

function Movies() {
  const initialState = useInitialStateMovie();
  console.log(initialState)
  console.table(initialState)
  return initialState.length === 0 ? (
    <h1>Loading ...</h1>
  ) : (
    <React.Fragment>
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

      <SectionsContainer title="Horror">
        <Section>
          {initialState.horror.map((item) => (
            <Movie key={item.id} {...item} />
          ))}
        </Section>
      </SectionsContainer>

      <SectionsContainer title="Action">
        <Section>
          {initialState.action.map((item) => (
            <Movie key={item.id} {...item} />
          ))}
        </Section>
      </SectionsContainer>

      <SectionsContainer title="Animation">
        <Section>
          {initialState.animation.map((item) => (
            <Movie key={item.id} {...item} />
          ))}
        </Section>
      </SectionsContainer>

      <SectionsContainer title="Fantasy">
        <Section>
          {initialState.fantasy.map((item) => (
            <Movie key={item.id} {...item} />
          ))}
        </Section>
      </SectionsContainer>

      <SectionsContainer title="Adventure">
        <Section>
          {initialState.adventure.map((item) => (
            <Movie key={item.id} {...item} />
          ))}
        </Section>
      </SectionsContainer>
    </React.Fragment>
  );
}

export default Movies;
