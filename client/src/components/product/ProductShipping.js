import React from 'react';
const ProductShipping = ({ free_shipping }) => {
  if (free_shipping) {
    return <span>FREE</span>;
  }
  return null;
};

export default ProductShipping;
