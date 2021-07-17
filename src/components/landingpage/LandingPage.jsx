import React from 'react';
import './landingpage.css';

export default function LandingPage() {
  return (
    <div className="header">
      <div className="logo-container">
        <h1 className="logo">Carlito Algarin</h1>
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Design</span>
          <span className="heading-primary-sub">if you are looking for style, the search is over.</span>
        </h1>

        <a href="#" className='btn btn-white btn-animated'>Whoa! a BuTTon!</a>
      </div>
    </div>
  );
}