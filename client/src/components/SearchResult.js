import React, { Component } from 'react';
import queryString from 'query-string';

class SearchResult extends Component {
  componentWillMount() {
    const parsed = queryString.parse(this.props.location.search);
    console.log(parsed);
  }

  render() {
    return <div className="product-detail">SearchResult page</div>;
  }
}

export default SearchResult;
