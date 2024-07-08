import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Nowshowing.css';


const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 3;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/api/v1/cinedatas');
        setMovies(response.data.cinema);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  if (loading) {
    return <div className="loading">l</div>;
  }

  if (error) {
    return <div className="error">{`Error: ${error}`}</div>;
  }

  const startIndex = (currentPage - 1) * moviesPerPage;
  const selectedMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  return (
    <div className="now-playing-container" id="movies">
      <h2>MOVIES</h2>
      <h3>Now Showing</h3>
      <div className="movies-grid">
        {selectedMovies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={movie.posterimage} alt={movie.name} className="movie-poster" />
            <div className="movie-details">
              <h4>{movie.name}</h4>
              <p>{movie.language}</p>
              <a href={movie.bookinglink} className="book-ticketss" target="_blank" rel="noopener noreferrer">
                Book Tickets
              </a>
            </div>
          </div>
        ))}
      </div>
      {movies.length > moviesPerPage && (
        <div className="navigation-buttons">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
