import React from 'react';
import { FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import './style/Foter.css';

const Footer = () => {
    return (
        <div className="footer" id='footer'>
            <div className="footer_container">
                <div className="footer_head">
                    <h1>Get in Touch</h1>
                </div>
                <div className="footer_icon">
                <a href="https://www.instagram.com/krishnaa.192/" className="f-icon"> 
                <FaInstagramSquare  />
                </a>
                    <a href="https://twitter.com/Krishna68717192" className="f-icon"> 
                     <FaTwitterSquare /></a>
                    <a href="https://www.linkedin.com/in/krishna-upadhyay192/" className="f-icon"> 
                    <FaLinkedin/>
                    </a>
                    <a href='https://github.com/krishnaa192' className="f-icon" >
                    < FaGithubSquare  />
                    </a>
                <a href="https://www.facebook.com/krishnaupadhyayyy" className="f-icon">
                    <BsFacebook />
                </a>

            </div>
            <div className="footer_content">
                <p>© 2024 Krishna Upadhyay</p>
            </div>
        </div>
        </div>
     
    )
}
export default Footer;