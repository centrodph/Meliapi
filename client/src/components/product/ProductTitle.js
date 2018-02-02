import React from 'react';
const ProductTitle = ({ title, onClick }) => {
	return (
		<h1 className="product-title" onClick={onClick}>
			{title}
		</h1>
	);
};

export default ProductTitle;
