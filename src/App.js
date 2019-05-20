import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import About from './About/About';
import Error from './404/404';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/404" component={Error} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
