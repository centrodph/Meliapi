import React from 'react';
const ProductDetailDescription = ({ description }) => {
  const parse = description.split('\n').map((item, key) => {
    return (
      <div key={key}>
        {item}
        <br />
      </div>
    );
  });

  return (
    <div className="product-detail-description">
      <h5>Descripcion del producto</h5>
      <article>{parse}</article>
    </div>
  );
};

export default ProductDetailDescription;
