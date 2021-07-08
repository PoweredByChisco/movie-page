import React from "react";
import "./styles/GenresContainer.css";
import GenreBadge from "./GenreBadge";

class GenresContainer extends React.Component {
  render() {
    const imageUrl = "https://image.tmdb.org/t/p/w500/";
    return (
      <div className="genres-container">
        <GenreBadge title="Animation" src="https://i.blogs.es/a34e58/cartel-toy-story-4/840_560.jpg" />
        <GenreBadge title="Action" src="https://static01.nyt.com/images/2020/09/06/arts/08Mulan-ES-00/29mulan-depiction1-facebookJumbo.jpg" />
        <GenreBadge title="Scifi" src="https://i.blogs.es/37bccb/1366_2000/450_1000.jpeg" />
        <GenreBadge title="Fantasy" src="https://cdn.forbes.co/2021/05/El-sen%CC%83or-de-los-anillos-Golum-Foto-Cortesia-1000x600.jpg" />
      </div>
    );
  }
}

export default GenresContainer;
