import axios from 'axios';
import { APIURL } from '../config';
import { SEARCH_BOX_TERM_CHANGED, SEARCH_BOX_SUCCESS, SEARCH_BOX_SUBMITTED, SEARCH_BOX_LOADING, SEARCH_BOX_ERROR } from '../actions/types';

export const searchProductlist = text => {
	return async dispatch => {
		dispatch({
			type: SEARCH_BOX_LOADING
		});
		try {
			const result = await axios.get(APIURL + 'search/' + text);
			dispatch({
				type: SEARCH_BOX_SUCCESS,
				payload: result.data.results
			});
		} catch (error) {
			dispatch({
				type: SEARCH_BOX_ERROR,
				payload: 'Error trying to access the product list'
			});
		}
	};
};

export const searchTermChange = text => {
	return {
		type: SEARCH_BOX_TERM_CHANGED,
		payload: text
	};
};

export const searchTermSubmitted = text => {
	return {
		type: SEARCH_BOX_LOADING
	};
};
