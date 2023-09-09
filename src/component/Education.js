import SchoolIcon from '@mui/icons-material/School';
import React from 'react';
import './style/Education.css';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


const Education = () => {
    return (
        <div className="education" id='education'>
            <h2>  <SchoolIcon className="education-icon" />Education</h2>
            <div className="education-main">
                <div className="education-container">
                    <div className="education-Head">
                        <AccountBalanceIcon className="education__icon" />
                        Bachelor of Engineering  <br />
   
                    </div>
                    <div className="education-text">
                        <h3>Sir M Visvesaraiya Institue of Technology</h3>
                        <span>Electronics and Communication Engineering</span>
                        <h4>Affiliated to V.T.U University</h4>
                    </div>
                    <div className="education-location">
                        Bangalore, Karnataka,India
                    </div>
                    <div className='education-duration'>
                        <p>2020-2024</p>
                    </div>
                </div>
                <div className="education-container">
                    <div className="education-Head">
                        <AccountBalanceIcon className="education__icon" />
                       Intermediate(10+2) <br />

                    </div>
                    <div className="education-text">
                        <h3>Reliance Academy </h3>
                        <span>Physics ,chemistey and Mathematics(PCM)</span>
                        <h4>Affiliated to CBSE Board</h4>
                    </div>
                    <div className="education-location">
                        Gorakhpur, Uttar Pradesh ,India
                    </div>
                    <div className='education-duration'>
                        <p>2017-2019</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Education;