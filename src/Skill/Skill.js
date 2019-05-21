import React, { Component } from 'react';

import './../Common/scss/common.scss';
import './Skill.scss';
import './circle.css';

class Skill extends Component {
  render() {
    return (
      <div className="container">
        <h3>My Skills Values</h3>
        <div className="flex">
          <div className="md-6 sm-12">
            <h4>Technical skills</h4>

            <h5>Wordpress</h5>
            <div className="progress flex relative fill">
              <div className="progress__bar w-85"></div>
              <div className="progress__mark l-85">85%</div>
            </div>

            <h5>Wordpress</h5>
            <div className="progress flex relative fill">
              <div className="progress__bar w-99"></div>
              <div className="progress__mark l-99">99%</div>
            </div>

            <h5>Wordpress</h5>
            <div className="progress flex relative fill">
              <div className="progress__bar w-75"></div>
              <div className="progress__mark l-75">75%</div>
            </div>

            <h5>Wordpress</h5>
            <div className="progress flex relative fill">
              <div className="progress__bar w-67"></div>
              <div className="progress__mark l-67">67%</div>
            </div>
          </div>
          <div className="md-6 sm-12 flex flex-start">
            <h4 className="md-12 sm-12">Knowledge</h4>
            <div className="md-6 sm-12">
              <i className="ion-md-arrow-forward"></i>
              <h5>Install and configure</h5>
              <i className="ion-md-arrow-forward"></i>
              <h5>Web usability</h5>
              <i className="ion-md-arrow-forward"></i>
              <h5>Digital painting</h5>
              <i className="ion-md-arrow-forward"></i>
              <h5>Grid and layout</h5>
              <i className="ion-md-arrow-forward"></i>
              <h5>Mobile app design</h5>
              <i className="ion-md-arrow-forward"></i>
              <h5>Graphical design</h5>
              <i className="ion-md-arrow-forward"></i>
              <h5>Seo optimization</h5>
            </div>
            <div className="md-6 sm-12">
              <i className="ion-md-arrow-forward"></i>
              <h5>Ux and ui design</h5>
              <i className="ion-md-arrow-forward"></i>
              <h5>Logo design</h5>
              <i className="ion-md-arrow-forward"></i>
              <h5>3d animation & visual effects</h5>
              <i className="ion-md-arrow-forward"></i>
              <h5>Audio video editing</h5>
              <i className="ion-md-arrow-forward"></i>
              <h5>Photography</h5>
              <i className="ion-md-arrow-forward"></i>
              <h5>Web development</h5>
              <i className="ion-md-arrow-forward"></i>
              <h5>Digital marketing</h5>
            </div>
          </div>
        </div>
        <div className="flex flex-around">
          <h4 className="md-12 sm-12">Language skills</h4>
          <div className="md-4 sm-12 progress__circle">
            <div className="c100 p99 purple">
              <span>99%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <h4 className="text-center">English<br /> Experienced</h4>
          </div>
          <div className="md-4 sm-12 progress__circle">
            <div className="c100 p80 purple">
              <span>80%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <h4 className="text-center">French<br /> advanced</h4>
          </div>
          <div className="md-4 sm-12 progress__circle">
            <div className="c100 p69 purple">
              <span>69%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <h4 className="text-center">German basic</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;