import React from "react";
import FrontSerie from "../components/FrontSerie";
import GenresContainer from "../components/GenresContainer";
import SectionsContainer from "../components/SectionsContainer";
import Section from "../components/Section";
import useInitialStateTv from "../hooks/useInitalStateTv";
import Serie from "../components/Serie";
import "./styles/Movies.css";

function Tv() {
  const initialState = useInitialStateTv();

  return initialState.length === 0 ? (
    <h1>Loading</h1>
  ) : (
    <React.Fragment>
      <FrontSerie {...initialState.popular[0]} />

      <SectionsContainer title="Popular">
        <Section>
          {initialState.popular.map((item) => (
            <Serie key={item.id} {...item} />
          ))}
        </Section>
      </SectionsContainer>
      
      <SectionsContainer title="Airign Today">
        <Section>
          {initialState.airingToday.map((item) => (
            <Serie key={item.id} {...item} />
          ))}
        </Section>
      </SectionsContainer> 

      <SectionsContainer title="On the Air">
        <Section>
          {initialState.onTheAir.map((item) => (
            <Serie key={item.id} {...item} />
          ))}
        </Section>
      </SectionsContainer>
    </React.Fragment>
  );
}

export default Tv;
