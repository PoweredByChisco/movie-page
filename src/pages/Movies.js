import React, { useState, useEffect } from "react";
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
  const { myList, movies, moviesReducer } = props;
  /* const initialStateMovie = useInitialStateMovie(); */

  useEffect(() => {
    props.getAllMovies();
    console.log("useEffect it happens");
  }, []);
  console.log("Props ", props);
  console.log("Movies Reducer ", props.loading);

  // console.log("Antes de cargar ", props.movies.popular);


 /*  if (props.loading === true) {
    return <p>Loading</p>;
  } */

  // console.log("Despues de cargar ", props.movies.popular);



  /* console.log("Front Movie ", movies.popularMovies[0]); */
  return (
    <React.Fragment>
      {props.loading === true  ? (
        <FrontMovie title="Loading" />
      ) : (
        <FrontMovie {...props.movies.mostPopular} />
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

      {props.loading === true ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="In theathers now">
          <Section>
            {props.movies.nowPlaying.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {props.loading === true ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Popular">
          <Section>
            {props.movies.popular.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {props.loading === true ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Upcoming">
          <Section>
            {props.movies.upcoming.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {props.loading === true ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Horror">
          <Section>
            {props.movies.horror.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {props.loading === true ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Action">
          <Section>
            {props.movies.action.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {props.loading === true ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Animation">
          <Section>
            {props.movies.animation.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {props.loading === true ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Fantasy">
          <Section>
            {props.movies.fantasy.map((item) => (
              <Movie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {props.loading === true ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Adventure">
          <Section>
            {props.movies.adventure.map((item) => (
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
