import React from "react";
import FrontSerie from "../components/FrontSerie";
import SectionsContainer from "../components/SectionsContainer";
import Section from "../components/Section";
import useInitialStateTv from "../hooks/useInitalStateTv";
import Serie from "../components/Serie";
import "./styles/Movies.css";

function Tv() {
  const initialStateTv = useInitialStateTv();
  const initialState = initialStateTv.data;
  const section = initialStateTv.section;

  return (
    <>
      {initialState.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <FrontSerie {...initialState.popular[0]} />
          {/* Sections */}
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
        </>
      )}

      {section.length === 0 ? (
        <h1>Loading genres...</h1>
      ) : (
        <>
          <SectionsContainer title="Action-Adventures">
            <Section>
              {section.actionAdventure.map((item) => (
                <Serie key={item.id} {...item} />
              ))}
            </Section>
          </SectionsContainer>

          <SectionsContainer title="Documentary">
            <Section>
              {section.documentary.map((item) => (
                <Serie key={item.id} {...item} />
              ))}
            </Section>
          </SectionsContainer>

          <SectionsContainer title="Scifi">
            <Section>
              {section.scifi.map((item) => (
                <Serie key={item.id} {...item} />
              ))}
            </Section>
          </SectionsContainer>

          <SectionsContainer title="Comedy">
            <Section>
              {section.comedy.map((item) => (
                <Serie key={item.id} {...item} />
              ))}
            </Section>
          </SectionsContainer>

          <SectionsContainer title="Animation">
            <Section>
              {section.animation.map((item) => (
                <Serie key={item.id} {...item} />
              ))}
            </Section>
          </SectionsContainer>
        </>
      )}
    </>
  );
}

export default Tv;
