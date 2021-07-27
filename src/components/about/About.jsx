import './About.scss';
import abstractBlack from '../../assets/img/pexelblackabstract.jpeg';
import abstractWhite from '../../assets/img/pexelwhiteabstract.jpeg';
import abstractColor from '../../assets/img/pexelbrightabstract.jpeg';

export default function About() {
  return (
    <div>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Some of my projects</h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Front-End developer
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In saepe magni, ex deleniti autem sequi numquam expedita accusamus illum fuga voluptatem corrupti id alias quas, dignissimos voluptatum reiciendis incidunt dolorum.
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">
            Passionate Learner
            </h3>
            <p className="paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab at, velit iusto, laborum nemo perferendis atque mollitia non exercitationem omnis molestiae beatae quod dignissimos. Omnis, impedit. Nihil debitis veritatis voluptas?
            </p>

            <a href="#" className="btn-text">My Portfolio &rarr;</a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img src={abstractBlack} alt="abstract 1" className="composition__photo composition__photo--p1"/>
              <img src={abstractWhite} alt="abstract 2" className="composition__photo composition__photo--p2"/>
              <img src={abstractColor} alt="abstract 3" className="composition__photo composition__photo--p3"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
