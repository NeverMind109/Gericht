import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  <div className="newsletter">
    <div className="newsletter__heading">
      <SubHeading title={"Newsletter"} />
      <h2 className="headtext-cormorant newsletter__title">Subscribe to Our Newsletter</h2>
      <p className="p-opensans newsletter__descr">And never miss latest Updates!</p>
      <form className="flex-center newsletter__form" action="#">
        <input className="newsletter__input"  type="email" placeholder='Enter your email address' required/>
        <button className="btn-custom newsletter__btn">Subscribe</button>
      </form>
    </div>
  </div>
);

export default Newsletter;
