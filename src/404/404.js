import React, { Component } from 'react';
import './../Common/scss/common.scss';

class ErrorPage extends Component {
  render() {
    let style = {
      textAlign: 'center',
      lineHeight: '5em',
    };

    return (
      <div>
        <h1 style={style}> 404 Page </h1>
      </div>
    );
  }
}

export default ErrorPage;