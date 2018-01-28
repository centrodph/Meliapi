import React, { Component } from 'react';

class ProductDetail extends Component {
  render() {
    return (
      <div className="product-detail">
        Producto detail {this.props.match.params.id}
      </div>
    );
  }
}

export default ProductDetail;
