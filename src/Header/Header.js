import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

export default class Header extends React.Component {

  render() {
    return (
      <header>
        <nav>
          <div className="logo">Sility</div>
          <div className="menu">
            <ul className="menu__bar">
              <NavLink exact to="/">
                <li className="menu__item">Home</li>
              </NavLink>
              <NavLink to="/about">
                <li className="menu__item">About</li>
              </NavLink>
              <NavLink to="/404">
                <li className="menu__item">Skill</li>
              </NavLink>
              <NavLink to="/404">
                <li className="menu__item">Experience</li>
              </NavLink>
              <NavLink to="/404">
                <li className="menu__item">Education</li>
              </NavLink>
              <NavLink to="/404">
                <li className="menu__item">Work</li>
              </NavLink>
              <NavLink to="/404">
                <li className="menu__item">Blog</li>
              </NavLink>
              <NavLink to="/404">
                <li className="menu__item">Contact</li>
              </NavLink>
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
