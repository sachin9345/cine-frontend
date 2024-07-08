// UpcomingMovies.js
import React, { Fragment, useState } from 'react';
import './Upcoming.css';
//import play from '../Assets/play.png';
//import features from '../Assets/features.png';


const movies = [
  {
    title: "Kanguva",
    language: "Tamil",
    image: "/Assets/Frame123.png",
    trailerLink: "https://youtu.be/ByCDEmNig7Q?si=J7zJ6jocyhbuFgNx"
  },
  {
    title: "Thangalaan",
    language: "Tamil",
    image: "/Assets/Frame124.png",
    trailerLink: "https://youtu.be/W3A2mQdCS6g?si=I45-f1Ab9OGMW0Bg"
  },
  {
    title: "Joker: Felix a",
    language: "English",
    image: "/Assets/Frame125.png",
    trailerLink: "#"
  }
];

const UpcomingMovies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? movies.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= movies.length ? 0 : prevIndex + 1));
  };

  return (
    <Fragment>
    <div className="upcoming-movies" >
      <h2>Upcoming Movies</h2>
      <div className="movies-container">
        <button className="nav-button prev" onClick={handlePrevClick}>‹</button>
        <div className="movies-list" style={{ transform: `translateX(-${currentIndex * (220 + 100)}px)` }}>
          {movies.map((movie, index) => (
            <div className="movie-cards" key={index}>
              <img src={movie.image} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.language}</p>
              <div className="maincontainer">
              <div className="play-trailer-container">
                    <img src="/Assets/play.png" alt="Play Icon" className="play-icon" height="20px"/>
                    <a href={movie.trailerLink} className="btn play-trailer">Play Trailer</a>
             </div>
              </div>
              
            </div>
            
          ))}
        </div>
        
        <button className="nav-button next" onClick={handleNextClick}>›</button>
      </div>
     
    </div>
    <div className="features">
    <img src="/Assets/features.png" alt='ff' />
    </div>

     </Fragment>
  );
};

export default UpcomingMovies;
