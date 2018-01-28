import React, { Component } from 'react';
import logo from '../assets/images/Logo_ML@2x.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src={logo} />
        </div>
      </div>
    );
  }
}

export default Header;
