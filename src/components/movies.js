import React from "react";
import propTypes from "prop-types";
import "./Movies.css";

const movies = ({ year, title, summary, poster, genres }) => {
  return (
    <div className="movie">
      <div className="movie__poster">
        <img src={poster} alt={title} title={title} />
      </div>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <ul className="movie__genres">
          {genres.map((genre, id) => (
            <li key={id} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
};

movies.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired
};

export default movies;
