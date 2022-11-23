import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants'

import './FindUs.css'

const FindUs = () => (
  <div className="app-bg app-wrapper find section-padding" id="contact">
    <div className="app-wrapper__info find__content">
      <SubHeading title={'Contact'}/>
      <h2 className="headtext-cormorant find__title">Find Us</h2>
      <div className="find__content">
        <p className="p-opensans find__descr">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <ul className="find__address">
          <li className="p-cormorant find__address-item find__address-title">Opening Hours</li>
          <li className="p-opensans find__address-item">Mon - Fri: 10:00 am - 02:00 am</li>
          <li className="p-opensans find__address-item">Sat - Sun: 10:00 am - 03:00 am</li>
        </ul>
        <a className="btn-custom" href="/">Visit Us</a>
      </div>
    </div>
    <div className="app-wrapper__image find__image">
      <img className="find__img" src={images.findus} alt="Find Us" />
    </div>
  </div>
);

export default FindUs;
