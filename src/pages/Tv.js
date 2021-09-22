import React, { useEffect } from "react";
import FrontSerie from "../components/FrontSerie";
import SectionsContainer from "../components/SectionsContainer";
import Section from "../components/Section";
import Serie from "../components/Serie";
import "./styles/Movies.css";
import { connect } from "react-redux";
import * as tvActions from "../actions/tvActions";

function Tv(props) {
  const { series } = props.tvReducer;
  const { myList } = props.moviesReducer;

  useEffect(() => {
    props.getAllSeries();
    console.log("useEffect it happens");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("Props ", props);

  return (
    <>
      {!series.hasOwnProperty("popular") ? (
        <FrontSerie title="Loading" />
      ) : (
        <FrontSerie {...series.popular[0]} />
      )}

      {/* Sections */}
      {myList.length > 0 && (
        <SectionsContainer title="Watch List">
          <Section>
            {myList.map((item) => (
              <Serie key={item.id} {...item} isList />
            ))}
          </Section>
        </SectionsContainer>
      )}
      {!series.hasOwnProperty("airingToday") ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Airing Today">
          <Section>
            {series.airingToday.map((item) => (
              <Serie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {!series.hasOwnProperty("popular") ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Popular">
          <Section>
            {series.popular.map((item) => (
              <Serie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {!series.hasOwnProperty("actionAdventure") ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Action and Adventure">
          <Section>
            {series.actionAdventure.map((item) => (
              <Serie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {!series.hasOwnProperty("animation") ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Animation">
          <Section>
            {series.animation.map((item) => (
              <Serie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {!series.hasOwnProperty("documentary") ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Documentary">
          <Section>
            {series.documentary.map((item) => (
              <Serie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {!series.hasOwnProperty("scifi") ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Scifi">
          <Section>
            {series.scifi.map((item) => (
              <Serie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}

      {!series.hasOwnProperty("comedy") ? (
        <SectionsContainer title="Loading" />
      ) : (
        <SectionsContainer title="Comedy">
          <Section>
            {series.comedy.map((item) => (
              <Serie key={item.id} {...item} />
            ))}
          </Section>
        </SectionsContainer>
      )}
    </>
  );
}

const mapStateToProps = ({ tvReducer, moviesReducer }) => {
  return { tvReducer, moviesReducer };
};

export default connect(mapStateToProps, tvActions)(Tv);
