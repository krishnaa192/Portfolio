// Home.js
import React from "react";
import Main from './Main';
import Skills from './Section';
import Contact from './Contact';
import Project from './Projects'
import Education from "./Education";
import './style/home.css';

const Home = () => {
  return (
    <div id="home">
     
      <Main />
      <Education  />
      <Skills />
      <Contact />
      <Project />

    </div>
  );
};

export default Home;
