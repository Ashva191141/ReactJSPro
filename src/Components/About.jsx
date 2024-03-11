import React from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container"> 
        <div className="about-section-text-container">
            <p className="primary-subheading">Welcome to Urban Hotel</p>
            <h1 className="primary-heading">
             Where City Sophistication and Tranquil Luxury Converge.
            </h1>
            <p className="primary-text" >
             Step into UrbanVibe Hotel, where modern luxury harmonizes with urban energy. Discover a haven that transcends ordinary stays, offering chic accommodations, exceptional dining, and a vibe that resonates with the rhythm of the city. Your journey begins at the intersection of style and serenity.
            </p>
        </div>
        <div className="about-section-image-container">
        <img src={AboutBackground} alt ="" />
            <img src={AboutBackgroundImage} alt ="" />
        </div>
    </div>
  );
};

export default About;