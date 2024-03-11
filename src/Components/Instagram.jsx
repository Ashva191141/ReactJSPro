import React from 'react';
import pic1 from '../Assets/pic1.png';
import pic2 from '../Assets/pic2.png';
import pic3 from '../Assets/pic3.png';
import pic4 from '../Assets/pic4.png';
import pic5 from '../Assets/pic5.png';
import pic6 from '../Assets/pic6.png';
import pic7 from '../Assets/pic7.png';
import pic8 from '../Assets/pic8.png';


const Instagram = () => {
    const InstagramData = [
        {
            image : pic1 ,
            title : "insta1",
        },
        {
            image : pic2 ,
            title : "insta2",
        },
        {
            image : pic3 ,
            title : "insta3",
        },
        {
            image : pic4 ,
            title : "insta4",
        },
        {
            image : pic5 ,
            title : "insta5",
        },
        {
            image : pic6 ,
            title : "insta6",
        },
        {
            image : pic7 ,
            title : "insta7",
        },
        {
            image : pic8 ,
            title : "insta8",
        }
    ]
  return (
    <div className='instagram-section-wrapper'>
        <h3>Follow us @Urbanvibe</h3>
        <h1>Captivating Vibes, Urban Elegance</h1>
        <div className='instagram-section-bottom'>
           {
            InstagramData.map((data) =>(
                <div className='instagram-section-info'>
                  <div className='info-boxes-img-container'>
                  <img src={data.image} alt="" />
                  </div>
                </div>

            ) ) 
           }
        </div>
    </div>
  );
};

export default Instagram;