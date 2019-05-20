import React from 'react';

import './Footer.scss';

export default class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div class="footer__top">
          <ul>
            <li>
              <h4>ADDRESS</h4>
              <p>123 Sility, South Corner Street,<br /> Melbornem Australia.</p>
            </li>
            <li>
              <h4>CONNECT</h4>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-google-plus"></i>
              <i class="fab fa-behance"></i>
              <i class="fab fa-dribble"></i>
            </li>
            <li>
              <h4>CONTACT</h4>
              <p>Tel: +61 123-456-7890</p>
              <p>Mail: Sility@example.com</p>
            </li>
          </ul>
        </div>
        <div class="footer__bottom">
          Copyright @ Sility. All Rights Reserved.
        </div>
      </footer>
    );
  }
}
