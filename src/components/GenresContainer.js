import React from "react";
import { Link } from "react-router-dom";
import "./styles/GenresContainer.css";
import GenreBadge from "./GenreBadge";

class GenresContainer extends React.Component {
  render() {
    /* const imageUrl = "https://image.tmdb.org/t/p/w500/"; */
    return (
      <div className="genres-container">
        <Link to="/workingOn">
          <GenreBadge
            title="Action"
            src="https://static01.nyt.com/images/2020/09/06/arts/08Mulan-ES-00/29mulan-depiction1-facebookJumbo.jpg"
          />
        </Link>
        <Link to="/workingOn">
          <GenreBadge
            title="Animation"
            src="https://i.blogs.es/a34e58/cartel-toy-story-4/840_560.jpg"
          />
        </Link>

        <Link to="/workingOn">
          <GenreBadge
            title="Scifi"
            src="https://i.blogs.es/37bccb/1366_2000/450_1000.jpeg"
          />
        </Link>

        <Link to="/workingOn">
          <GenreBadge
            title="Fantasy"
            src="https://cdn.forbes.co/2021/05/El-sen%CC%83or-de-los-anillos-Golum-Foto-Cortesia-1000x600.jpg"
          />
        </Link>
      </div>
    );
  }
}

export default GenresContainer;
