import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

/**
 * Show product detail
 * @extends Component
 */
class ProductDetail extends Component {
  componentWillMount() {
    const productId = this.props.match.params.id;
    if (!productId) return this.props.history.push('/');
    this.props.getProductDetail(productId);
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
      return <div className="loading">Loading product detail</div>;
    }
  }

  render() {
    return (
      <div className="product-detail">
        Producto detail {this.props.match.params.id}
      </div>
    );
  }
}

const mapStateToProps = ({ product }, ownProps) => {
  const { error, loading } = product;
  return {
    error,
    loading
  };
};
export default connect(mapStateToProps, actions)(ProductDetail);
