import React, { Component } from 'react';
import logo from '../assets/images/Logo_ML@2x.png';
import SearchBox from './SearchBox';
import Clear from './common/Clear';

class Header extends Component {
  render() {
    return (
      <div className="header-component">
        <div className="header-container">
          <div className="logo">
            <img src={logo} />
          </div>
          <SearchBox />
          <Clear />
        </div>
      </div>
    );
  }
}

export default Header;
