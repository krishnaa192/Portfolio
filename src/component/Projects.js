import React from "react";
import './style/projects.css';
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import { BiLogoDjango } from 'react-icons/bi';
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import {SiSpotify} from 'react-icons/si';
import { LuBrainCircuit } from 'react-icons/lu';
import {SiFlask} from 'react-icons/si';
import { SiMysql } from 'react-icons/si';


const Project = () => {
  return (
    <div className="mains" id="project">
      <h2> <LaptopChromebookIcon className="project-icons" />  Projects</h2>
      <div className="project-main">
        <div className="project-container">
          <div className="project-head">
          Blogme
          </div>
          <div className="project-icon">
            <HtmlIcon className="icon" />
            <CssIcon className="icon" />
            <BiLogoDjango className="icon" />
            <BiLogoPostgresql className="icon" />
          </div>
          <div className="project-description">
            <p>
            This project is a blog app where users can post and read others blogs.
            A proper profile page is dedicated to the user and reader.
            I have used HTML and CSS. I have used Python Django for the backend and Mysql lite for the database..
            </p>
            <div className="project-link">
              <ul>
                <li><a href="https://github.com/krishnaa192/Blogme"><GitHubIcon className="link-icon" /></a></li>
                <li><a href="krishna192.pythonanywhere.com/"><CodeIcon className="link-icon" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-head">
          Funzi
          </div>
          <div className="project-icon">
            <HtmlIcon className="icon" />
            <JavascriptIcon className="icon" />
            <CssIcon className="icon" />
            <BiLogoDjango className="icon" />
            <FaReact className="icon" />  
            <FaReact className="icon" />
            <SiSpotify className="icon" />

          </div>
          <div className="project-description">
            <p>
            This project is based on Spotify API.
A group of people can hang out while listening to music based on their choice.
Skipping can be done based on votes. Here in this project, 
I have used Reactjs and Django along with Rest API
            </p>
            <div className="project-link">
              <ul>
                <li><a href="https://github.com/krishnaa192/Funzi"><GitHubIcon className="link-icon" /></a></li>
                {/* <li><a href="#"><CodeIcon className="link-icon" /></a></li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-head">
          Employee-Churn-Predication
          </div>
          <div className="project-icon">
            <HtmlIcon className="icon" />
            <CssIcon className="icon" />
           <LuBrainCircuit className="icon" />
           <SiFlask className="icon" />

          </div>
          <div className="project-description">
            <p>
          The goal is to proactively identify employees who are at a high risk 
          of leaving the company and take appropriate measures to retain them
       
            </p>
            <div className="project-link">
              <ul>
                <li><a href="https://github.com/krishnaa192/Employee_churn-ML-project"><GitHubIcon className="link-icon" /></a></li>
                {/* <li><a href="#"><CodeIcon className="link-icon" /></a></li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-head">
          Hiring
          </div>
          <div className="project-icon">
            <HtmlIcon className="icon" />
            <JavascriptIcon className="icon" />
            <CssIcon className="icon" />
            <BiLogoDjango className="icon" />
            <FaReact className="icon" />
            <SiMysql className="icon" />

          </div>
          <div className="project-description">
            <p>Created a Hiring Application using Django, React and SQL.
Employees can apply for
 their jobs and can interact directly with the
recruiter Job Search can be done based on a filter.
            </p>
            <div className="project-link">
              <ul>
                <li><a href="https://github.com/krishnaa192/Hiring"><GitHubIcon className="link-icon" /></a></li>
                {/* <li><a href="#"><CodeIcon className="link-icon" /></a></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;