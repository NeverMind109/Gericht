import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className="app-bg flex-center about-us section-padding" id="about">
    <div className="flex-center about-us__overlay">
      <img className="about-us__bg"  src={images.G} alt=""/>
    </div>
    <div className="flex-center about-us__wrapper">
      <div className="about-us__content about-us__about">
        <h2 className="headtext-cormorant about-us__title">About Us</h2>
        <img className="about-us__icon" src={images.spoon} alt="Spoon" />
        <p className="p-opensans about-us__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <a className="btn-custom about-us__link" href="/">Know More</a>
      </div>

      <div className="flex-center about-us__image">
        <img className="about-us__img"  src={images.knife} alt="Knife"/>
      </div>

      <div className="about-us__content about-us__history">
        <h2 className="headtext-cormorant about-us__title">Our History</h2>
        <img className="about-us__icon" src={images.spoon} alt="Spoon" />
        <p className="p-opensans about-us__descr">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <a className="btn-custom about-us__link" href="/">Know More</a>
      </div>
    </div>
  </div>
);

export default AboutUs;
