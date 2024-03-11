import React from 'react';
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-icons'>
              <BsTwitter/>
              <SiLinkedin/>
              <BsYoutube/>
              <FaFacebookF/>
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                 <span>HOME</span>
                 <span>OUR STORY</span>
                 <span>OUR SUITES</span>
                 <span>CUSINE</span>
                 <span>WELLNESS</span>
                 <span>OFFER</span>
                 <span>CONTACT US</span>
            </div>
        </div>

    </div>
  );
};

export default Footer;