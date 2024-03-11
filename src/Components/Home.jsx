import React from 'react';
import Navbar from "./Navbar";
import BannerImage from "../Assets/home-banner-image.png";

const Home = () => {
  return ( 
    <div className='home-container' >
       <Navbar/> 
        <div className="home-banner-container">
            <div className="home-text-section">
                   <h1 className="primary-heading">
                   Welcome to UrbanVibe Hotel
                   </h1>
                   <p>Modern Comfort, Timeless Elegance</p>
            </div>
            <div className="home-image-container">
                <img src={BannerImage} alt="" />

            </div>
        </div>
    </div>
  );
};

export default Home;