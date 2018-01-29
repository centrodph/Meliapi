import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footerComponent">
        TEST
        <Link to="./">Home</Link> |
        <Link to="./items?search=televisor&size=3">SearchResult</Link> |
        <Link to="./items/992">ProductDetail</Link>
      </div>
    );
  }
}

export default Footer;
