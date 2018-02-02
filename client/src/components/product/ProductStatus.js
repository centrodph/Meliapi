import React from 'react';
const ProductStatus = ({ condition, sold_quantity }) => {
	let qty = '';
	sold_quantity = Number(sold_quantity);

	if (sold_quantity == 1) qty = `- ${sold_quantity} vendido`;
	if (sold_quantity > 1) qty = `- ${sold_quantity} vendidos`;
	return (
		<div className="product-status">
			{condition} {qty}
		</div>
	);
};

export default ProductStatus;
