import React from 'react';

import { SubHeading } from '../../components';
import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className="app-wrapper header section-padding" id='home'>
    <div className="app-wrapper__info header__info">
      <SubHeading title="Chase the new Flavour"/>
      <h1 className="header__title">The key to Fine dining</h1>
      <p className="p-opensans header__descr">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.</p>
      <button className="btn-custom header__btn" type="button">Explore Menu</button>
    </div>
    <div className="app-wrapper__image header__image">
      <img className="header__img"  src={images.welcome} alt=""/>
    </div>
  </div>
);

export default Header;
