// src/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';


const Home = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/api/v1/cinedatas');
        setMoviesData(response.data.cinema);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true
  };

  if (loading) {
    return <div className="loading"></div>;
  }

  if (error) {
    return <div className="error">{`Error: ${error}`}</div>;
  }

  return (
    <div className="home-container" id="home">
      <Slider {...settings} className="slider">
        {moviesData.map((movie, index) => (
          <div className="slide" key={index}>
            <img src={movie.bannerimage} alt={movie.title} className="slide-image" />
            <img src="/Assets/overlay.png" alt="Overlay" className="overlay-image" />
            <div className="movie-info">
              <img src={movie.posterimage} alt={`${movie.name} Poster`} className="poster" />
              <div className="details">
                <h2>{movie.name}</h2>
                <p><span>Starring </span> {movie.starring}</p>
                <p><span>Directed By </span> {movie.directedby}</p>
                <div className="buttons">
                  <div className="play-trailer-container">
                    <img src="/Assets/play.png" alt="Play Icon" className="play-icon" />
                    <a href={movie.trailerlink} className="btn play-trailer"  target="_blank" rel="noopener noreferrer">Play Trailer</a>
                  </div>
                  <a href={movie.bookinglink} className="btn book-tickets"  target="_blank" rel="noopener noreferrer">Book Tickets</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
