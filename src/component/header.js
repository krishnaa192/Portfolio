import React, { useState } from 'react';
import './style/header.css';
import Close from '@mui/icons-material/Close';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={`header ${menuVisible ? 'menu-active' : ''}`}>
      <div className="header_logo">
        <h1>Krishna Upadhyay</h1>
      </div>
      <nav>
        <ul>
          <div className="closed">
            <Close className='close' onClick={toggleMenu} />
          </div>
          {/* Use conditional rendering to show/hide the menu */}
          {menuVisible && (
            <li>
              <a href="#home"><b>Home</b></a>
            </li>
          )}
          {menuVisible && (
            <li>
              <a href="#section"><b>Skills</b></a>
            </li>
          )}
          {menuVisible && (
            <li>
              <a href="#contact"><b>Contact</b></a>
            </li>
          )}
          {menuVisible && (
            <li>
              <a href="#project"><b>Project</b></a>
            </li>
          )}
           {menuVisible && (
            <li>
              <a href="#education"><b>Education</b></a>
            </li>
          )}
        </ul>
      </nav>
      <div className="changer">
        <MenuBookOutlinedIcon className="menu" onClick={toggleMenu} />
      </div>
    </div>
  );
}

export default Header;
