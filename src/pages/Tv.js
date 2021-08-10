import React from "react";
import FrontSerie from "../components/FrontSerie";
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
      {/* Sections */}
      <SectionsContainer title="Popular">
        <Section>
          {initialState.popular.map((item) => (
            <Serie key={item.id} {...item} />
          ))}
        </Section>
      </SectionsContainer>

      <SectionsContainer title="Action-Adventures">
        <Section>
          {initialState.actionAdventure.map((item) => (
            <Serie key={item.id} {...item} />
          ))}
        </Section>
      </SectionsContainer>

      <SectionsContainer title="Documentary">
        <Section>
          {initialState.documentary.map((item) => (
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

      <SectionsContainer title="Scifi">
        <Section>
          {initialState.scifi.map((item) => (
            <Serie key={item.id} {...item} />
          ))}
        </Section>
      </SectionsContainer>

      <SectionsContainer title="Comedy">
        <Section>
          {initialState.comedy.map((item) => (
            <Serie key={item.id} {...item} />
          ))}
        </Section>
      </SectionsContainer>

      <SectionsContainer title="Animation">
        <Section>
          {initialState.animation.map((item) => (
            <Serie key={item.id} {...item} />
          ))}
        </Section>
      </SectionsContainer>
    </React.Fragment>
  );
}

export default Tv;
