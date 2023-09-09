import React from 'react';
import './style/section.css';
import {TbBrandDjango} from 'react-icons/tb';
import { FaReact, FaJava,FaHtml5,FaCss3 , FaPython, FaBootstrap,FaGithub ,FaTools,FaJs} from 'react-icons/fa';

import { TbBrandRedux ,TbBrandVscode} from 'react-icons/tb';
import { SiPostman,SiMysql } from 'react-icons/si';
import { LuBrainCircuit } from 'react-icons/lu';
import { BiBookReader } from 'react-icons/bi';
import {AiOutlineCode} from 'react-icons/ai';
import {MdFilterFrames} from 'react-icons/md';
import c2 from './img/c2.jpg';

const Section = () => {
  return (

    <div className='section' id='section'>
      <div className='section_container'>
        <div className='section_left'>
        <img src={c2} alt="img" />
        </div>
        <div className='section_content'>
          <h2> <BiBookReader className='main-logo' />What I do!</h2>

          <div className="skill-section">
            <div className="language">
              <h3>  <AiOutlineCode className='main-logo'/>Languages I know </h3>
              <div className="language-list">
                <p>
                  <div className="subskill">
                    <div className="subskill-icon">
                      <FaPython className="skill-icon" />
                    </div>
                    <div className="subskill-name">
                      Python
                    </div>
                  </div>
                </p>
                <p>
                  <div className="subskill">
                    <div className="subskill-icon">
                      <FaJava className="skill-icon" />
                    </div>
                    <div className="subskill-name">
                      Java
                    </div>
                  </div>
                </p>
                <p>
                  <div className="subskill">
                    <div className="subskill-icon">

                      <FaJs className="skill-icon" />
                    </div>
                    <div className="subskill-name">
                      JavaScript
                    </div>
                  </div>
                </p>
                <p>
                  <div className="subskill">
                    <div className="subskill-icon">
                      <FaHtml5 className="skill-icon" />
                    </div>
                    <div className="subskill-name">
                      HTML
                    </div>
                  </div>
                </p>
                <p>
                  <div className="subskill">
                    <div className="subskill-icon">
                      <FaCss3 className="skill-icon" />
                    </div>
                    <div className="subskill-name">
                      CSS
                    </div>
                  </div>
                </p>
                <p>
                  <div className="subskill">
                    <div className="subskill-icon">
                      <SiMysql className="skill-icon" />
                    </div>
                    <div className="subskill-name">
                      MySQL
                    </div>
                  </div>
                </p>
              </div>

            </div>
            <div className="framework">
              <h3> <MdFilterFrames className='main-logo'/>    Frameworks I use</h3>
              <div className="framework-list">

                <p>
                  <div className="subskill">
                    <div className="subskill-icon">
                      <TbBrandDjango className="skill-icon" />
                    </div>
                    <div className="subskill-name">
                      Django
                    </div>
                  </div>
                </p>
                <p>
                  <div className="subskill">
                    <div className="subskill-icon">
                      <FaReact className="skill-icon" />
                    </div>
                    <div className="subskill-name">
                      React js
                    </div>
                  </div>
                </p>
                <p>
                  <div className="subskill">
                    <div className="subskill-icon">
                      <FaBootstrap className="skill-icon" />
                    </div>
                    <div className="subskill-name">
                      Bootstrap
                    </div>
                  </div>
                </p>
                <p>
                  <div className="subskill">
                    <div className="subskill-icon">
                      <TbBrandRedux className="skill-icon" />
                    </div>
                    <div className="subskill-name">
                      Redux
                    </div>
                  </div>
                </p>
              </div>
            </div>
            <div className="tools">
              <h3>   <FaTools className='main-logo'/>  Tools and Other skills  I use</h3>
              <div className="tools-list">
                <p>
                  <div className="subskill">
                    <div className="subskill-icon">
                      <FaGithub className="skill-icon" />
                    </div>
                    <div className="subskill-name">
                      Git
                    </div>
                  </div>
                </p>
                <p>
                  <div className="subskill">
                    <div className="subskill-icon">
                      <SiPostman className="skill-icon" />
                    </div>
                    <div className="subskill-name">
                      Postman
                    </div>
                  </div>
                </p>

                <p>
                  <div className="subskill">
                    <div className="subskill-icon">
                      <TbBrandVscode className="skill-icon" />
                    </div>
                    <div className="subskill-name">
                      VS Code
                    </div>
                  </div>
                </p>
                <p>
                  <div className="subskill">
                    <div className="subskill-icon">
                      <LuBrainCircuit className="skill-icon" />
                    </div>
                    <div className="subskill-name">
                      Machine Learning
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Section;
