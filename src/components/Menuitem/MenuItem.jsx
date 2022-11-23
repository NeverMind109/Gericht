import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <li className="menu__item menu-item">
    <div className="menu-item__header">
      <div className="menu-item__title-wrapper">
        <h4 className="p-cormorant menu-item__title">{title}</h4>
      </div>

      <div className="menu-item__dash"/>

      <div className="menu-item__price-wrapper">
        <span className="p-cormorant menu-item__price">{price}</span>
      </div>

    </div>
    <div className="menu-item__tags-wrapper">
      <p className="p-opensans menu-item__tags">{tags}</p>
    </div>
  </li>
);

export default MenuItem;
