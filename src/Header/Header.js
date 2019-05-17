import React from 'react';
import { changeExt } from 'upath';
import './Header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <nav>
          <div class="logo">Sility</div>
          <div class="menu">
            <ul class="menu__bar">
              <li class="menu__item">Home</li>
              <li class="menu__item">About</li>
              <li class="menu__item">Skill</li>
              <li class="menu__item">Experience</li>
              <li class="menu__item">Education</li>
              <li class="menu__item">Work</li>
              <li class="menu__item">Blog</li>
              <li class="menu__item">Contact</li>
            </ul>
            <a class="menu__btn">
              Menu
              <i class="fa fa-bars" aria-hidden="true"></i>
            </a>
            <a class="menu__action">+</a>
          </div>
        </nav>
      </header>
    );
  }
}
