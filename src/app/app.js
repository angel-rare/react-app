import React from 'react';
import Routes from './router';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import Header from './containers/header';
import Footer from './containers/footer';

class App extends React.Component {

  constructor (props) {
    super(props);
  }

  onChangeTitle = () => {
    this.setState({
      isChanged: !this.state.isChanged
    });
  };

  render () {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Routes />
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
