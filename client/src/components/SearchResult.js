import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class SearchResult extends Component {
  componentWillMount() {
    const parsed = queryString.parse(this.props.location.search);
    console.log(parsed);
  }

  renderLoading() {
    if (this.props.loading === true) {
      return (
        <div className="loading">
          <br />
          <br />
          <br />
          searching for {this.props.searchTerm}...
          <br />
          <br />
          <br />
        </div>
      );
    }
  }
  render() {
    if (this.loading === true) return this.renderLoading();

    return <div className="product-detail">{this.renderLoading()}</div>;
  }
}

const mapStateToProps = ({ search }, ownProps) => {
  const { searchTerm, submited, error, loading } = search;
  return { searchTerm, loading };
};
export default connect(mapStateToProps, actions)(SearchResult);
