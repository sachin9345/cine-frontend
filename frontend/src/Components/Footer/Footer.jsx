import React from 'react';
import './Footer.css'; // Import your CSS file
//import Sitelogo from './Assets/SiteLogo.png';
//import icons from './Assets/icons.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="container">
    <div className="logofoo">
        <div className="sitelogofoo">
            <img src="/Assets/SiteLogo.svg" alt="logo"/>
        </div>
        
        <div className="icons">
             <img src="/Assets/icons.png" alt="icons"/>
        </div>
    </div>
    <hr/>
    </div>
   
        <div className="about">
          
            <div className="aboutrow">
                <div className="aboutus ">
                    <h3>About US</h3>
                    <p>Welcome to our theatre, where storytelling meets spectacle! Our passion lies in bringing dynamic performances to life, offering unforgettable experiences that captivate and inspire audiences. From timeless classNameics to cutting-edge productions, we are dedicated to fostering a vibrant cultural hub that celebrates the magic of live theatre. Join us for an evening of exceptional artistry and let your imagination soar.</p>
                    <p className="copyright">Copyrights @2024 Ajantha Cinemas. All Rights Reserved.</p>
                </div>
                <div className="optionscol">
                    <ul>
                        <li><a href="ss">Home</a></li>
                        <li><a href="ss">Movie</a></li>
                        <li><a href="ss">Gallery</a></li>
                        <li><a href="ss">Private Screening</a></li>
                        <li><a href="ss">ContactUs</a></li>
                        <Link to='/admin/dashboard' >Admin</Link>
                      </ul>
                </div>
                <div className="addresscol">
                    <div className="address">
                        <h2>Address</h2>
                        <p>Ajantha Ellora Cinemas,<br/>
                            Sengunthapuram, Karur, Tamil Nadu 639002</p>
                    </div>
                    <div className="dev">
                        <h2>Developed by</h2>
                        <p>Eight Bit Technologies</p>
                    </div>
                   
                   
                  </div>
            </div>
      </div>
     
</div>
  );
};

export default Footer;
