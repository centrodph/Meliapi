import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class SearchResult extends Component {
  /**
   * Search for product list when the user
   * come in directly with the url
   * @method componentWillMount
   * @return {[type]}           [description]
   */
  componentWillMount() {
    let searchTerm = this.props.searchTerm;
    if (searchTerm === '') {
      searchTerm = queryString.parse(this.props.location.search).search;
      this.props.searchTermChange(searchTerm || '');
    }
    if (!searchTerm) return this.props.history.push('/');

    this.props.searchProductlist(searchTerm);
  }

  /**
   * Show the error
   * @method renderError
   * @return {[type]}    [description]
   */
  renderError() {
    if (this.props.error !== '') {
      return <div className="error">{this.props.error}</div>;
    }
  }

  /**
   * Display a loading info when is searching
   * @method renderLoading
   * @return {[type]}      [description]
   */
  renderLoading() {
    if (this.props.loading === true) {
      return (
        <div className="loading">Searching for {this.props.searchTerm}...</div>
      );
    }
  }

  renderList() {
    return this.props.items.map(item => <div key={item.id}>{item.title}</div>);
  }

  render() {
    if (this.loading === true) return this.renderLoading();

    return (
      <div className="product-detail">
        {this.renderError()}
        {this.renderLoading()}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ search, productList }, ownProps) => {
  const { searchTerm, loading } = search;
  const { items, error } = productList;
  return { searchTerm, loading, items, error };
};
export default connect(mapStateToProps, actions)(SearchResult);
