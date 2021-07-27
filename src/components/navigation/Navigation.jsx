import './Navigation.scss';

export default function Navigation() {
  return (
    <div className='navigation'>
      <input type="checkbox" className="navigation-checkbox" id="navi-toggle"/> 

      <label htmlFor="navi-toggle" className="navigation__button">MENU</label>

      <div className="navigation__background">&nbsp;</div>
      
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item"><a href="#" className="navigation__link">Front Page</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link"></a>Portfolio</li>
          <li className="navigation__item"><a href="#" className="navigation__link"></a>Contacts</li>
        </ul>
      </nav>
    </div>
  )
}
