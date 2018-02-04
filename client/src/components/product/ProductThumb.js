import React from 'react';
import { Link } from 'react-router-dom';

const ProductThumb = ({ picture, alt, onClick, to }) => {
  const display = to ? (
    <Link to={to}>
      <img src={picture} alt={alt} title={alt} onClick={onClick} />
    </Link>
  ) : (
    <img src={picture} alt={alt} title={alt} onClick={onClick} />
  );
  return <div className="product-thumb">{display}</div>;
};

export default ProductThumb;
