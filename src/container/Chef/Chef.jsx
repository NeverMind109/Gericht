import React from 'react';
import { images } from "../../constants"
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app-bg app-wrapper chef section-padding">
    <div className="app-wrapper__image app-wrapper__image-reverse chef__image">
      <img className="chef__img" src={images.chef} alt="Chef" />
    </div>
    <div className="app-wrapper__info chef__info">
      <SubHeading title={"Chef's Word"} />
      <h2 className="headtext-cormorant chef__title">What we believe in</h2>
      <div className="chef__content">
        <div className="chef__quote">
          <img className="chef__quote-img" src={images.quote} alt="Quote" />
          <p className="p-opensans chef__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.</p>
        </div>
        <p className="p-opensans chef__text">auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      </div>
      <div className="chef__about">
        <span className="chef__name">Kevin Luo</span>
        <span className="chef__position">Chef & Founder</span>
        <img className="chef__sign" src={images.sign} alt="Chef's Sign" />
      </div>
    </div>
  </div>
);

export default Chef;
