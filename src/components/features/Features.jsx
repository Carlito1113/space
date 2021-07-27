import '../../App.scss';
import './Features.scss';

import React from 'react';

export default function Features() {
  return (
    <div>
      <section className="section-features">
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <i class="fab fa-github feature-box__icon"></i>
              <h3 className="heading-tertiary">My Github</h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus enim minima dolore accusamus omnis! Dolor eius fuga placeat at distinctio sint ipsam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
