import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import Breadcrums from './product/Breadcrums';
import ProductListItem from './product/ProductListItem';

class SearchResult extends Component {
  state = {
    searchTerm: ''
  };
  /**
   * Search for product list when the user
   * come in directly with the url
   * @method componentWillMount
   * @return {[type]}           [description]
   */
  componentWillMount() {
    this.loadData();
  }

  /**
   * Check if search term change
   * @method shouldComponentUpdate
   * @param  {[type]}              nextProps [description]
   * @param  {[type]}              nextState [description]
   * @return {[type]}                        [description]
   */
  shouldComponentUpdate(nextProps, nextState) {
    const { loading, searchTerm } = nextProps;
    //needs to make a new request
    if (loading && searchTerm !== nextState.searchTerm) {
      this.loadData();
      return false;
    }
    return true;
  }

  /**
   * Load data from URL or searchTerm state
   * @method loadData
   * @return {[type]} [description]
   */
  loadData() {
    let searchTerm = this.props.searchTerm;
    if (searchTerm === '') {
      searchTerm = queryString.parse(this.props.location.search).search;
      this.props.searchTermChange(searchTerm || '');
    }

    if (!searchTerm) return this.props.history.push(`/`);

    this.setState({
      searchTerm: searchTerm
    });
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
    return this.props.items.map((item, i) => (
      <ProductListItem key={item.id} {...item} />
    ));
  }

  render() {
    if (this.loading === true) return this.renderLoading();

    return (
      <div className="page-container">
        <div className="product-result">
          <Breadcrums categories={this.props.categories} />
          {this.renderError()}
          {this.renderLoading()}
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ search, productList }, ownProps) => {
  const { searchTerm, loading } = search;
  const { items, error, categories, author } = productList;
  return { searchTerm, loading, items, error, categories };
};
export default withRouter(connect(mapStateToProps, actions)(SearchResult));
