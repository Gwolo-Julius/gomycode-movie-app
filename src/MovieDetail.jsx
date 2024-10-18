import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "./movies";


const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  return (
    <div className="movie-detail">
      {movie ? (
        <>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <div className="trailer">
            <iframe
              width="560"
              height="315"
              src={movie.trailer}
              title={movie.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Link to="/">Back to Home</Link>
        </>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default MovieDetail;
