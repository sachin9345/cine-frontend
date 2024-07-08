import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, Button } from '@mui/material';
import EditMovieDialog from './EditMovieDialog';
import './MovieListStyles.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMovie, setEditMovie] = useState(null);

  // Define fetchMovies function
  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/v1/cinedatas');
      setMovies(response.data.cinema);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Call fetchMovies function when component mounts
    fetchMovies();
  }, []);

  const handleDelete = async (_id) => {
    // Confirm deletion
    const confirmDelete = window.confirm('Are you sure you want to delete this movie?');
    if (!confirmDelete) {
      return; // Don't proceed with deletion if user cancels
    }

    try {
      setLoading(true);
      await axios.delete(`/api/v1/admin/cinema/${_id}`);
      // Fetch movies after deleting
      fetchMovies();
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div className="error">{`Error: ${error}`}</div>;
  }

  return (
    <div className="movie-list-container">
      <h2>MOVIES</h2>
      <div className="movies-grid">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={movie.posterimage} alt={movie.name} className="movie-poster" />
            <div className="movies-details">
              <h4>{movie.name}</h4>
              <p>{movie.language}</p>
              <div className="button-group">
                <Button onClick={() => setEditMovie(movie)}>Edit</Button>
                <Button onClick={() => handleDelete(movie._id)}>Delete</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {editMovie && <EditMovieDialog movie={editMovie} onClose={() => setEditMovie(null)} onSave={fetchMovies} />}
    </div>
  );
};

export default MovieList;
