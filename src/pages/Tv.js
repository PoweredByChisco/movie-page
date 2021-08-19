import React from "react";
import FrontSerie from "../components/FrontSerie";
import SectionsContainer from "../components/SectionsContainer";
import Section from "../components/Section";
import useInitialStateTv from "../hooks/useInitalStateTv";
import Serie from "../components/Serie";
import "./styles/Movies.css";

function Tv() {
  const initialStateTv = useInitialStateTv();
  console.log(initialStateTv)

  return (
    <>
      {initialStateTv.popular.length === 0 ? (
        <FrontSerie title="Loading" />
      ) : (
        <FrontSerie {...initialStateTv.popular[0]} />
      )}

      {/* Sections */}
      {initialStateTv.airingToday.length === 0 ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Airing Today">
          <Section>
            {initialStateTv.airingToday.map((item) => (
              <Serie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {initialStateTv.popular.length === 0 ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Popular">
          <Section>
            {initialStateTv.popular.map((item) => (
              <Serie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {initialStateTv.actionAdventure.length === 0 ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Action and Adventure">
          <Section>
            {initialStateTv.actionAdventure.map((item) => (
              <Serie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {initialStateTv.animation.length === 0 ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Animation">
          <Section>
            {initialStateTv.animation.map((item) => (
              <Serie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {initialStateTv.documentary.length === 0 ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Documentary">
          <Section>
            {initialStateTv.documentary.map((item) => (
              <Serie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {initialStateTv.scifi.length === 0 ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Scifi">
          <Section>
            {initialStateTv.scifi.map((item) => (
              <Serie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {initialStateTv.comedy.length === 0 ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Comedy">
          <Section>
            {initialStateTv.comedy.map((item) => (
              <Serie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}
    </>
  );
}

export default Tv;
