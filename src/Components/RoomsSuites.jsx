import React from 'react';
import RoomImage from '../Assets/rooms.png';
import { FiArrowRight } from 'react-icons/fi';
 

const RoomsSuites = () => {
  return (
    <div className="about-section-container"> 
        <div className="about-section-text-container">
            <p className="primary-subheading">Rooms & Suites</p>
            <h1 className="primary-heading">
            Skyline Penthouse
            </h1>
            <p className="primary-text" >
            Indulge in the epitome of luxury with our Skyline Penthouse. This expansive and opulent suite is positioned at the zenith of UrbanVibe Hotel, providing unparalleled panoramic views of the city's skyline. The spacious living area is adorned with contemporary furnishings and exclusive amenities, ensuring a lavish and memorable stay.
            </p>
            <p>
            <li>Size: 75 sqm </li>
            <li>Occupancy: Up to 5 people</li>
            <li>Price: Starting from $500 per night</li>
            </p><br/>
            <br/>
            <button className='primary-button'>
                DISCOVER ROOMS <FiArrowRight />
            </button>
        </div>
        <div className="about-section-image-container">
            <img src={RoomImage} alt ="" />
        </div>
    </div>
  );
};

export default RoomsSuites;