import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

import Clear from '../common/Clear';
import ProductPrice from './ProductPrice';
import ProductThumb from './ProductThumb';
import ProductTitle from './ProductTitle';
class ProductListItem extends Component {
  onClickHandler(productId) {
    this.props.history.push(`/items/${productId}`);
  }

  render() {
    const {
      title,
      picture,
      free_shipping,
      condition,
      price,
      city_name,
      id
    } = this.props;

    const to = `/items/${id}`;

    return (
      <article className="product-list-item-component">
        <div className="product-list-item-content">
          <div className="product-list-item-left">
            <ProductThumb picture={picture} alt={title} to={to} />
          </div>
          <div className="product-list-item-right">
            <header>
              <ProductPrice {...price} free_shipping={free_shipping} />
              <ProductTitle title={title} to={to} />
            </header>
            <address>{city_name}</address>
            <Clear />
          </div>
        </div>
      </article>
    );
  }
}

export default withRouter(connect(null, actions)(ProductListItem));
