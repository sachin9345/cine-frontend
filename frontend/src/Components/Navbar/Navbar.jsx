import React from 'react';
import './Navbar.css';
//import sitelogo from '../../../public/Assets/SiteLogo.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <div className="logo">
        <img src="/Assets/SiteLogo.svg" alt="Star Movie Poster" />
      </div>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={({ isActive }) => isActive ? "active" : ""}>Movies</NavLink>
          </li>
          <li>
            <NavLink to="/private" className={({ isActive }) => isActive ? "active" : ""}>Private Screening</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contactus" className={({ isActive }) => isActive ? "active" : ""}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
