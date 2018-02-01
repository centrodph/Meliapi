import React from 'react';
import Currency from './Currency';
import ProductShipping from './ProductShipping';
const ProductPrice = ({ amount, currency, decimals, free_shipping }) => {
  return (
    <div className="product-price">
      <Currency currency />
      {amount}
      <ProductShipping free_shipping={free_shipping} />
    </div>
  );
};

export default ProductPrice;
