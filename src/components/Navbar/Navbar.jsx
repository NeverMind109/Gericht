import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <nav className="navbar">
    <a className="navbar__logo" href="/">
      <img className="navbar__logo-img"  src={images.gericht} alt="Logo"/>
    </a>
    <ul className="navbar__menu">
      <li className="navbar__menu-item">
        <a className="p-opensans navbar__menu-link" href="#home">Home</a>
      </li>
      <li className="navbar__menu-item">
        <a className="p-opensans navbar__menu-link" href="#about">About</a>
      </li>
      <li className="navbar__menu-item">
        <a className="p-opensans navbar__menu-link" href="#menu">Menu</a>
      </li>
      <li className="navbar__menu-item">
        <a className="p-opensans navbar__menu-link" href="#awards">Awards</a>
      </li>
      <li className="navbar__menu-item">
        <a className="p-opensans navbar__menu-link" href="#contact">Contact</a>
      </li>
    </ul>
    <div className="navbar__buttons">
      <button className="p-opensans navbar__btn" type="button">Log in / registration</button>
      <div className="navbar__decor" />
      <button className="p-opensans navbar__btn" type="button">book table</button>
    </div>
    <div className="navbar__mobile">
      <GiHamburgerMenu color="fff" fontSize={27} onClick={() => setToggleMenu(true)}/>
        {toggleMenu && ( 
          <div className="navbar__mobile-overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu className="navbar__mobile-close" fontSize={27} onClick={() => setToggleMenu(false)} />
            <ul className="navbar__mobile-menu">
              <li className="navbar__menu-item">
                <a className="navbar__menu-link" href="#home" onClick={() => setToggleMenu(false)}>Home</a>
              </li>
              <li className="navbar__menu-item">
                <a className="navbar__menu-link" href="#about" onClick={() => setToggleMenu(false)}>About</a>
              </li>
              <li className="navbar__menu-item">
                <a className="navbar__menu-link" href="#menu" onClick={() => setToggleMenu(false)}>Menu</a>
              </li>
              <li className="navbar__menu-item">
                <a className="navbar__menu-link" href="#awards" onClick={() => setToggleMenu(false)}>Awards</a>
              </li>
              <li className="navbar__menu-item">
                <a className="navbar__menu-link" href="#contact" onClick={() => setToggleMenu(false)}>Contact</a>
              </li>
            </ul>
          </div>
        )}
    </div>
  </nav>
  )
};

export default Navbar;
