import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome
          </p>
          <button>Title</button>
          <Header title="Custom Header"/>
        </header>
      </div>
    );
  }
}

export default App;
