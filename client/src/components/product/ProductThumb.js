import React from 'react';
const ProductThumb = ({ picture, alt, onClick }) => {
	return (
		<div className="product-thumb">
			<img src={picture} alt={alt} title={alt} onClick={onClick} />
		</div>
	);
};

export default ProductThumb;
