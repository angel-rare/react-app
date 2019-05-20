import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />


          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
