import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footerComponent">
        <Link to={process.env.PUBLIC_URL + '/'}>Home</Link> |
        <Link to={process.env.PUBLIC_URL + '/items?search=televisor&size=3'}>
          SearchResult
        </Link>{' '}
        |
        <Link to={process.env.PUBLIC_URL + '/items/992'}>ProductDetail</Link>
      </div>
    );
  }
}

export default Footer;
