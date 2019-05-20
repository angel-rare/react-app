import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export default class Header extends React.Component {

  render() {
    return (
      <header>
        <nav>
          <div className="logo">Sility</div>
          <div className="menu">
            <ul className="menu__bar">
              <Link to={'/'}><li className="menu__item">Home</li></Link>
              <Link to={'/about'}><li className="menu__item">About</li></Link>
              <Link to={'/'}><li className="menu__item">Skill</li></Link>
              <Link to={'/'}><li className="menu__item">Experience</li></Link>
              <Link to={'/'}><li className="menu__item">Education</li></Link>
              <Link to={'/'}><li className="menu__item">Work</li></Link>
              <Link to={'/'}><li className="menu__item">Blog</li></Link>
              <Link to={'/'}><li className="menu__item">Contact</li></Link>
            </ul>
            <a className="menu__btn" href="#">
              Menu
              <i className="fa fa-bars" aria-hidden="true"></i>
            </a>
            <a className="menu__action" href="#">+</a>
          </div>
        </nav>
      </header>
    );
  }
}
