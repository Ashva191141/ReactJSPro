import React from 'react';
import DiningImage from '../Assets/DiningImage.png';
import { FiArrowRight } from 'react-icons/fi';


const Dining = () => {
  return  (
    <div className="about-section-container"> 
        <div className="about-section-text-container">
            <p className="primary-subheading">DINING</p>
            <h1 className="primary-heading">
             Urban Bistro
            </h1>
            <h3>A Culinary Journey Through City Life</h3>
            <p className="primary-text" >
            Nestled within the bustling embrace of UrbanVibe Hotel, Urban Bistro emerges as a vibrant culinary haven, where the rhythm of city life harmonizes with the artistry of gastronomy. This bistro is more than a dining space; it's a celebration of flavors, an exploration of creativity, and a communal gathering spot that reflects the spirit of the metropolis.
            <br/>
            <br/>
            Step into Urban Bistro, and you're enveloped in a contemporary oasis where modern aesthetics merge seamlessly with a welcoming charm. The interior is a tapestry of urban sophistication, featuring sleek lines, comfortable furnishings, and a palette that echoes the diverse hues of city life. Oversized windows invite the natural light to dance across the space during the day, while ambient lighting creates an intimate, convivial atmosphere as evening descends.
            </p><br/>
            <br/>
            <button className='primary-button'>
                DISCOVER DINING <FiArrowRight />
            </button>
        </div>
        <div className="about-section-image-container">
        <img src={DiningImage} alt ="" />    
        </div>
    </div>
  );
};

export default Dining;