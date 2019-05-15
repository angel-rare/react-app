import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickCnt: 0,
      title: "Custom Header"
    }

    this.buttonEvent = this.buttonEvent.bind(this);
  }

  buttonEvent() {
    this.state.clickCnt ++;
    this.setState({
      title: "Custom Header" + this.state.clickCnt
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome
          </p>
          <button onClick={this.buttonEvent}>Title</button>
          <Header title={this.state.title}/>
        </header>
      </div>
    );
  }
}

export default App;
