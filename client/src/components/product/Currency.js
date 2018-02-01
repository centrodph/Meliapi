import React from 'react';
const Currency = ({ currency }) => {
  switch (currency) {
    case 'USD':
      return <span className="currency">u$s</span>;
    case 'ARS':
      return <span className="currency">$</span>;
    default:
      return <span className="currency">{currency}$</span>;
  }
};

export default Currency;
