import React from 'react';
import { images } from '../../constants';

import './subheading.css'

const SubHeading = ({ title }) => (
  <div className="subheading">
    <p className="p-cormorant">{title}</p>
    <img className="spoon-img" src={images.spoon} alt="Spoon" />
  </div>
);

export default SubHeading;
