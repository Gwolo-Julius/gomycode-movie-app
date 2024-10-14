import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="card-wrapper">
      <div className="movie-card">
        <img className="movie-img" src={movie.posterURL} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p className="movie__desc">{movie.description}</p>
        <p className="rating">Rating: {movie.rating}/10</p>
      </div>
    </div>
  );
};

export default MovieCard;
