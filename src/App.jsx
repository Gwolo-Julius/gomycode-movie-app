import { useState } from "react";
import Filter from "./Components/Filter";
import MovieList from "./Components/MovieList";
import interstella from "./assets/interstella.png";
import Inception from "./assets/inception.png";
function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: Inception,
      rating: 10,
    },
    {
      title: "Interstellar",
      description: "A journey through space and time.",
      posterURL: interstella,
      rating: 9,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 1,
  });

  const handleTitleFilter = (title) => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      )
    );
  };

  const handleRatingFilter = (rating) => {
    setFilteredMovies(movies.filter((movie) => movie.rating >= rating));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 1 });
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          Movie<span>Hour</span>
        </div>
      </div>
      <div className="App container">
        <h1>Movie App</h1>

        <Filter
          handleTitleFilter={handleTitleFilter}
          handleRatingFilter={handleRatingFilter}
        />

        <MovieList movies={filteredMovies} />

        <div className="add-movie">
          <h2>Add a new movie</h2>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newMovie.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newMovie.description}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="posterURL"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            min="1"
            max="10"
            value={newMovie.rating}
            onChange={(e) =>
              setNewMovie({ ...newMovie, rating: Number(e.target.value) })
            }
          />
          <button className="add__btn" onClick={handleAddMovie}>
            Add Movie
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
