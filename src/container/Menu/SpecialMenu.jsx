import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants'

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="flex-center menu section-padding" id="menu">
    <div className="menu__heading">
      <SubHeading title="Menu that fits you palatte" />
      <h2 className="headtext-cormorant menu__title">Today's Special</h2>
    </div>
    <div className="menu__wrapper">

      <div className="flex-center menu__content">
        <h3 className="menu__category">Wine & Beer</h3>
        <ul className="menu__list">
          {data.wines.map((wine, idx) => (
            <MenuItem key={wine.title+idx} title={wine.title} price={wine.price} tags={wine.tags}/>
          ))}
        </ul>
      </div>

      <div className="menu__image">
        <img className="menu__img"  src={images.menu} alt="Menu"/>
      </div>

      <div className="flex-center menu__content">
        <h3 className="menu__category">Cocktails</h3>
          <ul className="menu__list">
            {data.cocktails.map((cocktail, idx) => (
              <MenuItem key={cocktail.title+idx} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>

            ))}
          </ul>
      </div>

    </div>
    <a className="btn-custom menu__link" href="/">View More</a>
  </div>
);

export default SpecialMenu;
