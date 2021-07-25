import React from 'react';
import './Landingpage.scss';

export default function LandingPage() {
  return (
    <div className="header">
      <div className="header__logo-container">
        <h1 className="header__logo">{`{C.A}`}</h1>
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Design</span>
          <span className="heading-primary--sub">if you are looking for style, the search is over.</span>
        </h1>

        <a href="#" className='btn btn--white btn--animated'>My Work</a>
      </div>
    </div>
  );
}
