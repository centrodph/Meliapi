import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import Clear from './common/Clear';
import ProductDetailDescription from './product/ProductDetailDescription';
import ProductStatus from './product/ProductStatus';
import ProductTitle from './product/ProductTitle';
import ProductThumb from './product/ProductThumb';
import ProductComprar from './product/ProductComprar';
import ProductPrice from './product/ProductPrice';
import Breadcrums from './product/Breadcrums';
/**
 * Show product detail
 * @extends Component
 */
class ProductDetail extends Component {
  componentWillMount() {
    const productId = this.props.match.params.id;
    if (!productId) return this.props.history.push(`/`);
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

  renderDetail() {
    if (this.props.productDetail === null) return null;
    const {
      categories,
      description,
      condition,
      sold_quantity,
      title,
      picture,
      price,
      free_shipping
    } = this.props.productDetail.item;
    return (
      <div className="page-container">
        <Breadcrums categories={categories} />
        <div className="product-detail-content">
          <div className="product-detail-left">
            <ProductThumb picture={picture} alt={title} />
          </div>
          <div className="product-detail-right">
            <ProductStatus
              condition={condition}
              sold_quantity={sold_quantity}
            />
            <ProductTitle title={title} />
            <ProductPrice {...price} />
            <ProductComprar
              {...this.props.productDetail.item}
              title="Comprar"
            />
          </div>
          <Clear />
          <ProductDetailDescription description={description} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="product-detail">
        {this.renderLoading()}
        {this.renderError()}
        {this.renderDetail()}
      </div>
    );
  }
}

const mapStateToProps = ({ product }, ownProps) => {
  const { error, loading, productDetail } = product;
  return {
    error,
    loading,
    productDetail
  };
};
export default connect(mapStateToProps, actions)(ProductDetail);
