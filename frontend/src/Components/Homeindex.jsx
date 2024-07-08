import React from 'react'
import Home from './Home/Home'
import NowPlaying from './Nowshowing/Nowshowing'
import Design from './Design/Design'
import UpcomingMovies from './upcoming/Upcoming'
import Footer from './Footer/Footer'

const Homeindex = () => {
  return (
    <div>
     <Home/>
        <NowPlaying />
     <Design/>

     <UpcomingMovies/>
     <Footer/>
    </div>
  )
}

export default Homeindex
