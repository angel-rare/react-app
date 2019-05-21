import React, { Component } from 'react';
import './Experience.scss';

class Experience extends Component {
  render() {
    return (
      <div className="container">
        <section id="career">
          <i className="ion-images"></i>
          <i className="ion-card"></i>
          <h3>8 Years Experience</h3>
          <div className="event">
            <div className="event__bar"></div>
            <div className="event__mark bg-white">
              <i className="ion-easel"></i>
            </div>
            <div className="event__group">
              <div className="event__header bg-white">
                <h5 className="bg-purple text-white text-center">
                  2012 - Current</h5>
                <h4 className="text-center">Themeforest</h4>
              </div>
              <div className="event__content  bg-white">
                <h4>SENIOR WEB & UX DESIGNER</h4>
                <p className="text-gray">Neque porro quisquam est,
                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                velitus sed quia non num quam eius modi tempora incidunt
                ut labore et dolore magnam aliquam quaerat voluptatem.</p>
              </div>
            </div>
            <div className="event__group">
              <div className="event__header bg-white">
                <h5 className="bg-purple text-white text-center">
                  2008 - 2012</h5>
                <h4 className="text-center">Graphicriver</h4>
              </div>
              <div className="event__content  bg-white">
                <h4>Graphic designer</h4>
                <p className="text-gray">Neque porro quisquam est, qui dolorem
                  ipsum quia dolor sit amet, consectetur, adipisci velitus sed
                  quia non num quam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
            </div>
            <div className="event__group">
              <div className="event__header bg-white">
                <h5 className="bg-purple text-white text-center">
                  2006 - 2008</h5>
                <h4 className="text-center">Codecanyon</h4>
              </div>
              <div className="event__content  bg-white">
                <h4>Web developer</h4>
                <p className="text-gray">Neque porro quisquam est, qui dolorem
                  ipsum quia dolor sit amet, consectetur, adipisci velitus sed
                  quia non num quam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam quaerat voluptatem.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="feedback" lass="d-flex flex-column">
          <div className="profile-wrapper">
            {/* <img className="profile" src={require('./../../public/img/man.jpg')} /> */}
            <div className="profile__bar"></div>
          </div>
          <i className="font-xxl text-center d-block">"Awesome to work with.
            Incredibly organized, easy to communicate with, responsive with
            next iterations, and beautiful work."</i>
          <h5 className="font-xl text-center">Swetain, CEO of Texco Company</h5>
          <div className="d-flex flex-center">
            <div className="btn btn-thin active"></div>
            <div className="btn btn-thin"></div>
            <div className="btn btn-thin"></div>
          </div>
        </section>
      </div>
    );
  }
}

export default Experience;