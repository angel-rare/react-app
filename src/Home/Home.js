import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <section id="home">
        <div class="row aside--left">
          <h1>
            Design<sup>+</sup> Develope<sup>+</sup><br />
            Interactive<sup>+</sup> Art<sup>+</sup>
          </h1>
          <p>
            Hello, I’m Benjamin Thomson. I Have 8 years of experience
            in Web and UX design.
            I am worked on a variety of brands and with agencies
            both big and small.
          </p>
          <div class="section__button">
            <button class="button button--white">Hire me now</button>
            <button class="button button--purple">Download CV</button>
          </div>
        </div>
        <div class="aside--right">
          <img
            src={require('./../Common/img/man.png')}
            alt="man"
            class="section__img" />
        </div>
      </section>
    );
  }
}

export default Home;