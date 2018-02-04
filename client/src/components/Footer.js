import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footerComponent">
        <strong>github: </strong>
        <a href="https://github.com/centrodph" target="_blank">
          Gerardo Perrucci
        </a>
        | <strong>email: </strong>
        <a href="mailto:centrodph@gmail.com" target="_blank">
          centrodph@gmail.com
        </a>
      </div>
    );
  }
}

export default Footer;
