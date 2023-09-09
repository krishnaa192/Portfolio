import React from 'react';
import './style/Main.css';
import me from './img/my.jpeg';
import Resume from './img/Krishna_resume.pdf';
import Button from '@mui/material/Button';

const Main = () => {
  return (
    <div className="main">
      <div className="main_container">
        <div className="main_img">
          <img src={me} alt="img" />
        </div>
        <div className="main_content">
          <div className="text">
            <p>Hello Everyone!</p>
            <p>I am Krishna Upadhyay</p>
            {/* <p>Full Stack Developer</p> */}
            <span>(Django and React-js Developer)</span>
            <div className="button">
              {/* <Button variant="contained" color="primary">
                Hire me
              </Button> */}
              <Button variant="contained" color="secondary">
              <a
          href={Resume} 
          download="resume.pdf">
          Get Resume 
        </a> 
     
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
