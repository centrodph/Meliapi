import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>EmailPlaform</h1>
        <ul>
          <li>Sample nav</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <a href="/auth/google">Google Login</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
