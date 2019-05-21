import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import About from './About/About';
import Skill from './Skill/Skill';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Error from './404/404';
import './App.css';
import './Common/scss/common.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skill" component={Skill} />
            <Route path="/experience" component={Experience} />
            <Route path="/education" component={Education} />
            <Route path="/404" component={Error} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
