import { useState, useEffect } from "react";

import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com?apikey=a9ab7f9d';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getPrviousSearchedMovie = localStorage.getItem('searchTerm');

  useEffect(() => {
    // Load last searched movie
    searchMovies(getPrviousSearchedMovie)
  }, [getPrviousSearchedMovie]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    console.log(data.Search);
    setMovies(data.Search);
  }

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='Search'
          onClick={() => {
            searchMovies(searchTerm)
            localStorage.setItem('searchTerm', searchTerm)
          }}
        />
      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              {
                movies.map((movie) => {
                  return <MovieCard key={movie.imdbID} mov={movie} />
                })
              }
            </div>
          )
          : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;
