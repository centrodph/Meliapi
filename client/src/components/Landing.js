import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        Repository:{' '}
        <a href="https://github.com/centrodph/Meliapi" target="_blank">
          https://github.com/centrodph/Meliapi
        </a>
        <br />
        Author: Gerardo Perrucci
      </div>
    );
  }
}

export default Landing;
