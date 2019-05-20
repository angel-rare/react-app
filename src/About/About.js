import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div class="aside--left">
          <h2>About Me</h2>
          <img
            src={require('./../Common/img/man-small.png')}
            alt="man"
            class="section__img" />
        </div>
        <div class="aside--right">
          <div class="row">
            <h3>
              Benjamin Thomson
            </h3>
            <h5>Web & UX Designer</h5>
            <p>
              Ultricies nisi voluptatem, illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo nemo enim
              ipsam voluptatem.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque latu dantium, totam rem aperiam, eaque
              ipsa quae ab illo tempor dignissim at.
            </p>
            <div class="signature">
              <img src={require('./../Common/img/signature.png')} />
            </div>
            <ul class="list-text">
              <li>
                <b>DATE OF BIRTH:</b> 24 JAN 1989
              </li>
              <li>
                <b>PHONE:</b> 012-345-6789
              </li>
              <li>
                <b>EMAIL:</b> SILITY@EXAMPLE.COM
              </li>
              <li>
                <b>ADDRESS:</b>
                123 SILITY, SOUTH CORNER STREET, MELBORNE, AUSTRALIA.
              </li>
              <li>
                <b>WEBSITE:</b> HTTP://WWW.EXAMPLE.COM
              </li>
            </ul>
          </div>
          <div class="row">
            <h3>What I'm Doing</h3>

            <div class="flex">
              <div class="card">
                <i class="fa fa-tv"></i>
                Web & UX Design
              </div>
              <div class="card">
                <i class="fas fa-mobile-alt"></i>
                App development
              </div>
              <div class="card">
                <i class="fas fa-trophy"></i>
                Marketing
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;