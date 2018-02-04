import React from 'react';
import { Link } from 'react-router-dom';

const ProductTitle = ({ title, onClick, to }) => {
  const display = to ? <Link to={to}>{title}</Link> : title;
  return (
    <h1 className="product-title" onClick={onClick}>
      {display}
    </h1>
  );
};

export default ProductTitle;
