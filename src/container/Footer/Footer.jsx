import React from 'react';
import { FooterOverlay, Newsletter } from '../../components'
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className="footer section-padding">
    <FooterOverlay />
    <Newsletter />

    <div className="footer__cols">
      <div className="footer__col">
        <h3 className="footer__title">Contact Us</h3>
        <ul className="footer__list">
          <li className="p-opensans footer__item footer__item--margin">9 W 53rd St, New York, NY 10019, USA</li>
          <li className="p-opensans footer__item">+1 212-344-1230</li>
          <li className="p-opensans footer__item">+1 212-555-1230</li>
        </ul>
      </div>
      <div className="footer__col footer__logo">
        <img className="footer__logo-img" src={images.gericht} alt="Logo" />
        <p className="p-opensans footer__descr">"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img className="footer__spoon" src={images.spoon} alt="Spoon" />
        <div className="footer__social">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="footer__col">
      <h3 className="footer__title">Working Hours</h3>
      <ul className="footer__list">
          <li className="p-opensans footer__item">Monday-Friday:</li>
          <li className="p-opensans footer__item footer__item--margin">08:00 am - 12:00 am</li>
          <li className="p-opensans footer__item">Saturday-Sunday:</li>
          <li className="p-opensans footer__item footer__item--margin">07:00am - 11:00 pm</li>
        </ul>
      </div>
    </div>
    <p className="p-opensans footer__copy">2021 Gerícht. All Rights reserved.</p>
  </div>
);

export default Footer;
