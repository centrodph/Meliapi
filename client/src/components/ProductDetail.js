import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import Clear from './common/Clear';
import ProductDetailDescription from './product/ProductDetailDescription';
import ProductStatus from './product/ProductStatus';
import ProductTitle from './product/ProductTitle';
import ProductThumb from './product/ProductThumb';
import ProductComprar from './product/ProductComprar';
/**
 * Show product detail
 * @extends Component
 */
class ProductDetail extends Component {
	componentWillMount() {
		const productId = this.props.match.params.id;
		if (!productId) return this.props.history.push('/');
		this.props.getProductDetail(productId);
	}

	/**
	 * Show the error
	 * @method renderError
	 * @return {[type]}    [description]
	 */
	renderError() {
		if (this.props.error !== '') {
			return <div className="error">{this.props.error}</div>;
		}
	}
	/**
	 * Display a loading info when is searching
	 * @method renderLoading
	 * @return {[type]}      [description]
	 */
	renderLoading() {
		if (this.props.loading === true) {
			return <div className="loading">Loading product detail</div>;
		}
	}

	renderDetail() {
		if (this.props.productDetail === null) return null;
		const { description, condition, sold_quantity, title, picture } = this.props.productDetail.item;
		return (
			<div className="product-detail-content">
				<div className="product-detail-left">
					<ProductThumb picture={picture} alt={title} />
				</div>
				<div className="product-detail-right">
					<ProductStatus condition={condition} sold_quantity={sold_quantity} />
					<ProductTitle title={title} />
					<ProductComprar {...this.props.productDetail.item} />
				</div>
				<Clear />
				<ProductDetailDescription description={description} />
			</div>
		);
	}

	render() {
		return (
			<div className="product-detail">
				{this.renderLoading()}
				{this.renderError()}
				{this.renderDetail()}
			</div>
		);
	}
}

const mapStateToProps = ({ product }, ownProps) => {
	const { error, loading, productDetail } = product;
	return {
		error,
		loading,
		productDetail
	};
};
export default connect(mapStateToProps, actions)(ProductDetail);
