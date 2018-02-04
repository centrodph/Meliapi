import React from 'react';
const ProductComprar = ({ title = 'Comprar', onClick }) => {
  return (
    <div className="product-comprar">
      <button className="product-comprar-btn" onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default ProductComprar;
