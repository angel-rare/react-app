import React, { Component } from 'react';
import './Education.scss';

class Home extends Component {
  render() {
    return (
      <div class="container">
        <section>
          <h2>Educational Value</h2>
          <div class="relative">
            <div class="timeline">
              <div class="item top">
                <div class="marker"></div>
                <div class="desc">
                  <span>University of design</span>
                  <h4>Master degree of design</h4>
                </div>
                <div class="year">2005 - 2006</div>
              </div>
              <div class="item bottom">
                <div class="marker"></div>
                <div class="desc">
                  <span>University of design</span>
                  <h4>Master degree of design</h4>
                </div>
                <div class="year">2005 - 2006</div>
              </div>
              <div class="item top">
                <div class="marker"></div>
                <div class="desc">
                  <span>University of design</span>
                  <h4>Master degree of design</h4>
                </div>
                <div class="year">2005 - 2006</div>
              </div>
              <div class="item bottom">
                <div class="marker"></div>
                <div class="desc">
                  <span>University of design</span>
                  <h4>Master degree of design</h4>
                </div>
                <div class="year">2005 - 2006</div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2>Hobbies & Interest</h2>
          <div class="flex">
            <div class="card">
              <div class="card__item">
                <i class="ion-easel"></i>
              </div>
              <h6>Web research</h6>
            </div>
            <div class="card">
              <div class="card__item">
                <i class="ion-camera"></i>
              </div>
              <h6>Phtography</h6>
            </div>
            <div class="card">
              <div class="card__item">
                <i class="ion-plane"></i>
              </div>
              <h6>Travelling</h6>
            </div>
            <div class="card">
              <div class="card__item">
                <i class="ion-ios-bookmarks-outline"></i>
              </div>
              <h6>Book reading</h6>
            </div>
            <div class="card">
              <div class="card__item">
                <i class="ion-ios-musical-notes"></i>
              </div>
              <h6>Music</h6>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;