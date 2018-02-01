import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

import ProductPrice from './ProductPrice';
class ProductListItem extends Component {
  render() {
    const { title, picture, free_shipping, condition, price } = this.props;

    return (
      <div className="product-list-item-component">
        <div className="product-title">{title}</div>

        <ProductPrice {...price} free_shipping={free_shipping} />

        <div className="product-thumb">
          <img src={picture} />
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
export default connect(mapStateToProps, actions)(ProductListItem);
