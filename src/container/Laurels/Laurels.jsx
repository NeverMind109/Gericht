import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants'

import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <li className="laurels__item">
    <img className="laurels__item-img" src={imgUrl} alt="Award" />
    <div className="laurels__item-body">
      <h3 className="p-cormorant laurels__item-title">{title}</h3>
      <p className="p-cormorant laurels__item-subtitle">{subtitle}</p>
    </div>
  </li>
)

const Laurels = () => (
  <div className="app-bg app-wrapper laurels section-padding" id="awards">
    <div className="app-wrapper__info laurels__info">
      <SubHeading title={"Awards & recognition"} />
      <h2 className="headtext-cormorant laurels__title">Our Laurels</h2>

      <ul className="laurels__list">
        {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)}
      </ul>
    </div>
    <div className="app-wrapper__image laurels__image">
      <img className="laurels__img" src={images.laurels} alt="Laurels" />
    </div>
  </div>
);

export default Laurels;
